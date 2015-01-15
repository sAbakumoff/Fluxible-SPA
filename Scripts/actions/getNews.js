var constants = require('../constants/constants');

module.exports = function(context, payload, onStarted){
    context.dispatch(constants.GET_DATA_START);
    onStarted();
    setTimeout(function(){
            context.dispatch(constants.GET_DATA_END);
            context.dispatch('UPDATE_NEWS', 'Breaking news');
    }, 1000);
};
