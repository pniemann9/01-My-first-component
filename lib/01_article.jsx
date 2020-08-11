// TODO: import the right dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// TODO: code the Article component
class Article extends React.Component {
  render () {
    return (
      <div className="article">
        <h2>My fancy new product</h2>
        <p>Test it now!</p>
      </div>
      );
    }
}

// ReactDOM.render(<Article />, document.getElementById('app'));

// TODO: export your Article component for tests

export default Article;
