'use strict';
var createStore = require('fluxible/addons/createStore');
var constants = require('../constants/constants');

var routesConfig = require('../configs/routes');

var handlers = {};
//handlers[constants.NAVIGATE_SUCCESS] = 'handleNavigate';
handlers[constants.UPDATE_PAGE_TITLE] = 'updatePageTitle';
handlers[constants.GET_DATA_START] = 'handleGetDataStart';
handlers[constants.GET_DATA_END] = 'handleGetDataEnd';

var ApplicationStore = createStore({
    storeName: 'ApplicationStore',
    handlers: handlers,
    initialize: function (dispatcher) {
        this.pages = routesConfig.pages;
        this.currentPage = null;
        this.currentPageName = '';
        this.currentRoute = null;
        this.pageTitle = '';
        this.isDataLoaded = false;
    },
    handleGetDataStart : function(){
      this.isDataLoaded = true;
      this.emitChange();
    },
    handleGetDataEnd : function(){
        this.isDataLoaded = false;
        this.emitChange();
    },
    handleNavigate: function (route) {
        var pageName = route.config.page;
        var page = this.pages[pageName];
        /*if (pageName === this.currentPageName) {
            return;
        }*/
        this.currentPageName = pageName;
        this.currentPage = page;
        this.currentRoute = route;
        this.emit('change');
    },
    updatePageTitle: function (title) {
        this.pageTitle = title.pageTitle;
        this.emitChange();
    },
    getState: function () {
        return {
            currentPageName: this.currentPageName,
            currentPage: this.currentPage,
            pages: this.pages,
            route: this.currentRoute,
            pageTitle: this.pageTitle,
            isDataLoaded : this.isDataLoaded
        };
    }
});


module.exports = ApplicationStore;
