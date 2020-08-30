import React, {useContext, useEffect} from 'react'
import HistoryCard from './HistoryCard'
import {GlobalContext} from '../context/GlobalContext';

const History = () => {
    const { transactions, getTransactions } = useContext(GlobalContext)
    

    useEffect(() => {
        getTransactions();
        //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="history-container">
            <h3>History</h3>
            <hr/>
            {transactions.map(transactions => (<HistoryCard key={transactions.id} transactions={transactions}/>) )}
        </div>
    )
}

export default History
