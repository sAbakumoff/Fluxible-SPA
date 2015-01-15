'use strict';
var createStore = require('fluxible-app/utils/createStore');

var NewsStore = createStore({
    storeName: 'NewsStore',
    handlers: {
		'UPDATE_NEWS' : 'updateData'
	},
    initialize: function (dispatcher) {
	this.data = [];
    },
    updateData: function (data) {
        this.data = data;
        this.emitChange();
    },
    getState: function () {
        return {
		data : this.data
        };
    }
});


module.exports = NewsStore;
