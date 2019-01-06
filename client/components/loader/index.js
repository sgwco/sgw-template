import React from 'react';
import { connect } from 'react-redux';
import {
  LoaderStyled,
  LoaderSpinnerStyled,
  LoaderDoubleBouncer,
  LoaderDoubleBouncer2,
} from './style';

function mapStateToProps(state) {
  return {
    loaderIsShown: state.common.loaderIsShown,
  };
}

class LoaderComponent extends React.Component {
  render() {
    if (this.props.loaderIsShown) {
      return (
        <LoaderStyled>
          <LoaderSpinnerStyled>
            <LoaderDoubleBouncer />
            <LoaderDoubleBouncer2 />
          </LoaderSpinnerStyled>
        </LoaderStyled>
      );
    }
    return null;
  }
}

export const Loader = connect(
  mapStateToProps,
  null
)(LoaderComponent);

export class LoaderInline extends React.Component {
  render() {
    if (this.props.loaderIsShown) {
      return (
        <LoaderSpinnerStyled inline>
          <LoaderDoubleBouncer inline />
          <LoaderDoubleBouncer2 inline />
        </LoaderSpinnerStyled>
      );
    }
    return null;
  }
}
