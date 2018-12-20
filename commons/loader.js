import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    loaderIsShown: state.common.loaderIsShown,
  };
}

class Loader extends React.Component {
  render() {
    if (this.props.loaderIsShown) {
      return (
        <div id="loader">
          <div className="spinner">
            <div className="double-bounce1" />
            <div className="double-bounce2" />
          </div>
        </div>
      );
    }
    return null;
  }
}

export default connect(
  mapStateToProps,
  null
)(Loader);
