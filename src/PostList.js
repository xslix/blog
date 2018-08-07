import React from 'react';
import { Link } from 'react-router-dom';

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}

function PostItem({ post }) {
  const link = `'/${post.id}`;
  return (
    <li>
      <Link to={link}>
        {post.body}
      </Link>
    </li>
  );
}

export default class PostList extends React.PureComponent {
    state = {
      posts: null,
    }

    componentDidMount() {
      this.loadData();
    }

    async loadData() {
      const posts = await getPosts();
      this.setState({ posts });
    }

    render() {
      const { posts } = this.state;
      if (posts === null) {
        return 'Загрузка постов';
      }
      return (
        <ul>
          {posts.map(post => (
            <PostItem key={post.id} post={post} />
          ))}
        </ul>

      );
    }
}
