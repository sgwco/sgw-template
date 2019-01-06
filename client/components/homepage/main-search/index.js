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
} from './style';

export default class MainSearch extends React.Component {
  render() {
    return (
      <SearchWrapperStyled>
        <img src={background} alt="" />
        <SearchTextWrapperStyled className="text-center">
          <SearchMainTextStyled className="wow fadeInDown" data-wow-delay="0.6s">
            Tìm giao diện website cho doanh nghiệp của bạn
          </SearchMainTextStyled>
          <SearchSecondaryTextStyled className="wow bounceIn" data-wow-delay="0.9s">
            Lựa chọn giao diện website nhanh chóng từ kho website đa lĩnh vực phù hợp nhất với doanh
            nghiệp của bạn, tiết kiệm chi phí và thời gian nhất có thể.
          </SearchSecondaryTextStyled>
          <SearchBoxGroupStyled className="input-group wow fadeInUp" data-wow-delay="1.2s">
            <SearchBoxStyled
              type="text"
              className="form-control"
              placeholder="Tìm giao diện..."
              aria-label="Tìm giao diện..."
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <SearchBoxBtnStyled href="#" className="btn btn-common btn-effect">
                <FontAwesomeIcon icon="search" />
              </SearchBoxBtnStyled>
            </div>
          </SearchBoxGroupStyled>
        </SearchTextWrapperStyled>
      </SearchWrapperStyled>
    );
  }
}
