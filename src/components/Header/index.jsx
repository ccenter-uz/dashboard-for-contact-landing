import "./style.scss";
import { Layout } from "antd";

const Header = () => {
  return (
    <header className="header">
      <Layout>
        <Layout.Header
          style={{
            background: "#f0f0f0",
            boxShadow: `0px 10px 15px -3px rgba(0, 0, 0, 0.1)`,
          }}
        >
          <h1>HEADER</h1>
        </Layout.Header>
      </Layout>
    </header>
  );
};

export default Header;
