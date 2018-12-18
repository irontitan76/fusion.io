import { Component } from 'react';
import withRouter from 'react-router-dom/withRouter';

class ScrollToTop extends Component {
  componentDidUpdate = (prevProps) => {
    const isLocationDifferent = this.props.location !== prevProps.location;
    if (isLocationDifferent) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);