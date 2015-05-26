'use strict';
var React = require('react');
var NavLink = require('fluxible-router').NavLink;

var NavBar = React.createClass({
	render: function() {
		var currentPageName = this.props.currentPageName,
            context = this.props.context,
			links = this.props.links,

            linksHtmlContent = Object.keys(links).map(function (name) {
				var link = links[name];
            	var className = '';
            	if (currentPageName === name) {
            		className = 'active';
            	}
            	return (
                    <li data-toggle='collapse' data-target='.in' className={className} key={name}>
                        <NavLink routeName={link.routeName} navParams={link.routeParams} context={context}>
							{link.text}
						</NavLink>
                    </li>
                );
});
return (
		<div className='collapse navbar-collapse navbar-ex1-collapse'>
			<ul className='nav navbar-nav side-nav'>
				{linksHtmlContent}
			</ul>
		</div>
	);
}
});

module.exports = NavBar;