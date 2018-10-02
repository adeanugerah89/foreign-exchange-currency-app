import React, { Component } from 'react';
import { Panel, FormControl, FormGroup, ControlLabel, InputGroup } from 'react-bootstrap';
import CurrencyApp from '../CurrencyApp/CurrencyApp';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }

        this.handleInputValue = this.handleInputValue.bind(this);
    }

    handleInputValue(event) {
        this.setState({inputValue: Number(event.target.value) ? Number(event.target.value) : ''})
    }

    render() {
        return (
            <div style={{width: 400}}>
                <Panel bsStyle="info">
                    <Panel.Heading>
                      <Panel.Title componentClass="h3">
                          <FormGroup>
                            <ControlLabel>USD - United State Dollars</ControlLabel>
                            <InputGroup>
                              <InputGroup.Addon>$</InputGroup.Addon>
                              <FormControl
                                pattern='[0-9]'
                                type="text"
                                value={this.state.inputValue}
                                placeholder="Enter value with number format"
                                onChange={this.handleInputValue}
                              />
                            </InputGroup>
                          </FormGroup>
                      </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <CurrencyApp inputValue={this.state.inputValue}/>
                    </Panel.Body>
                </Panel>
            </div>
        )
    }
}

export default HeaderComponent;
