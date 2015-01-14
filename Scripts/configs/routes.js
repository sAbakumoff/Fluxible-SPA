module.exports.routes = {
    home : {
        method : 'get',
        path: '/',
        page : 'home'
    },
    news: {
        method : 'get',
        path: '/news',
        page : 'news'
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