import React from 'react';

import { ButtonToolbar, Button } from 'react-bootstrap';

import './WordButtons.less';

export default class WordButtons extends React.Component {
    render() {
        return (
            <div className='WordButtons'>
                <ButtonToolbar className='buttons'>
                    <Button
                        className = 'generateButton'
                        bsStyle   = 'primary'>
                            New
                    </Button>

                    <Button
                        className = 'clearButton'
                        bsStyle   = 'primary'>
                            Clear
                    </Button>

                    <Button
                        className = 'helpButton'
                        bsStyle   = 'primary'>
                            Help
                    </Button>
                </ButtonToolbar>
            </div>
        );
    }
}
