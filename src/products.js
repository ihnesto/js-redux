import React from 'react';
import './products.css';
import { connect } from 'react-redux';
import { addProduct, subProduct } from './actionCreators';

class Products extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className="products">
                <h1>Products</h1>
                <p>Quantity: {this.props.qnty}</p>
                <button onClick={this.props.onAdd}>Увеличить</button>
                <button onClick={this.props.onSub}>Уменьшить</button>
            </div>
        );

    };

}

const mapStateToProps = (state) => {
    return {
        qnty: state.qntyProducts
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd : () => { dispatch( addProduct()) },
        onSub : () => { dispatch( subProduct()) },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
