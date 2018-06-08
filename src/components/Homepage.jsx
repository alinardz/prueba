import React, {Component} from 'react';
import {SampleTransactions} from '../services/transactions';
import {TransactionsList} from './TransactionsList';
import {SearchBars} from './SearchBars';


class Homepage extends Component{
    state = {
        transactions: SampleTransactions,
        searchAmount: '',
        searchDate: '',
        searchCard: ''
    }

    filterAmount = (e) =>{
        const value = e.target.value;
        this.setState({searchAmount:value});
    }

    filterDate = (e) =>{
        const value = e.target.value;
        this.setState({searchDate:value});
    }

    filterCard = (e) =>{
        const value = e.target.value;
        this.setState({searchCard:value});
    }

    render(){
        let {transactions, searchAmount, searchDate, searchCard} = this.state
        const regExAmount= new RegExp(searchAmount, 'i');
        const regExDate= new RegExp(searchDate, 'i');
        const regExCard= new RegExp(searchCard, 'i');

        if (searchAmount){
            transactions = transactions.filter(transaction=>{
                return regExAmount.test(transaction.amount)
           })
        }
        if (searchDate){
            transactions = transactions.filter(transaction=>{
                return regExDate.test(transaction.date)
           })
        }
        if (searchCard){
            transactions = transactions.filter(transaction=>{
                return regExCard.test(transaction.card_last_four)
           })
        }


        return(
            <div>
                <div>
                    <input type="text" name="amount" onChange={this.filterAmount} placeholder="amount"/>
                    <input type="text" name="date" onChange={this.filterDate} placeholder="date"/>
                    <input type="text" name="card" onChange={this.filterCard} placeholder="card last four digits"/>
                </div>
                <TransactionsList transactions={transactions}/>
            </div>
        )
    }
}

export default Homepage;


