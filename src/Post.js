import React from 'react';
import { Link } from 'react-router-dom';
import { compose, withProps } from 'recompose';


async function getPost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.json();
}

class Post_ extends React.PureComponent {
    state = {
      post: null,
    }

    componentDidMount() {
      this.loadData();
    }

    async loadData() {
      const post = await getPost();
      this.setState({ post });
    }

    render() {
      const { post } = this.state;
      if (post === null) {
        return 'Загрузка поста';
      }
      return (
        <div>
          <h1>
            {post.title}
          </h1>
          <p>
            {post.body}
          </p>
          <p>
            <Link to="/"> to List </Link>
          </p>
        </div>

      );
    }
}

export const Post = compose(
  withProps(props => ({
    id: props.match.params.id,
  })),
)(Post_);
