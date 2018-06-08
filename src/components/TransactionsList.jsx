import React from 'react';
import {TransactionCard} from './TransactionCard';

export const TransactionsList = (props)=>{
    return(
        <div>
        <h2>Your transactions</h2>
           <div>
                {props.transactions.map((transaction, index)=>{
                    return(
                            <TransactionCard
                                transaction={transaction}
                                key={index}
                            />
                    )
                })}
           </div>
        </div>
    )
}