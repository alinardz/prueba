import React, {Component} from 'react';
import {SampleTransactions} from '../services/transactions';
import {TransactionsList} from './TransactionsList';
import {SearchBars} from './SearchBars';


class Homepage extends Component{
    state = {
        transactions: SampleTransactions,
        showTransactions: SampleTransactions,
        search: ''
    }

    onChange = (e) =>{
        const value = e.target.value;
        this.setState({search:value})
    }

    render(){
        let {showTransactions, search} = this.state
        const regExAmount= new RegExp(search, 'i');
        showTransactions = showTransactions.filter(transaction=>{
             return regExAmount.test(transaction.amount)
        })

        return(
            <div>
                <SearchBars onChange={this.onChange}/>
                <TransactionsList transactions={showTransactions}/>
            </div>
        )
    }
}

export default Homepage;