import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import { Button, Glyphicon } from 'react-bootstrap';

class CurrencyListApp extends Component {
    constructor(props) {
        super(props);

        this.createCurrency = this.createCurrency.bind(this)
    }

    createCurrency(item){
        return(
            <div>
                <li key={item.id} >
                   <h4>{item.key} {item.value}</h4>
                   <p>1 USD = {item.key} {item.baseValue} </p>
                   <Button bsSize="small" bsStyle="danger" type="submit" onClick={() => this.delete(item.id)}><Glyphicon glyph="glyphicon glyphicon-remove" /></Button>
               </li>
            </div>
        )
    }

    delete(id){
        this.props.delete(id)
    }

    render(){
        let currencyDataList = this.props.entries
        let dataList = currencyDataList.map(this.createCurrency)

        return (
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {dataList}
                </FlipMove>
            </ul>
        )
    }
}

export default CurrencyListApp;
