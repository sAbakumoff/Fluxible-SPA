'use strict';

var React = require('react');

var Content = React.createClass({
    render : function(){
        var contentElement = React.createElement(this.props.currentPage.component, {context : this.props.context});
        return(
            <div id='page-wrapper'>
                {contentElement}
            </div>
        );
    }
});

module.exports = Content;
