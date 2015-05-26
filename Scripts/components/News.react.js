'use strict';

var React = require('react');

var provideContext = require('fluxible/addons').provideContext;
var connectToStores = require('fluxible/addons').connectToStores;

var NewsStore = require('../stores/NewsStore');


var NewsPage = React.createClass({
    render : function(){
        return (
          <h1>{this.state.data}</h1>
        );
    }
});


NewsPage = connectToStores(NewsPage, [NewsStore], function (stores, props) {
	return stores.NewsStore.getState();
});


NewsPage = provideContext(NewsPage);

module.exports = NewsPage;