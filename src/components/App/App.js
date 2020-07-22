import React, { Component } from 'react';

import './App.css';

// COMPONENTS
import Header from '../Header/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className="container">
                    PAGE CONTENT
                </div>
            </div>
        );
    }
}

export default App;
