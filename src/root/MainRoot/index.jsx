import { Outlet } from "react-router-dom";
import "./style.scss";
import Header from "src/components/Header";
import { ToastContainer } from "react-toastify";
import { Layout } from "antd";
import { Sider } from "src/components/Sider";
import { Suspense } from "react";

const LayoutComp = () => {
  return (
    <div className="layout">
      <Header />
      <Layout>
        <Sider />
        <Layout.Content className="content">
          <Suspense fallback="LOADING...">
            <Outlet />
          </Suspense>
        </Layout.Content>
      </Layout>
      <ToastContainer />
    </div>
  );
};

export default LayoutComp;
