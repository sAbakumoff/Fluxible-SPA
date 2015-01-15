'use strict';

var React = require('react');

var ProgressIndicator = React.createClass({
    render : function(){
        return(
            <div id='page-wrapper'>
                <img className='center-block' src='Content/img/ajax-loader.gif' />
            </div>
        );
    }
});

module.exports = ProgressIndicator;
