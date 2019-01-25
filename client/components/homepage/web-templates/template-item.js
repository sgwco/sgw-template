import React from 'react';
import { safari } from 'is_js';
import { Link } from 'react-router-dom';
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
  isSafari = safari();

  render() {
    const { template } = this.props;
    return (
      <div className="col-lg-3 col-md-6 col-xs-12">
        <PortfolioItemStyled className="portfolio-item">
          <TemplateShotItemStyled>
            <TemplateShotPreviewStyled
              src={`/images/uploads/${this.props.template.url}.${this.isSafari ? 'jpg' : 'webp'}`}
              alt={template.name}
            />
            <TemplateSingleContentStyled>
              <TemplateFancyTableStyled>
                <TemplateFancyTableItemStyled>
                  <Link to={`/preview/${template.url.replace(/\./g, '-')}`}>
                    <PrimaryButton className="mb-3">Xem demo</PrimaryButton>
                  </Link>
                  <SuccessButton>Chọn mẫu này</SuccessButton>
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
