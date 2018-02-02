import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.state.tweets = this.props.newTweets;
  }

  shouldComponentUpdate(nextProp) {
    return nextProp.newTweets.length !== 0;
  }

  componentWillReceiveProps(nextProp) {
    // debugger;
    const newTweets = nextProp.newTweets;
    this.setState({
      tweets: newTweets.concat(this.state.tweets),
    })
  }


  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
