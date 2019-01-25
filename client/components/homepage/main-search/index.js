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
          <SearchMainTextStyled>
            Tìm giao diện website cho doanh nghiệp của bạn
          </SearchMainTextStyled>
          <SearchSecondaryTextStyled>
            Lựa chọn giao diện website nhanh chóng từ kho website đa lĩnh vực phù hợp nhất với doanh
            nghiệp của bạn, tiết kiệm chi phí và thời gian nhất có thể.
          </SearchSecondaryTextStyled>
          <SeoLabel htmlFor="search">Search</SeoLabel>
          <SearchBoxGroupStyled className="input-group">
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
