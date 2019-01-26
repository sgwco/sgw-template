import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import {
  PortfolioItemStyled,
  TemplateShotPreviewStyled,
  TemplateShotItemStyled,
  TemplateSingleContentStyled,
  TemplateFancyTableStyled,
  TemplateFancyTableItemStyled,
} from './style';
import { PrimaryButton, SuccessButton } from '../../style';

export default class TemplateItem extends React.Component {
  render() {
    const { template } = this.props;
    return (
      <div className="col-lg-3 col-md-6 col-xs-12">
        <PortfolioItemStyled className="portfolio-item">
          <TemplateShotItemStyled>
            <LazyLoad height={300}>
              <TemplateShotPreviewStyled
                path={`/static/images/uploads/${this.props.template.url}`}
                extension="jpg"
                webp
                alt={template.name}
              />
            </LazyLoad>
            <TemplateSingleContentStyled>
              <TemplateFancyTableStyled>
                <TemplateFancyTableItemStyled>
                  <div>
                    <Link to={`/preview/${template.url.replace(/\./g, '-')}`}>
                      <PrimaryButton className="mb-3">Xem demo</PrimaryButton>
                    </Link>
                  </div>
                  <div>
                    <SuccessButton>Chọn mẫu này</SuccessButton>
                  </div>
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
