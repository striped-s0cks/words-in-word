import React from 'react';

import actions     from '../actions';
import { connect } from 'react-redux';

import InitialWord from '../components/other/InitialWord.jsx';
import UserWord    from '../components/inputs/UserWord.jsx';
import AllWords    from '../components/other/AllWords.jsx';

import './App.less';

class App extends React.Component {
    handleCharClick(value) {
        this.props.inputValue(value);
    }

    render() {
        return (
            <div className='App'>
                <InitialWord
                    value       = {this.props.initialWord}
                    onCharClick = {this.handleCharClick.bind(this)} />

                <UserWord
                    value = {this.props.userInput} />

                <AllWords
                    words = {this.props.words} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        initialWord: state.initialWord,
        words:       state.words,
        userInput:   state.userInput
    };
}

function mapDispatchToProps(dispatch) {
    return {
        inputValue: (value) => {
            dispatch(actions.word.inputValue(value));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
