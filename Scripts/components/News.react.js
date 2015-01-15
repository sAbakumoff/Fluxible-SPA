'use strict';

var StoreMixin = require('fluxible-app').StoreMixin;
var RouterMixin = require('flux-router-component').RouterMixin;
var NewsStore = require('../stores/NewsStore');

var React = require('react');

var NewsPage = React.createClass({
	mixins : [StoreMixin],
	statics: {
		storeListeners: [NewsStore]
	},
	getInitialState : function() {
		return this.getStore(NewsStore).getState();
	},
	onChange: function () {
		var state = this.getStore(NewsStore).getState();
		this.setState(state);
	},
    render : function(){
        return (
          <h1>{this.state.data}</h1>
        );
    }
});

module.exports = NewsPage;
