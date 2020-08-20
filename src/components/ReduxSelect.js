import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts,fetchSubPost } from '../actions/postActions';
 
class ReduxSelect extends Component {

 constructor()
 {
  super()
  this.state ={product:[],sub_product:[]}
   this.handleChange = this.handleChange.bind(this);
 }

  componentDidMount()
 {
     this.props.fetchPosts();
 }

  handleChange =(e)=>{
   this.props.fetchSubPost(e.target.value);
    
  } 

  render() {
console.log(this.props)
    const { subposts } = this.props;
    const postItems = subposts && subposts.map(p => (
      
        <option  value={p.id}>{p.title}</option>
        
     
    ))
    return (
      
       <div className="App">
       <h1>Redux Select</h1>
          <div>
              <select onChange={this.handleChange}>
                    <option> -- Please Select --</option>                                    
                       {this.props.posts.map((emp) => <option key={emp.id} value={emp.id}>{emp.employee_name}</option>)}
              </select>
               
          </div>
          <div>
              <select >
                <option> -- Please Select --</option>                                    
                      {postItems}
              </select>
       </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  subposts :state.posts.items2

});

const mapDispatchToProps = { fetchPosts, fetchSubPost};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxSelect);