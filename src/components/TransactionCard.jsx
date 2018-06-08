import React from 'react';
import {Card} from 'semantic-ui-react';

export const TransactionCard = (props)=>{
    return(
        <div style={{marginLeft:"3%", marginBottom:"10px"}}>
            <Card fluid>
                <Card.Content>
                    <Card.Header>{props.transaction.amount}</Card.Header>
                    <Card.Meta>{props.transaction.date}</Card.Meta>
                    <Card.Meta>{props.transaction.card_last_four}</Card.Meta> 
                </Card.Content>
            </Card>
        </div>
    )
}