import React from 'react';
import { Input, Button } from 'reactstrap';
import { NoSelectTableStyled } from './style';

export default class EditableCell extends React.Component {
  state = {
    isEditing: false,
  };

  onCancel = () => this.setState({ isEditing: false });

  onDoubleClick = () => {
    this.setState({ isEditing: true });
  };

  onSubmit = e => {
    e.preventDefault();
    const { onSave, multiple } = this.props;
    if (onSave) {
      const formData = new FormData(e.target);
      if (multiple) {
        onSave(formData.getAll('input'));
      } else {
        onSave(formData.get('input'));
      }
    }
    this.setState({ isEditing: false });
  };

  renderSelectItem = item => {
    return (
      <option key={item} value={item}>
        {item}
      </option>
    );
  };

  renderChildren = () => {
    const { type, data, multiple, value, children } = this.props;
    let input = null;
    if (this.state.isEditing) {
      switch (type) {
        case 'select':
          input = (
            <Input
              autoFocus={true}
              name="input"
              type={type}
              multiple={multiple}
              defaultValue={value}
            >
              {data.map(this.renderSelectItem)}
            </Input>
          );
          break;
        default:
          input = <Input autoFocus={true} name="input" type={type} defaultValue={value} />;
      }

      return (
        <form onSubmit={this.onSubmit}>
          <div className="mb-2">{input}</div>
          <div>
            <Button color="success" type="submit" size="sm" className="mr-2">
              Lưu
            </Button>
            <Button color="secondary" size="sm" onClick={this.onCancel}>
              Hủy
            </Button>
          </div>
        </form>
      );
    } else {
      return children;
    }
  };

  render() {
    return (
      <NoSelectTableStyled onDoubleClick={this.onDoubleClick}>
        {this.renderChildren()}
      </NoSelectTableStyled>
    );
  }
}
