import React from 'react';

export class Image extends React.Component {
  userAgent = ((navigator && navigator.userAgent) || '').toLowerCase();

  render() {
    const { path, extension, ...props } = this.props;
    var match = this.userAgent.match(/version\/(\d+).+?safari/);
    return <img {...props} src={`${path}.${match !== null ? extension : 'webp'}`} />;
  }
}
