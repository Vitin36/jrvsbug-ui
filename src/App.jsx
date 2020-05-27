import React from "react"
import { Provider } from "react-redux"
import store from 'store'

import Game from "container/Game"
import Stomp from "container/Stomp"
import Information from "container/Information"

const App = () => {

    return (
        <div className="App">
            <Provider store={store} >
                <Game />
                <Stomp />
                <Information />
            </Provider>
        </div>
    )
}

export default App