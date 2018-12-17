import React from 'react';

export default class MainSearch extends React.Component {
  render() {
    return (
      <div className="main-search">
        <img src="static/images/bg-3.jpg" alt="" />
        <div className="search-text text-center">
          <h2 className="wow fadeInDown white-header" data-wow-delay="0.6s">
            Tìm giao diện website cho doanh nghiệp của bạn
          </h2>
          <h4 className="wow bounceIn white-header" data-wow-delay="0.9s">
            Lựa chọn giao diện website nhanh chóng từ kho website đa lĩnh vực phù hợp nhất với doanh
            nghiệp của bạn, tiết kiệm chi phí và thời gian nhất có thể.
          </h4>
          <div className="input-group wow fadeInUp" data-wow-delay="1.2s">
            <input
              type="text"
              className="form-control searchbox"
              placeholder="Tìm giao diện..."
              aria-label="Tìm giao diện..."
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <a href="#" className="btn btn-common btn-effect">
                <i className="lni-search" />
              </a>
            </div>
          </div>
        </div>
        <style jsx>{`
          .main-search {
            position: relative;
          }
          .search-text {
            position: absolute;
            top: 280px;
            left: 10%;
            right: 10%;
          }
          h2 {
            font-weight: 800;
            font-size: 40px;
          }
          h4 {
            font-weight: 300;
            font-size: 18px;
            line-height: 35px;
            margin: 10px 10%;
          }
          .searchbox {
            padding: 23px 30px;
          }
          .white-header {
            color: white;
          }
          .btn-common {
            padding-top: 0;
            padding-bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .input-group {
            width: 60%;
            margin: 0 auto;
          }
          .lni-search {
            font-size: 1.5rem;
          }
          @media (min-width: 768px) and (max-width: 1024px) {
            .search-text {
              top: 240px;
            }
          }
          @media (min-width: 481px) and (max-width: 768px) {
            .search-text {
              top: 200px;
            }
            .input-group {
              width: 100%;
            }
          }
          @media (max-width: 481px) {
            .input-group {
              width: 100%;
            }
            .search-text {
              top: 180px;
            }
            h2 {
              font-size: 30px;
            }
            h4 {
              font-size: 14px;
              line-height: 25px;
            }
          }
        `}</style>
      </div>
    );
  }
}
