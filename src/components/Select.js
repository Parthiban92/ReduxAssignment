import React, { Component } from 'react';
import { connect } from 'react-redux';
import { listAction,fetchPosts } from '../actions/postActions';

class Select extends Component {

 constructor()
 {
  super()
  this.state ={product:[],sub_product:[]}
   this.handleChange = this.handleChange.bind(this);
 }

 componentDidMount()
 {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(res=> res.json())
    .then(data_val => {
      this.setState({product:data_val.data})
    })
 }

 handleChange =(e)=>{
    var user_id = e.target.value;
     fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data => {
    const result = data.filter(user => user.userId==user_id);


    
      this.setState({sub_product:result})
      
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
                        {this.state.product.map((emp) => <option key={emp.id} value={emp.id}>{emp.employee_name}</option>)}
              </select>
          </div>
          <div>
         <select onChange={this.handleChange}>
                <option> -- Please Select --</option>                                                 
                {
                     this.state.sub_product.map((sub_prod) =>
                      <option key={sub_prod._id} value={sub_prod.id}>{sub_prod.title}</option>
                )}
              </select>
       </div>
    </div>
      </div>
    )
  }
}



export default Select;