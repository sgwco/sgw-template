import React from 'react';

export class Image extends React.Component {
  userAgent = ((navigator && navigator.userAgent) || '').toLowerCase();

  isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
  };

  mobile = () => {
    return (
      this.isMobile.Android() ||
      this.isMobile.BlackBerry() ||
      this.isMobile.iOS() ||
      this.isMobile.Opera() ||
      this.isMobile.Windows()
    );
  };

  render() {
    const { path, mobilePath, extension, webp, ...props } = this.props;
    var match = this.userAgent.match(/version\/(\d+).+?safari/);
    let resultPath = this.mobile() && mobilePath ? mobilePath : path;
    if (extension) {
      const resultExtension = match === null && webp && !this.mobile() ? 'webp' : extension;
      resultPath += '.' + resultExtension;
    }

    return <img {...props} src={resultPath} />;
  }
}
