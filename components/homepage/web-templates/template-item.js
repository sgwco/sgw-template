import React from 'react';
import Link from 'next/link';
import css from 'styled-jsx/css';

export default class TemplateItem extends React.Component {
  render() {
    const { template } = this.props;
    return (
      <div className="col-lg-3 col-md-6 col-xs-12">
        <div className="portfolio-item">
          <div className="shot-item">
            <img src={template.thumbnail} alt="" />
            <div className="text-center">
              <strong>{template.name}</strong>
            </div>
            <div className="single-content">
              <div className="fancy-table">
                <div className="table-cell">
                  <Link href={`/preview?url=${template.url}`} as={`/preview/${template.url}`}>
                    <a>
                      <button className="btn btn-primary">Xem demo</button>
                    </a>
                  </Link>

                  <button className="btn btn-success">Chọn mẫu này</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

const styles = css`
  .portfolio-item {
    padding: 10px 0;
  }
  .shot-item {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .shot-item img {
    width: 100%;
    height: 100%;
    -webkit-transition-duration: 4000ms;
    -o-transition-duration: 4000ms;
    transition-duration: 4000ms;
  }

  .single-content {
    background-color: rgba(22, 26, 39, 0.7);
    opacity: 0.9;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    -webkit-transition-duration: 500ms;
    -o-transition-duration: 500ms;
    transition-duration: 500ms;
    width: 100%;
  }

  .fancy-table {
    display: table;
    height: 100%;
    left: 0;
    position: relative;
    top: 0;
    width: 100%;
    z-index: 2;
  }

  .table-cell {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  .shot-item:hover img {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  .shot-item:hover .single-content {
    opacity: 1;
  }

  .btn {
    margin: 10px 0;
  }
`;
