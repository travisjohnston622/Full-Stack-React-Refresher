import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStoreToProps = reduxState => ({
    reduxState,
})

class Swatches extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default connect(mapStoreToProps)(Swatches);