import React from "react"
import { Provider } from "react-redux"
import store from 'store'

import { Game, Stomp, Information } from "container"

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