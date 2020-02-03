import React, {Component} from 'react';
import Product from './components/product';
import {url} from './constants/api';
//import {products} from './catalog/productlist';

class App extends Component{

    state = {
        productCounter : {},
        productList : []
    }

    componentDidMount(){
        console.log("Mounted");

        fetch(url)
        .then(res=>res.json())
        .then((productList) => {
            this.setState({
                productList: productList,
            })
        });
 
    }

    incrementCounter=(productName) => ()=>{
        const oldProductCounter = this.state.productCounter;
        const oldCount = oldProductCounter[productName] || 0;

        this.setState({
                        
            productCounter: {
                ...oldProductCounter,
                [productName]: oldCount + 1
            }

        });
    }


    decrementCounter=(productName) =>()=>{
        const oldProductCounter = this.state.productCounter;
        const oldCount = oldProductCounter[productName] || 0;

        this.setState({
            
            productCounter: {
                ...oldProductCounter,
                [productName]: oldCount - 1
            }

        });
    }


    render(){
        
        return <div className="product-grid">

        {
            this.state.productList.map(    (product)=>
            {
                return <Product
                    key = {product.name}

                    product={product}
                    incrementCounter = {this.incrementCounter}
                    decrementCounter = {this.decrementCounter}
                    count = {this.state.productCounter[product.name] || 0}
                    />

            })
        }
        </div>
               
    }
            
}

export default App;