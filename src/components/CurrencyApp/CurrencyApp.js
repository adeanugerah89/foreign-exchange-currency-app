import React, { Component } from 'react';
import axios from 'axios';
import CurrencyListApp from '../CurrencyListApp/CurrencyListApp';
import { Button, FormControl } from 'react-bootstrap';
import '../../styles/CurrencyAppCss.css';
import '../../styles/CurrencyListAppCss.css';

class CurrencyApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addCurrencies: '',
            dataList: [
                {
                    baseValue: "14901.50",
                    id: 1538372038451,
                    key: "IDR",
                    value: "14901.50",
                },
                {
                    baseValue: "0.86",
                    id: 1538372238662,
                    key: "EUR",
                    value: 0.86
                },
                {
                    baseValue: "0.77",
                    id: 1538372337662,
                    key: "GBP",
                    value: 0.77
                },
                {
                    baseValue: "1.37",
                    id: 1538372397202,
                    key: "SGD",
                    value: 1.37
                }
            ],
            dataSource: []
        };

        this.handleAddCurrencies = this.handleAddCurrencies.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
        axios.get(`https://api.exchangeratesapi.io/latest?base=USD`)
          .then((response) => {
              let dataRates = response.data
              for(let value in dataRates.rates){
                  dataRates.rates[value] = dataRates.rates[value].toFixed(2)
                }

              this.setState({
                dataSource: dataRates
              })
          })
          .catch((error) => console.log(error))
     }

    componentDidUpdate (prevProps){
        if(this.props !== prevProps){
            let newStateValue = this.state.dataList.map(data => data.baseValue * this.props.inputValue)
            let newDataList = []
            this.state.dataList.forEach((data, idx) => {
                 newDataList.push({
                     key: data.key,
                     value:  newStateValue[idx],
                     baseValue:data.baseValue,
                     id: data.id
                 })
            })

            this.setState({
                dataList: newDataList
            })
        }

        return true
    }

    deleteItem(id) {
        let filteredItems = this.state.dataList.filter((item) => {
            return (item.id !== id)
        });

        this.setState({
            dataList: filteredItems
        })
    }

    handleAddCurrencies(event) {
        this.setState({addCurrencies: event.target.value});
    }

    handleSubmit(event) {
        let dataSource = this.state.dataSource.rates
        let addCurrencies = this.state.addCurrencies.toUpperCase()
        let existingKey = this.state.dataList.filter(data => data.key === addCurrencies)
        if (event.target.value !== "" && existingKey.length === 0){
            let newAddDataListItem = {}
            for (let key in dataSource) {
                if (key === addCurrencies) {
                    let value = this.props.inputValue ? this.props.inputValue * dataSource[key] : dataSource[key]
                    newAddDataListItem = {
                        key: key,
                        value: value,
                        baseValue: dataSource[key],
                        id: Date.now()
                    };
                }
            }

            if(Object.keys(newAddDataListItem).length !== 0) {
                this.setState((prev) => {
                    return { dataList: prev.dataList.concat(newAddDataListItem) }
                })
            }else {
                alert('Data not found, please check your input text')
            }

        }
        event.preventDefault();
        this.setState({addCurrencies: ''});
     }

    render(){
        return (
            <div className="currencyListMain">
                <CurrencyListApp
                    entries={this.state.dataList}
                    delete={this.deleteItem}
                />
                <div className="header">
                    <form onSubmit={this.handleSubmit}>
                        <FormControl
                          type="text"
                          value={this.state.addCurrencies}
                          placeholder="add more currencies"
                          onChange={this.handleAddCurrencies}
                        />
                        <Button bsStyle="primary" type="submit">Submit</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CurrencyApp;
