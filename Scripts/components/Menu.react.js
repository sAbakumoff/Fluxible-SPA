'use strict';

var React = require('react');
var NavBar = require('./NavBar.react');

var Menu = React.createClass({
    render : function(){
        var menuPages = this.props.pages;
        return(
        <div className='navbar navbar-inverse navbar-fixed-top' role='navigation'>
            <div className='navbar-header'>
                <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-ex1-collapse'>
                    <span className='sr-only'>Toggle navigation</span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                    <span className='icon-bar'></span>
                </button>
                <a className='navbar-brand' href='#/'>SPA APP</a>
            </div>

            <NavBar currentPageName={this.props.currentPageName} links={menuPages} context={this.props.context} />
        </div>
        );
    }
});

module.exports = Menu;

