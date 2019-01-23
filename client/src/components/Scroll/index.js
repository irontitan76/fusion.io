import { Component } from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router-dom/withRouter';

class ScrollToTop extends Component {
  componentDidUpdate = (prevProps) => {
    const { location } = this.props;
    const isLocationDifferent = location !== prevProps.location;
    if (isLocationDifferent) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default withRouter(ScrollToTop);