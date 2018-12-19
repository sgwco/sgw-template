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
                    <form method="post" action="/admin/login">
                      <h1>Đăng nhập</h1>
                      <p className="text-muted">Vui lòng đăng nhập</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FontAwesomeIcon icon="user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value="sonvh.it6@gmail.com"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FontAwesomeIcon icon="lock" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Mật khẩu"
                          value="123456"
                        />
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
      </AdminLoginLayout>
    );
  }
}
