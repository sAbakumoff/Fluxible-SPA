var React = require('react');
var Fluxible = require('fluxible');

var app = new Fluxible({
	component: require('./components/SpaApp.react')
});

app.registerStore(require('./stores/RouteStore'));
app.registerStore(require('./stores/ApplicationStore'));
app.registerStore(require('./stores/NewsStore'));

var context = app.createContext();

React.render(context.createElement(), document.body);



