import React from 'react';

const ProductDetail = (props) => {
  console.log('props:', props);
  return (
    <div className="searchdetail">
        <hr></hr>
        <h3>{props.product.name}</h3>
        <p>{props.product.brand}</p>
        <p>Quantity: {props.product.weight}</p>
        <p>MRP: ₹ {props.product.price}</p>
      <div>
      <hr></hr>
      <input type="checkbox" class="checkboxform" id={props.product.id} name="product" value={props.product.id}/>
      <label for={props.product.id}>Add to cart</label><br></br> 
      <hr></hr>
      </div>
    </div>
  );
};

export default ProductDetail;


