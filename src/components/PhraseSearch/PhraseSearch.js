import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button/Button';

/* Strings */
import strings from 'Config/strings';

const PhraseSearch = () => {
    return (
        <div className="search-form">
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder={strings.SEARCH_A_PHRASE_OR_COMPANY} className="search-form-entry" onChange={this.handleChange} />
                <Button buttonText={strings.CHECK_SENTIMENT} callBack={()=>{alert('clicked!');}} />
            </form>
        </div>
    );
};

PhraseSearch.defaultProps = {
    title: '',
    intro: ''
};

PhraseSearch.propTypes = {
    title: PropTypes.string,
    intro: PropTypes.string,
};

export default PhraseSearch;