import React from 'react';
import PropTypes from 'prop-types';

import Comment from 'Components/Comments/Comment';

/* Strings */
import strings from 'Config/strings';

const Comments = ({ results }) => {
    return (
        <div className="comments">
            <h3>{strings.COMMENT_RESULTS}:</h3>
            {results.map( item => {
                return <Comment {...item} />
            })}
        </div>
    );
};

Comments.defaultProps = {
    results: [],
};

Comments.propTypes = {
    results: PropTypes.array,
};

export default Comments;
