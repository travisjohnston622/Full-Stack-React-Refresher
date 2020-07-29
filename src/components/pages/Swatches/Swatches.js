import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStoreToProps = reduxState => ({
    reduxState,
})

class Swatches extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_BLOCKS'
        })
        this.props.dispatch({
            type: 'GET_COLORS'
        })
    }

    deleteBlock = (event, id) => {
        this.props.dispatch({
            type: 'DELETE_BLOCK',
            payload: id
        })
        this.props.dispatch({
            type: 'GET_BLOCKS',
        })
    }
    addBlock = (event, item) => {
        this.props.dispatch({
            type: 'ADD_BLOCK',
            payload: item
        })
        this.props.dispatch({
            type: 'GET_BLOCKS',
        })
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default connect(mapStoreToProps)(Swatches);