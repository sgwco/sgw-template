import React from 'react';
import {
  LoaderStyled,
  LoaderSpinnerStyled,
  LoaderDoubleBouncer,
  LoaderDoubleBouncer2,
} from './style';

export class Loader extends React.Component {
  render() {
    return (
      <LoaderStyled>
        <LoaderSpinnerStyled>
          <LoaderDoubleBouncer />
          <LoaderDoubleBouncer2 />
        </LoaderSpinnerStyled>
      </LoaderStyled>
    );
  }
}

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
