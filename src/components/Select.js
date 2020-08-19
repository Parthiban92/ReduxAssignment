import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class Select extends Component {

 constructor()
 {
  super()
  this.state ={product:[],sub_product:[]}
   this.handleChange = this.handleChange.bind(this);
 }

 componentDidMount()
 {
    fetch('https://ngproductsparam.herokuapp.com/api/getProducts')
    .then(res=> res.json())
    .then(data => {
    // console.log(data)
      this.setState({product:data})
    })
 }

 handleChange =(e)=>{
     fetch('https://ngproductsparam.herokuapp.com/api/getProducts')
    .then(res=> res.json())
    .then(data => {
     console.log(data)
      this.setState({sub_product:data})
      this.state.sub_product.map((team) =>
        
      {
         console.log(team)
      })
    })
 }

  render() {
    const { title, body } = this.state;
    return (
      <div>
       
       <div className="App">
             <h1>Normal Select</h1>
              <div>
                <select onChange={this.handleChange}>
                    <option> -- Please Select --</option>                                    
                        {this.state.product.map((team) => <option key={team._id} value={team.id}>{team.productName}</option>)}
              </select>
          </div>
          <div>
         <select onChange={this.handleChange}>
                <option> -- Please Select --</option>                                                 
                {
                     this.state.sub_product.map((team) =>
                      <option key={team._id} value={team.id}>{team.productName}</option>
                )}
              </select>
       </div>
    </div>
      </div>
    )
  }
}



export default Select;