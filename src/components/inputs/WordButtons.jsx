import React from 'react';

import { ButtonToolbar, Button } from 'react-bootstrap';

import './WordButtons.less';

export default class WordButtons extends React.Component {
    render() {
        const {
            onInputClear,
            onHelp,
            onGenerate,
            onWordModalOpen,
            onAboutModalOpen
        } = this.props;

        return (
            <div className='WordButtons'>
                <ButtonToolbar className='buttons'>
                    <Button
                        className = 'generateButton'
                        bsStyle   = 'primary'
                        onClick   = {this._unpress.bind(this, onGenerate)}>
                            New
                    </Button>

                    <Button
                        className = 'clearButton'
                        bsStyle   = 'primary'
                        onClick   = {this._unpress.bind(this, onInputClear)}>
                            Clear
                    </Button>

                    <Button
                        className = 'helpButton'
                        bsStyle   = 'primary'
                        onClick   = {this._unpress.bind(this, onHelp)}>
                            Help
                    </Button>

                    <Button
                        className = 'customButton'
                        bsStyle   = 'primary'
                        onClick   = {this._unpress.bind(this, onWordModalOpen)}>
                            Custom
                    </Button>

                    <Button
                        className = 'aboutButton'
                        bsStyle   = 'primary'
                        onClick   = {this._unpress.bind(this, onAboutModalOpen)}>
                            About
                    </Button>
                </ButtonToolbar>
            </div>
        );
    }

    // button stays pressed after mouseUp
    _unpress(onClickFunction) {
        $('button').blur();

        onClickFunction();
    }
}
