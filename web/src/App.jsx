import React from 'react'
import Header from './Components/Header'
const App = () => {
    return (
        <>
            <Header />
       
            <div className="container my-5">

                <h4>Deposit / WithDraw Money</h4>

                <button className="btn btn-primary mx-3">-</button>

                    Update Balance

                <button className="btn btn-primary mx-3">+</button>


            </div>
       
        </>
    )
}

export default App
