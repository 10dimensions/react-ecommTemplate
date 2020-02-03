import React, {Component} from 'react';
import Counter from './Counter';

class Product extends Component{
    render(){

        const {product} = this.props;

    return <div className="product-wrapper">

                <div className="product">
                    <img src={product.image} className="product-image" />
                        {product.name}

                    <Counter 
                        incrementFn = {this.props.incrementCounter(product.name)}
                        decrementFn = {this.props.decrementCounter(product.name)}
                        count = {this.props.count}
                    />
                
                </div>
                        
                </div>
}
}

export default Product;