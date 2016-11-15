import React from 'react';

import actions     from '../actions';
import { connect } from 'react-redux';

import WordButtons from '../components/inputs/WordButtons.jsx';
import InitialWord from '../components/other/InitialWord.jsx';
import UserWord    from '../components/inputs/UserWord.jsx';
import AllWords    from '../components/other/AllWords.jsx';

import './App.less';

class App extends React.Component {
    handleCharClick(value) {
        this.props.inputValue(value);
    }

    handleInputClear() {
        this.props.clearInput();
    }

    handleHelp() {
        this.props.help();
    }

    handleWordGenerate() {
        this.props.generate();
    }

    render() {
        return (
            <div className='App'>
                <WordButtons
                    onInputClear = {this.handleInputClear.bind(this)}
                    onHelp       = {this.handleHelp.bind(this)}
                    onGenerate   = {this.handleWordGenerate.bind(this)} />

                <InitialWord
                    value       = {this.props.initialWord}
                    isEdited    = {this.props.status.isEdited}
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
        userInput:   state.userInput,
        status:      state.status
    };
}

function mapDispatchToProps(dispatch) {
    return {
        inputValue: (value) => {
            dispatch(actions.word.inputValue(value));
        },

        clearInput: () => {
            dispatch(actions.word.clearInput());
        },

        help: () => {
            dispatch(actions.word.help());
        },

        generate: () => {
            dispatch(actions.word.generate());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
