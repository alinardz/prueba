import React from 'react';
import {TransactionCard} from './TransactionCard';

export const TransactionsList = (props)=>{
    return(
           <div className="transactions">
            <table>
                <tr>
                    <th>Amount</th>
                    <th>Date</th> 
                    <th>Card Last Digits</th>
                </tr>
                    {props.transactions.map((transaction, index)=>{
                        return(
                                <TransactionCard
                                    transaction={transaction}
                                    key={index}
                                />
                        )
                    })}
            </table>
           </div>
    )
}


