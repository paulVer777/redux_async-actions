import React, {Component} from 'react';
import './App.css';
import Counter from './Components/Counter'

import Customers from './Components/Customers'

class App extends Component {
    render() {
        return (

            <div>

                <Counter/>
                <Customers/>


            </div>
        );
    }
}

export default App;
