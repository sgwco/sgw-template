import React from 'react';
import { Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { WEB_CATEGORY } from '../../../commons/enum';

export default class AdminWebTemplateForm extends React.Component {
  renderCategoryItem = cat => {
    return <option value={WEB_CATEGORY[cat]}>{WEB_CATEGORY[cat]}</option>;
  };

  render() {
    const categories = Object.keys(WEB_CATEGORY);
    return (
      <Row>
        <div className="col-lg-6 col-md-12">
          <FormGroup row>
            <Label for="name" sm={2}>
              Tên theme
            </Label>
            <div className="col-sm-10">
              <Input type="text" id="name" placeholder="Tên theme" />
            </div>
          </FormGroup>
          <FormGroup row>
            <Label for="price" sm={2}>
              Giá
            </Label>
            <div className="col-sm-10">
              <Input type="text" id="price" placeholder="Giá" />
            </div>
          </FormGroup>
          <FormGroup row>
            <Label for="category" sm={2}>
              Danh mục
            </Label>
            <div className="col-sm-10">
              <Input type="select" id="category" multiple>
                {categories.map(this.renderCategoryItem)}
              </Input>
            </div>
          </FormGroup>
          <FormGroup row>
            <Label for="url" sm={2}>
              Đường dẫn URL
            </Label>
            <div className="col-sm-10">
              <Input type="text" id="url" placeholder="Đường dẫn URL" />
            </div>
          </FormGroup>
          <div className="mb-5 text-right">
            <Button color="success" size="sm" className="mr-3">
              Lưu
            </Button>
            <Button color="secondary" size="sm">
              Hủy
            </Button>
          </div>
        </div>
      </Row>
    );
  }
}
