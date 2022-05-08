import React,{Component} from "react";

import Price from "./Price";
import ProductName from "./productName";

class Product extends Component{
    render(){
        return(
            <div className="app">
                <ProductName/>
                <Price/>
            </div>
        )
    }
}

export default Product;