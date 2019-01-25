import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import background from '../../../assets/images/bg-3.jpg';
import {
  SearchWrapperStyled,
  SearchTextWrapperStyled,
  SearchMainTextStyled,
  SearchSecondaryTextStyled,
  SearchBoxStyled,
  SearchBoxGroupStyled,
  SearchBoxBtnStyled,
  SearchWrapperBackground,
} from './style';
import { SeoLabel } from '../../style';

export default class MainSearch extends React.Component {
  render() {
    return (
      <SearchWrapperStyled>
        <SearchWrapperBackground src={background} alt="main background" />
        <SearchTextWrapperStyled className="text-center">
          <SearchMainTextStyled className="wow fadeInDown" data-wow-delay="0.6s">
            Tìm giao diện website cho doanh nghiệp của bạn
          </SearchMainTextStyled>
          <SearchSecondaryTextStyled className="wow bounceIn" data-wow-delay="0.9s">
            Lựa chọn giao diện website nhanh chóng từ kho website đa lĩnh vực phù hợp nhất với doanh
            nghiệp của bạn, tiết kiệm chi phí và thời gian nhất có thể.
          </SearchSecondaryTextStyled>
          <SeoLabel htmlFor="search">Search</SeoLabel>
          <SearchBoxGroupStyled className="input-group wow fadeInUp" data-wow-delay="1.2s">
            <SearchBoxStyled
              id="search"
              type="text"
              className="form-control"
              placeholder="Tìm giao diện..."
            />
            <div className="input-group-append">
              <SearchBoxBtnStyled className="btn btn-common btn-effect" aria-label="Search">
                <FontAwesomeIcon icon="search" />
              </SearchBoxBtnStyled>
            </div>
          </SearchBoxGroupStyled>
        </SearchTextWrapperStyled>
      </SearchWrapperStyled>
    );
  }
}
