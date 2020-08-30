import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// initial State
const initialState = {
    transactions: [],
    error : null,
    loading : true
}

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    async function getTransactions (){
        try {
            const res = await axios.get('/api/v1/transaction')
            
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function deleteTransaction (id){
        try {
            await axios.delete(`/api/v1/transaction/${id}`)

            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id,
            });

        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    async function addTransaction (transactions){
        const config ={
            headers:{
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/transaction', transactions, config)

            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })  
        }
        
    }

    

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            getTransactions,
            error: state.error,
            loading: state.loading,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}