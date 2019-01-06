import React from 'react';
import { Link } from 'react-router-dom';
import {
  PortfolioItemStyled,
  TemplateShotPreviewStyled,
  TemplateShotItemStyled,
  TemplateSingleContentStyled,
  TemplateFancyTableStyled,
  TemplateFancyTableItemStyled,
} from './style';

export default class TemplateItem extends React.Component {
  render() {
    const { template } = this.props;
    return (
      <div className="col-lg-3 col-md-6 col-xs-12">
        <PortfolioItemStyled className="portfolio-item">
          <TemplateShotItemStyled>
            <TemplateShotPreviewStyled
              src={`/static/images/uploads/${this.props.template.url}.jpg`}
            />
            <TemplateSingleContentStyled>
              <TemplateFancyTableStyled>
                <TemplateFancyTableItemStyled>
                  <Link to={`/preview/${template.url.replace(/\./g, '-')}`}>
                    <button className="btn btn-primary mb-3">Xem demo</button>
                  </Link>
                  <button className="btn btn-success">Chọn mẫu này</button>
                </TemplateFancyTableItemStyled>
              </TemplateFancyTableStyled>
            </TemplateSingleContentStyled>
          </TemplateShotItemStyled>
          <div className="text-center">
            <strong>{template.name}</strong>
          </div>
        </PortfolioItemStyled>
      </div>
    );
  }
}