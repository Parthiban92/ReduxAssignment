import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
 
class ReduxSelect extends Component {

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

  handleChange =()=>{
     this.props.fetchPosts();
  } 

  render() {
    const { posts } = this.props;
    const postItems = posts && posts.map(p => (
      
        <option  value={p._id}>{p.productName}</option>
        
     
    ))
    return (
      
       <div className="App">
       <h1>Redux Select</h1>
          <div>
              <select onChange={this.handleChange}>
                    <option> -- Please Select --</option>                                    
                        {this.state.product.map((team) => <option key={team._id} value={team.id}>{team.productName}</option>)}
              </select>
               
          </div>
          <div>
              <select onChange={this.handleChange}>
                <option> -- Please Select --</option>                                    
                      {postItems}
              </select>
       </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

const mapDispatchToProps = { fetchPosts };

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSelect);