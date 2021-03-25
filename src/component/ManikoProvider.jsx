import React, { createContext, useContext, useEffect, useReducer, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

const ManikoContext = createContext()

const ManikoReducer = (state, action) => {
    switch(action.type){
        case 'track.update':
            return {
                ...state,
                month: action.payload.month,
                year: action.payload.year,
            }
        case 'transactions.add': 
            return {
                ...state,
                transactions: [...state.transactions, action.payload.transaction],
                templates: [...state.templates, action.payload.template],
            }
        default:
            return state
    }
}

const prepopulateStore = () => {
    return JSON.parse(localStorage.getItem('store')) || {}
}

const persistStore = (store) => {
    localStorage.setItem('store', JSON.stringify(store))
}

const ManikoProvider = ({ children }) => {

    const [store, dispatch] = useReducer(ManikoReducer, prepopulateStore())
    const firstMount = useRef(false)

    useEffect(() => {
        if(firstMount.current){
            persistStore(store)
        }
        else {
            firstMount.current = true
        }
    }, [store])

    const updateTrack = (month, year) => {
        dispatch({
            type: 'track.update',
            payload: {
                month,
                year,
            }
        })
    }

    const updateTransactions = (transaction) => {
        const entry = {
            id: uuidv4(),
            ...transaction
        }

        const payload = {
            transaction: entry,
        }

        if(transaction.isTemplate){
            payload.template = entry
        }

        dispatch({
            type: 'transactions.add',
            payload,
        })
    }

    return (
        <ManikoContext.Provider value={{ ...store, updateTrack, updateTransactions }}>
            {children}
        </ManikoContext.Provider>
    )
}

export const useManikoStore = () => {
    return useContext(ManikoContext)
}

export default ManikoProvider
