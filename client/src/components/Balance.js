import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext';
import {numberWithCommas} from '../utils/format';

const Balance = () => {
    const { transactions } = useContext(GlobalContext)

    const amount = transactions.map(transactions => transactions.amount)
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <div className="balance">
            <h3>Your Balance</h3>
            <h1>${numberWithCommas(total)}</h1>
        </div>
    )
}

export default Balance;
