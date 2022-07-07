import React, { Component } from "react";
import axios from "axios";

class PostRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  deleteRow = (id, e) => {
    console.log(this.state)
    axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then((response) => {  
        console.log(response);
        // this.setState({ posts: response.data });
        const posts = this.state.posts.filter(post => post.id !== id);
        this.setState({ posts });
    })
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>List of albums</h1>
        <table border="10px" >
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Thumbnail</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.length
              ? posts.map((post) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>
                      <img src={post.thumbnailUrl} alt="color" />
                    </td>
                    <td>
                      <button onClick={(e)=> this.deleteRow(post.id,e)}>Delete</button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default PostRequest;
