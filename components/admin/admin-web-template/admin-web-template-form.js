import React from 'react';
import { connect } from 'react-redux';
import { Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { WEB_CATEGORY } from '../../../commons/enum';
import { ADD_TEMPLATE } from '../../../reducers/template';

function mapDispatchToProps(dispatch) {
  return {
    addTemplate: (data, cb) => dispatch({ type: ADD_TEMPLATE, data, cb }),
  };
}

class AdminWebTemplateForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      price: formData.get('price'),
      category: formData.getAll('category'),
      url: formData.get('url'),
    };
    this.props.addTemplate(data, this.props.onToggle);
  };

  renderCategoryItem = cat => {
    return (
      <option key={cat} value={WEB_CATEGORY[cat]}>
        {WEB_CATEGORY[cat]}
      </option>
    );
  };

  render() {
    const categories = Object.keys(WEB_CATEGORY);
    return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <div className="col-lg-6 col-md-12">
            <FormGroup row>
              <Label for="name" sm={3}>
                Tên theme
              </Label>
              <div className="col-sm-9">
                <Input type="text" id="name" name="name" placeholder="Tên theme" />
              </div>
            </FormGroup>
            <FormGroup row>
              <Label for="price" sm={3}>
                Giá
              </Label>
              <div className="col-sm-9">
                <Input type="text" id="price" name="price" placeholder="Giá" />
              </div>
            </FormGroup>
            <FormGroup row>
              <Label for="category" sm={3}>
                Danh mục
              </Label>
              <div className="col-sm-9">
                <Input type="select" id="category" name="category" multiple>
                  {categories.map(this.renderCategoryItem)}
                </Input>
              </div>
            </FormGroup>
            <FormGroup row>
              <Label for="url" sm={3}>
                Đường dẫn URL
              </Label>
              <div className="col-sm-9">
                <Input type="text" id="url" name="url" placeholder="Đường dẫn URL" />
              </div>
            </FormGroup>
            <div className="mb-5 text-right">
              <Button color="success" type="submit" size="sm" className="mr-3">
                Lưu
              </Button>
              <Button color="secondary" size="sm" onClick={this.props.onToggle}>
                Hủy
              </Button>
            </div>
          </div>
        </Row>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AdminWebTemplateForm);
