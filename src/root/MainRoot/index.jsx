import { Outlet } from "react-router-dom";
import "./style.scss";
import Header from "src/components/Header";
import { ToastContainer } from "react-toastify";
import { Layout } from "antd";
import { Sider } from "src/components/Sider";

const LayoutComp = () => {
  return (
    <div className="layout">
      <Header />
      <Layout>
        <Sider />
        <Layout.Content className="content">
          <Outlet />
        </Layout.Content>
      </Layout>
      <ToastContainer />
    </div>
  );
};

export default LayoutComp;
