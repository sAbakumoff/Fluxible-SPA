var React = require('react');
var StoreMixin = require('fluxible-app').StoreMixin;
var RouterMixin = require('flux-router-component').RouterMixin;
var Menu = require('./Menu.react');
var Content = require('./Content.react');
var ApplicationStore = require('../stores/ApplicationStore');

var SpaApp = React.createClass({
	mixins : [RouterMixin, StoreMixin],
	statics: {
		storeListeners: [ApplicationStore]
	},
	getInitialState : function() {
		return this.getStore(ApplicationStore).getState();
	},
	onChange: function () {
		var state = this.getStore(ApplicationStore).getState();
		this.setState(state);
	},
  	render: function() {
		var content = React.createElement(Content, {currentPage : this.state.currentPage, context : this.props.context});
		return (
			<div id='wrapper'>
				<Menu currentPageName={this.state.currentPageName} pages={this.state.pages} context={this.props.context} />
				{content}
			</div>
		);
  }

});

module.exports = SpaApp;
