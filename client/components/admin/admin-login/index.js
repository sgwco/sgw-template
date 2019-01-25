import React from 'react';
import {
  Container,
  Row,
  Button,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import '../../../assets/css/admin-css.css';
import { AdminLoginWrapperStyled } from './style';
import { login } from '../../../actions/auth';
import 'react-toastify/dist/ReactToastify.css';

library.add(faUser, faLock);

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(login(email, password)),
  };
}

class AdminLogin extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    this.props.login(data.get('email'), data.get('password'));
  };

  render() {
    return (
      <AdminLoginWrapperStyled>
        <Container>
          <Row className="justify-content-center">
            <div className="col-md-6">
              <div className="card-group">
                <div className="card p-4">
                  <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                      <h1>Đăng nhập</h1>
                      <p className="text-muted">Vui lòng đăng nhập</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FontAwesomeIcon icon="user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" name="email" placeholder="Email" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FontAwesomeIcon icon="lock" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" placeholder="Mật khẩu" />
                      </InputGroup>
                      <Row>
                        <div className="col-6">
                          <Button className="px-4" color="primary" type="submit">
                            Đăng nhập
                          </Button>
                        </div>
                      </Row>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <ToastContainer />
      </AdminLoginWrapperStyled>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AdminLogin);
