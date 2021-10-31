import React from 'react'
import Header from './Components/Header'

import { useDispatch } from 'react-redux'
import {amountActions} from "./state/index"
import { bindActionCreators } from 'redux'
import { useSelector } from 'react-redux'
const App = () => {
    const dispatch = useDispatch()
    const {depositMoney , withdrawMoney} = bindActionCreators(amountActions ,dispatch)
    const amounts = useSelector(state => state.amount)
    return (    
        <>
            <Header />
       
            <div className="container my-5">

                <h4>Deposit / WithDraw Money</h4>

                {/* <button className="btn btn-primary mx-3"
                onClick={()=>dispatch(amountActions.withdrawMoney(100))}
                >-</button> */}

                <button className="btn btn-primary mx-3"
                onClick={()=>withdrawMoney(100)}
                >-</button>

                    Update Balance {amounts}

                {/* <button className="btn btn-primary mx-3"
                onClick={()=>dispatch(amountActions.depositMoney(100))}
                >+</button> */}

                <button className="btn btn-primary mx-3"
                onClick={()=>depositMoney(100)}
                >+</button>


            </div>
       
        </>
    )
}

export default App
