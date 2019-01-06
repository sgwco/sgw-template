import React from 'react';
import Link from 'next/link';
import {
  PortfolioItemStyled,
  TemplateShotPreviewStyled,
  TemplateShotItemStyled,
  TemplateSingleContentStyled,
  TemplateFancyTableStyled,
  TemplateFancyTableItemStyled,
} from './style';

export default class TemplateItem extends React.Component {
  state = {
    isSafari: null,
  };

  componentDidMount() {
    const isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    this.setState({ isSafari });
  }

  render() {
    const { template } = this.props;
    return (
      <div className="col-lg-3 col-md-6 col-xs-12">
        <PortfolioItemStyled className="portfolio-item">
          <TemplateShotItemStyled>
            <TemplateShotPreviewStyled url={`${this.props.template.url}.jpg`} />
            <TemplateSingleContentStyled>
              <TemplateFancyTableStyled>
                <TemplateFancyTableItemStyled>
                  <Link href={`/preview?url=${template.url}`} as={`/preview/${template.url}`}>
                    <a>
                      <button className="btn btn-primary">Xem demo</button>
                    </a>
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
