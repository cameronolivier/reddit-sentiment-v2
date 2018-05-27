import React from 'react';
import PropTypes from 'prop-types';

/* Strings */
import strings from 'Config/strings';

const SentimentResults = ({ searchPhrase, sentimentAverage, sentimentColor }) => {
    return (
        <div className="overall-sentiment" style={{borderColor : sentimentColor}}>
            {strings.OVERALL_SENTIMENT} {searchPhrase}: <strong>{sentimentAverage}</strong>
        </div>
    );
};

SentimentResults.defaultProps = {
    searchPhrase: '',
    sentimentAverage: '',
    sentimentColor: '#fff',
};

SentimentResults.propTypes = {
    searchPhrase: PropTypes.string,
    sentimentAverage: PropTypes.string,
    sentimentColor: PropTypes.string,
};

export default SentimentResults;
