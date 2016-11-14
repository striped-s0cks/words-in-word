import 'babel-polyfill';

import $        from 'jquery';
import ReactDOM from 'react-dom';
import React    from 'react';

window.React = React;
window.$     = window.jQuery = $;

import { Provider }    from 'react-redux';
import { createStore } from 'redux';
import reducer         from './reducers';

import App from './containers/App.jsx';

$(document).ready(function() {
    const store = createStore(
        reducer
    );

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('content')
    );
});
