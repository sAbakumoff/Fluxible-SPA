var React = require('react');
var FluxibleApp = require('fluxible-app');
var HistoryWithHash = require('flux-router-component/utils').HistoryWithHash;
var routrPlugin = require('fluxible-plugin-routr');
var navigateAction = require('flux-router-component/actions/navigate');

var app = new FluxibleApp({
	appComponent: React.createFactory(require('./components/SpaApp.react'))
});

app.plug(routrPlugin({
	routes : require('./configs/routes').routes
}));

app.registerStore(require('./stores/ApplicationStore'));
app.registerStore(require('./stores/NewsStore'));

var context = app.createContext();

var AppComponent = app.getAppComponent();

var component = AppComponent({
	context: context.getComponentContext(),
	historyCreator: function historyCreator() {
	    return new HistoryWithHash({
	        useHashRoute: true
	    });
	},
	checkRouteOnPageLoad : false
});


var path = '/';
if(window.location.hash){
	path = window.location.hash.substring(1) || path;
}
context.getActionContext().executeAction(navigateAction, {
	url: path
}, function (err) {
	if(err){
		return console.log('unable to navigate to ' + path + ' cause : ' + err);
	}
	React.render(component, document.body);
});
