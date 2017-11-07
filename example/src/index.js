var MainView = require('./MainView');

React.render(
    React.createElement(MainView,{ height: '100%', width: '100%' }),
    document.getElementById('content')
);
