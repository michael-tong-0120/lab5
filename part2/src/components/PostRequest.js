import React, { Component } from 'react'
import axios from 'axios'

class PostRequest extends Component {
    constructor(props){
        super(props)

        this.state = {
            userId:'',
            title:''
        }
    }
    changeHandler = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler = (e) =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/photos', this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
        
    }
  render() {
    const{userId,title} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type = "text" name = "userId" value = {userId} onChange = {this.changeHandler}/>
            </div>
            <div>
                <input type = "text" name = "title" value = {title}  onChange = {this.changeHandler}/>
            </div>
            <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default PostRequest