import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.loadPosts = this.loadPosts.bind(this);
  }


  loadPosts() {

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        this.setState({
          posts: data
        });
      })
      .catch(error => {
        console.log(error);
      });

  }


  componentDidMount() {
    this.loadPosts();
  }


  componentDidCatch(error) {
    alert("Error occurred: " + error.message);
  }


  render() {

    return (
      <div>

        <h1>Blog Posts</h1>

        {
          this.state.posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
            />
          ))
        }

      </div>
    );

  }

}

export default Posts;