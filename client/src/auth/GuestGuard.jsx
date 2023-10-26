import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

function GuestGuard({ children, News: { isInitialized } }) {
  if (!isInitialized) {
    return <LoadingScreen />;
  }

  return <> {children} </>;
}

GuestGuard.propTypes = {
  News: PropTypes.object.isRequired,
  children: PropTypes.node,
};

const mapStateToProps = (state) => ({
  News: state.News,
});

export default connect(mapStateToProps, {})(GuestGuard);
