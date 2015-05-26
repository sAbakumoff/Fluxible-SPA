var React = require('react');

var provideContext = require('fluxible/addons').provideContext;
var connectToStores = require('fluxible/addons').connectToStores;
var handleHistory = require('fluxible-router').handleHistory;
var HistoryWithHash = require('fluxible-router/addons').HistoryWithHash;

var Menu = require('./Menu.react');
var Content = require('./Content.react');
var ApplicationStore = require('../stores/ApplicationStore');
var RouteStore = require('../stores/RouteStore');
var ProgressIndicator = require('./Progress.react');

var pages = require('../configs/routes').pages;

var Application = React.createClass({
  	render: function() {
		var currentRoute =  this.props.currentRoute;
		if(currentRoute){
			element = <span>{currentRoute.get('page')}</span>;
		}
		else{
			element = <span>no route yet</span>;
		}
		return (
			<div>{element}</div>
		);
  }

});

var historyOptions = {
	historyCreator: function historyCreator() {
		return new HistoryWithHash({
			useHashRoute: true
		});
	},
	checkRouteOnPageLoad : true
};

Application = handleHistory(Application, historyOptions);

Application = provideContext(Application);

module.exports = Application;
