var getNews = require('../actions/getNews');

module.exports.routes = {
    home : {
        method : 'get',
        path: '/',
        page : 'home'
    },
    news: {
        method : 'get',
        path: '/news',
        page : 'news',
        action : function(context, payload, done){
            context.executeAction(getNews, payload.params, done);
        }

    }
};

module.exports.pages = {
    home : {
        routeName : 'home',
        text: 'Home',
        component : require('../components/Home.react')
    },
    news : {
        routeName : 'news',
        text: 'News',
        component: require('../components/News.react')
    }
};