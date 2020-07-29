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
        const colorBlocks = this.props.reduxState.getBlockReducer.map((item, index) => {
            const el = `#$(item.hex_code)`
            const block = <div style={{ backgroundColor: el }} className="block"></div>
            return (
                <div key={index} className="blockBody">
                    {block}
                    <h3 className="label">{item.label}</h3>
                    <div className="label">
                        <button onClick={(event) => this.deleteBlock(event, item.id)}>Delete</button>
                    </div>
                </div>
            )
        })
        const colorButtons = this.props.reduxState.getColoraReducer.map((item, index) => {
            const el = `#$(item.hex_code)`
            return (
                <div key={index} className="blockBody">
                    <button className="addColorBtn" style={{ backgroundColor: el }} onCLick={(event) => this.addBlock(event, item)}>
                        Add a(n) {item.label} box!
                    </button>
                </div>
            )
        })
        return (
            <div>
                {colorButtons}
                <h2>Color Swatches</h2>
                {colorBlocks}
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Swatches);