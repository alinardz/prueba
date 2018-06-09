import React from 'react';
import Moment from 'react-moment';

export const TransactionCard = (props)=>{
    return(
        <tr className="numbers">
            <td>${props.transaction.amount}</td>
            <td><Moment parse="DD-MM-YYYYTHH:mm:ss" format="DD-MM-YYYY HH:mm">{props.transaction.date}</Moment></td>
            <td>{props.transaction.card_last_four}</td>
        </tr>
    )
}

//27-01-2018T12:34