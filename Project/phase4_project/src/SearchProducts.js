import React from "react";
import ProductDetail from './ProductDetail';
 


class SearchProducts extends React.Component{
    
    constructor() {
        super();

        this.state = {
            isSearched: false,
            searchedItem: '',
            numOfItems: 0,
             product: {
                 id: 0,
                name: '',
                brand: '',
                weight: '',
                price: 0.0
              },
              brands: [
                { code: 'dabur', name: 'dabur' },
                { code: 'amul', name: 'amul' },
                { code: 'patanjali', name: 'patanjali' },
                { code: 'nestle', name: 'nestle'}
              ],
              products: [
                {   
                    id: 1,
                    name: 'Fresh Toned Milk',
                    brand: 'Amul',
                    weight: "500 ml",
                    price: 33.00
                },
                {   
                    id: 2,
                    name: 'Butter - Pasteurized',
                    brand: 'Amul',
                    weight: "400 g",
                    price: 192.00
                },
                {   
                    id: 3,
                    name: 'Honey',
                    brand: 'Patanjali',
                    weight: "500 g",
                    price: 165.00
                },
                {   
                    id: 4,
                    name: '100% Pure Honey',
                    brand: 'Dabur',
                    weight: "100 g",
                    price: 62.00
                },
                {   
                    id: 5,
                    name: 'Chyawanprash - 2X Immunity',
                    brand: 'Dabur',
                    weight: "500 g",
                    price: 170.00
                },
                {   
                    id: 6,
                    name: 'Nourish Toned Milk',
                    brand: 'Nestle',
                    weight: "1 L",
                    price: 59.40
                },
                {   
                    id: 7,
                    name: 'Chocolate - Kit Kat',
                    brand: 'Nestle',
                    weight: "40 g",
                    price: 80.00
                },
                {   
                    id: 8,
                    name: 'Lactose Free Milk',
                    brand: 'Amul',
                    weight: "250 ml",
                    price: 25.00
                },
    
              ],
              selectedItems: [],
              checkout: false
        
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleCart = this.handleCart.bind(this);
        this.makePayment = this.makePayment.bind(this);
      }
    
      handleSearch(e){
      //  alert(e.target.search.value);
         e.preventDefault();
         this.setState({
             isSearched: true,
             searchedItem: e.target.search.value
         });
      } 
       
      makePayment(){
         alert("Your payment has been successful and your order has been place. Your order id:"+Math.floor((Math.random() * 100) + 1234)+". Thank you for shopping with Kitchen Story.");
         window.location.reload();
      }

      handleCart(e){        
        const checkedArr = [];
        const checkeds = document.getElementsByTagName("input");

        for (let i = 0; i < checkeds.length; i++) {
            if (checkeds[i].className=="checkboxform" && checkeds[i].checked) {
            checkedArr.push(
                this.state.products.find((p)=>{
                    return p.id === parseInt(checkeds[i].value);
                }) );
            }
        }
        this.setState({
            checkout: true,
            selectedItems: checkedArr
        });

      }
  
      render(){
          let page;
          if(this.state.checkout)
          {   
            let totalAmount=0;
             page = (

                 <div>
                    <h3>Confirm you orders</h3>
                    <p>You have <b>{this.state.selectedItems.length}</b> items in your cart. 
                    Your order details are as follows:</p>
                    <hr></hr>
                    <div>
                     
                        {this.state.selectedItems.map((product)=>{ 
                            totalAmount+=product.price;
                            return (
                             <div>
                                <b>Product Name:</b> {product.name}&nbsp;&nbsp;&nbsp;
                                <b>Brand:</b> {product.brand}&nbsp;&nbsp;&nbsp;
                                <b>Quantity:</b> {product.weight}&nbsp;&nbsp;&nbsp;
                                <b>Price:</b> ₹ {product.price}
                                  <hr></hr>
                               </div>
                             
                               );
                        }) }
                    </div>
                    <div>
                       <hr></hr> Total Amount: <b>₹ {totalAmount}</b><hr></hr>
                    </div>
                    <div>
                        <button onClick={this.makePayment}>Make payment</button>
                    </div>
                 </div>
             )
          }
          else{

            if(this.state.isSearched){
                    let newArray = this.state.products.filter((product)=>{
                    const item = this.state.searchedItem.toLowerCase();
                    return (product.name.toLowerCase().includes(item)||product.brand.toLowerCase().includes(item))
                })
                const resultCount = newArray.length;
                page = (
                    <div>
                        <h3>Search Results for {this.state.searchedItem}:</h3>
                        {resultCount==0 ? <p>No resutls found.</p> : 
                        resultCount==1 ?<p>Found {resultCount} result</p> : 
                        <p>Found {resultCount} results</p>}
                        {/* {this.state.products.filter((product)=>{
                            const item = this.state.searchedItem.toLowerCase();
                            return (product.name.toLowerCase().includes(item)||product.brand.toLowerCase().includes(item))
                        }).map((product)=>{
                            return <ProductDetail key={product.id} product={product} />
                        })} */}

                        
                     <form  onSubmit={this.handleCart}>
                        {
                            newArray.map((product)=>{
                                return <ProductDetail key={product.id} product={product} /> 
                            })   
                        }
                            <input type="submit" value="Go to Cart"/>
                        </form>
                    </div>
                    );
            }
            else {
                page = (<div>
                <div>
                <h3>Search your food item</h3>
                </div>
                <p>Use the search bar below to search for your desired food items.</p>
                    
                <div>
    
                {/* <label for="search">Search products:</label>  */}
                <form type="get" onSubmit={this.handleSearch}>
                    <input type="search" id="search" name="search" required placeholder="Search for products..."/>
                    <input　type="submit" value="Search"/>
                </form>
                </div>
                </div>
                );
                
            }
        }
          return (
              <div>{page}</div>  
            );
      }
      
}

export default SearchProducts;