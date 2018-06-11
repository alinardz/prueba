import React from 'react';
import Moment from 'react-moment';

export const TransactionCard = (props)=>{
    return(
        <tr className="numbers">
            <td>${props.transaction.amount}</td>
            <td><Moment format="YYYY-MM-DD HH:mm">{props.transaction.date}</Moment></td>
            <td>{props.transaction.card_last_four}</td>
        </tr>
    )
}