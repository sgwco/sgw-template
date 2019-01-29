import React from 'react';
import { Container, Row } from 'reactstrap';
import { ServiceItemStyled, ServiceItemIconStyled, ServiceItemIconSVGStyled } from './style';
import {
  ItemBoxHeaderStyled,
  SectionStyled,
  SectionHeaderStyled,
  SectionTitleStyled,
} from '../../style';

export default class ServiceMainPage extends React.Component {
  state = {
    services: [
      {
        title: 'Chuẩn SEO',
        description:
          'Đáp ứng tốt tiêu chí SEO Quake nhằm tối ưu kết quả thăng hạng website trên các công cụ tìm kiếm hiện nay (Search Engine)',
        icon: 'cog',
        colorSet: 1,
      },
      {
        title: 'Thân thiện với di dộng',
        description:
          'Thân thiện di động là tính năng Sài Gòn Web đã tích hợp cho tất cả website khách hàng để đáp ứng xu hướng 4.0 đang phát triển mạnh mẽ',
        icon: 'mobile',
        colorSet: 2,
      },
      {
        title: 'Tối ưu tốc độ',
        description:
          'Tốc độ load trang được đo lường và đảm bảo theo các chuẩn như GTMetrix, Lighthouse,… để tốc độ đạt được giá trị cao nhất',
        icon: 'chart-line',
        colorSet: 6,
      },
      {
        title: 'Giao diện đẹp',
        description:
          'Kho website đa dạng, đẹp và đẳng cấp phù hợp nhất với doanh nghiệp của bạn, được thiết kế theo các chuẩn hiện đại của Google, Microsoft,...',
        icon: 'layer-group',
        colorSet: 4,
      },
      {
        title: 'Dễ sử dụng',
        description:
          'Trang quản trị được tùy biến gọn gàng, dễ sử dụng cho những người mới làm quen hoặc cần làm việc nhanh',
        icon: 'smile',
        colorSet: 5,
      },
      {
        title: 'Bảo mật',
        description:
          'Mã nguồn sạch sẽ và an toàn, hạn chế những rủi ro và tấn công đến doanh nghiệp của bạn từ các tin tặc bên ngoài',
        icon: 'lock',
        colorSet: 2,
      },
    ],
  };

  renderServiceItem = (service, index) => {
    return (
      <div className="col-lg-4 col-md-6 col-xs-12" key={index}>
        <ServiceItemStyled>
          <ServiceItemIconStyled color={service.colorSet}>
            <ServiceItemIconSVGStyled color={service.colorSet} icon={service.icon} />
          </ServiceItemIconStyled>
          <ItemBoxHeaderStyled>{service.title}</ItemBoxHeaderStyled>
          <p>{service.description}</p>
        </ServiceItemStyled>
      </div>
    );
  };

  render() {
    return (
      <SectionStyled id="dich-vu">
        <Container>
          <SectionHeaderStyled>
            <SectionTitleStyled>Tiêu chí của chúng tôi</SectionTitleStyled>
            <p>Đến với Sài Gòn Web, chúng tôi cam kết sẽ cung cấp mẫu website</p>
          </SectionHeaderStyled>
          <Row>{this.state.services.map(this.renderServiceItem)}</Row>
        </Container>
      </SectionStyled>
    );
  }
}
