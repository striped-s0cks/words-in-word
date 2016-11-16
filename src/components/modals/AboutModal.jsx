import React from 'react';

import Modal from './Modal.jsx';

export default class AboutModal extends React.Component {
    render() {
        const {
            isOpen,
            onHide
        } = this.props;

        const headerStyle = {
            color: 'darkred'
        };

        return (
            <Modal
                className            = 'AboutModal'
                isOpen               = {isOpen}
                title                = 'About the game'
                onHide               = {onHide}
                isSubmitButtonHidden = {true}>

                <p>
                    <b style={headerStyle}> Rules: </b> <br/>
                    Point of this game is to find words that could be created by using
                    characters of given main word. Each character could be used only once per each word.
                    Click on character to use it. Selected character will be visible under main word.
                    <br/>
                    At the bottom you can see all possible words. When you input valid word,
                    it will be saved in the bottom area. <br/>
                    <br/>

                    <b style={headerStyle}> Buttons: </b> <br/>
                    <b><i> New </i></b> - generate new main word. <br/>
                    <b><i> Clear </i></b> - clear your input. <br/>
                    <b><i> Help </i></b> - show random hidden character in random word in the bottom area. <br/>
                    <b><i> Custom </i></b> - show window with input. If you want to play with your own word,
                    type it and hit Play button.
                </p>
            </Modal>
        );
    }
}
