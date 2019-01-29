import React from 'react';
import LazyLoad from 'react-lazyload';
import { get } from 'commons/utils';

export class Image extends React.Component {
  userAgent =
    typeof window !== 'undefined' ? get(window, 'navigator.userAgent', '').toLowerCase() : '';

  isAndroid = () => {
    return this.userAgent.match(/Android/i);
  };
  isBlackBerry = () => {
    return this.userAgent.match(/BlackBerry/i);
  };
  isIOS = () => {
    return this.userAgent.match(/iPhone|iPad|iPod/i);
  };
  isOpera = () => {
    return this.userAgent.match(/Opera Mini/i);
  };
  isWindows = () => {
    return this.userAgent.match(/IEMobile/i);
  };

  mobile = () => {
    return (
      this.isAndroid() || this.isBlackBerry() || this.isIOS() || this.isOpera() || this.isWindows()
    );
  };

  render() {
    const { path, webpPath, mobilePath, lazyloadHeight, ...props } = this.props;
    var match = this.userAgent.match(/version\/(\d+).+?safari/);
    let resultPath = path;
    if (match === null && webpPath && !this.mobile()) {
      resultPath = webpPath;
    } else {
      resultPath = this.mobile() && mobilePath ? mobilePath : path;
    }

    if (lazyloadHeight) {
      return (
        <LazyLoad height={lazyloadHeight}>
          <img {...props} src={resultPath} />
        </LazyLoad>
      );
    }

    return <img {...props} src={resultPath} />;
  }
}
