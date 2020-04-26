import React from 'react';
import './client.css';
import { connect } from 'react-redux';
import { addClient, subClient } from './actionCreators';

class Clients extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className="clients">
                <h1>Clients</h1>
                <p>Quantity: {this.props.qnty}</p>
                <button onClick={this.props.onAdd}>Увеличить</button>
                <button onClick={this.props.onSub}>Уменьшить</button>
            </div>
        );

    };

}

const mapStateToProps = (state) => {
    return {
        qnty: state.qntyClients
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd : () => { dispatch(addClient()) },
        onSub : () => { dispatch(subClient()) },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
