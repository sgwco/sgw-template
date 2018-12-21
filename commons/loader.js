import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    loaderIsShown: state.common.loaderIsShown,
  };
}

class LoaderComponent extends React.Component {
  render() {
    if (this.props.loaderIsShown) {
      return (
        <div id="loader">
          <div className="spinner">
            <div className="double-bounce1" />
            <div className="double-bounce2" />
          </div>
          <style jsx>{`
            #loader {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: #263238;
              z-index: 9999999999;
            }
            .spinner {
              width: 40px;
              height: 40px;
              top: 45%;
              position: relative;
              margin: 0px auto;
            }
            .double-bounce1,
            .double-bounce2 {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              background-color: #f97794;
              opacity: 0.6;
              position: absolute;
              top: 0;
              left: 0;
              -webkit-animation: sk-bounce 2s infinite ease-in-out;
              animation: sk-bounce 2s infinite ease-in-out;
            }
            .double-bounce2 {
              -webkit-animation-delay: -1s;
              animation-delay: -1s;
            }

            @-webkit-keyframes sk-bounce {
              0%,
              100% {
                -webkit-transform: scale(0);
              }
              50% {
                -webkit-transform: scale(1);
              }
            }

            @keyframes sk-bounce {
              0%,
              100% {
                transform: scale(0);
                -webkit-transform: scale(0);
              }
              50% {
                transform: scale(1);
                -webkit-transform: scale(1);
              }
            }
          `}</style>
        </div>
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
        <div className="spinner">
          <div className="double-bounce1" />
          <div className="double-bounce2" />
          <style jsx>{`
            .spinner {
              width: 40px;
              height: 40px;
              position: relative;
              display: inline-block;
            }
            .double-bounce1,
            .double-bounce2 {
              position: absolute;
              top: 0;
              left: 0;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background-color: #f97794;
              opacity: 0.6;
              -webkit-animation: sk-bounce 2s infinite ease-in-out;
              animation: sk-bounce 2s infinite ease-in-out;
            }
            .double-bounce2 {
              -webkit-animation-delay: -1s;
              animation-delay: -1s;
            }

            @-webkit-keyframes sk-bounce {
              0%,
              100% {
                -webkit-transform: scale(0);
              }
              50% {
                -webkit-transform: scale(1);
              }
            }

            @keyframes sk-bounce {
              0%,
              100% {
                transform: scale(0);
                -webkit-transform: scale(0);
              }
              50% {
                transform: scale(1);
                -webkit-transform: scale(1);
              }
            }
          `}</style>
        </div>
      );
    }
    return null;
  }
}
