import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default class AdminBreadcrumb extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <BreadcrumbItem active>Trang chủ</BreadcrumbItem>
        <BreadcrumbItem>
          <a href="#">Web Template</a>
        </BreadcrumbItem>
      </Breadcrumb>
    );
  }
}
