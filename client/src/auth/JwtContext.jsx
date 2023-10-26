import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect, useCallback } from 'react';
// utils
import localStorageAvailable from '../utils/localStorageAvailable';
// action
import { initial } from '../actions/news';

function AuthProvider({ children, init }) {
  const storageAvailable = localStorageAvailable();

  const initialize = useCallback(async () => {
    init();

    // eslint-disable-next-line
  }, [storageAvailable]);

  useEffect(() => {
    initialize();

    // eslint-disable-next-line
  }, [initialize]);

  return children;
}

AuthProvider.propTypes = {
  children: PropTypes.node,
  init: PropTypes.func.isRequired,
};

const mapStateToProps = null;

export default connect(mapStateToProps, {
  init: initial,
})(AuthProvider);
