import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = ({ title, intro }) => {
  return (
      <div className="app-header">
          <h1>{title}</h1>
          <p>{intro}</p>
      </div>
  );
};

AppHeader.defaultProps = {
  title: '',
  intro: ''
};

AppHeader.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
};

export default AppHeader;