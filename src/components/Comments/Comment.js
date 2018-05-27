import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ title, intro }) => {
    return (
        <div className="result" key={"result_" + i}>
            <p className="comment-score"><strong>Sentiment score:</strong>{sentimentScore.score}</p>
            <p className="comment">{result.body}</p>
            <p className="comment-meta"><strong>Comment by:</strong> {result.author} | <strong>Subreddit:</strong> {result.subreddit}</p>
        </div>
    );
};

Comment.defaultProps = {
    title: '',
    intro: ''
};

Comment.propTypes = {
    title: PropTypes.string,
    intro: PropTypes.string,
};

export default Comment;
