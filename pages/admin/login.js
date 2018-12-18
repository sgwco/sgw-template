import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminLoginLayout from '../../components/layouts/admin-login.layout';

export default class AdminLogin extends React.Component {
  render() {
    return (
      <AdminLoginLayout>
        <Container>
          <Row className="justify-content-center">
            <div className="col-md-6">
              <div className="card-group">
                <div className="card p-4">
                  <div className="card-body">
                    <h1>Đăng nhập</h1>
                    <p className="text-muted">Vui lòng đăng nhập</p>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon="user" />
                        </span>
                      </div>
                      <input className="form-control" type="email" placeholder="Email" />
                    </div>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon="lock" />
                        </span>
                      </div>
                      <input className="form-control" type="password" placeholder="Mật khẩu" />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <Button className="px-4" color="primary">
                          Đăng nhập
                        </Button>
                      </div>
                      {/* <div className="col-6 text-right">
                        <button className="btn btn-link px-0" type="button">
                          Forgot password?
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </AdminLoginLayout>
    );
  }
}
