import React from 'react';

export default class ServiceMainPage extends React.Component {
  render() {
    return (
      <section id="dich-vu" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tiêu chí của chúng tôi</h2>
            <p className="section-subtitle">
              Đến với Sài Gòn Web, chúng tôi cam kết sẽ cung cấp mẫu website
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div
                className="item-boxes services-item wow fadeInDown"
                data-wow-delay="0.2s"
                data-wow-duration="0.5s"
              >
                <div className="icon color-1">
                  <i className="lni-cog" />
                </div>
                <h4>Chuẩn SEO</h4>
                <p>
                  Đáp ứng tốt tiêu chí SEO Quake nhằm tối ưu kết quả thăng hạng website trên các
                  công cụ tìm kiếm hiện nay (Search Engine)
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div
                className="item-boxes services-item wow fadeInDown"
                data-wow-delay="0.4s"
                data-wow-duration="0.5s"
              >
                <div className="icon color-2">
                  <i className="lni-mobile" />
                </div>
                <h4>Thân thiện với di dộng</h4>
                <p>
                  Thân thiện di động là tính năng Sài Gòn Web đã tích hợp cho tất cả website khách
                  hàng để đáp ứng xu hướng 4.0 đang phát triển mạnh mẽ
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div
                className="item-boxes services-item wow fadeInDown"
                data-wow-delay="0.6s"
                data-wow-duration="0.5s"
              >
                <div className="icon color-6">
                  <i className="lni-stats-up" />
                </div>
                <h4>Tối ưu tốc độ</h4>
                <p>
                  Tốc độ load trang được đo lường và đảm bảo theo các chuẩn như GTMetrix,
                  Lighthouse,… để tốc độ đạt được giá trị cao nhất
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div
                className="item-boxes services-item wow fadeInDown"
                data-wow-delay="0.8s"
                data-wow-duration="0.5s"
              >
                <div className="icon color-4">
                  <i className="lni-layout" />
                </div>
                <h4>Giao diện đẹp</h4>
                <p>
                  Kho website đa dạng, đẹp và đẳng cấp phù hợp nhất với doanh nghiệp của bạn, được
                  thiết kế theo các chuẩn hiện đại của Google, Microsoft,...
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div
                className="item-boxes services-item wow fadeInDown"
                data-wow-delay="1s"
                data-wow-duration="0.5s"
              >
                <div className="icon color-5">
                  <i className="lni-emoji-smile" />
                </div>
                <h4>Dễ sử dụng</h4>
                <p>
                  Trang quản trị được tùy biến gọn gàng, dễ sử dụng cho những người mới làm quen
                  hoặc cần làm việc nhanh
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div
                className="item-boxes services-item wow fadeInDown"
                data-wow-delay="1.2s"
                data-wow-duration="0.5s"
              >
                <div className="icon color-2">
                  <i className="lni-shield" />
                </div>
                <h4>Bảo mật</h4>
                <p>
                  Mã nguồn sạch sẽ và an toàn, hạn chế những rủi ro và tấn công đến doanh nghiệp của
                  bạn từ các tin tặc bên ngoài
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
