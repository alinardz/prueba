import React, {Component} from 'react';
import {SampleTransactions} from '../services/transactions';
import {TransactionsList} from './TransactionsList';
import {Navbar} from './layout/Navbar';
import {Input, Icon} from 'semantic-ui-react';

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
        console.log(value)
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
                <Navbar/>
                <h1>Your Transactions</h1>
                <div className="filters">
                    <p>Filter</p>
                    <table>
                        <tr>
                        <th><Input icon={<Icon name='dollar sign'/>} type="number" onChange={this.filterAmount} placeholder="amount"/></th>
                        <th><Input icon={<Icon name='calendar outline'/>} type="text" onChange={this.filterDate} placeholder="dd-mm-yyyy"/></th>
                        <th><Input icon={<Icon name='credit card'/>} type="number" onChange={this.filterCard} placeholder="card last digits"/></th>
                        </tr>
                    </table>
                </div>
                <TransactionsList transactions={transactions}/>
            </div>
        )
    }
}


export default Homepage;
