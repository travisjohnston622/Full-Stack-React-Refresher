import React, { Component } from 'react';
import './Header.css';
//React-Router
import { HashRouter as Router, Route, Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <header className="appBar">
                <h1>Color Swatches</h1>
                <nav>
                    <div>
                        <Link to='/'>Swatches</Link>
                    </div>
                    <div>
                        <Link to='/colors'>Colors</Link>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
