import { Col, Row, Form, Input, Button, Avatar } from "antd";
import "./style.scss";
import SIGN from "src/assets/signIn.png";
import { User } from "react-feather";
import Cookies from "js-cookie";

const Login = () => {
  const [form] = Form.useForm();

  // handleFinish
  const handleFinish = (values) => {
    console.log(values, "values");
    Cookies.set("access_token", true, { expires: 1, secure: true });
  };

  return (
    <main className="login">
      <Row justify={"space-between"}>
        <Col xs={0} sm={0} md={18} lg={16} xl={16} xxl={16}>
          <section className="img-part d-flex justify-center align-center">
            <img src={SIGN} alt="sign" width={"auto"} height={500} />
          </section>
        </Col>
        <Col xs={24} sm={24} md={6} lg={8} xl={8} xxl={8}>
          <section className="form-part d-flex justify-center flex-column">
            <Form
              onFinish={handleFinish}
              form={form}
              layout="vertical"
              id="login-form"
            >
              <div className="sign-logo d-flex flex-column align-center justify-center">
                <Avatar
                  className=""
                  size={"large"}
                  icon={<User color="#fff" />}
                  style={{ background: "green" }}
                />
                <h1>Войти</h1>
              </div>
              <Form.Item label="Логин" name={"login"}>
                <Input />
              </Form.Item>
              <Form.Item label="Пароль" name={"password"}>
                <Input type="password" />
              </Form.Item>
              <Button
                htmlType="submit"
                form="login-form"
                type="primary"
                className="w-100 m-t-2"
              >
                Войти
              </Button>
            </Form>
          </section>
        </Col>
      </Row>
    </main>
  );
};

export default Login;
