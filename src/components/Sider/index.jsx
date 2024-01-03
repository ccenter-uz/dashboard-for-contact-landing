import { Layout } from "antd";
import "./style.scss";
import { route } from "src/service/helpers/route";
import { Link } from "react-router-dom";
export const Sider = () => {
  return (
    <Layout.Sider theme="light" width={250} className="sider" collapsible>
      {route.map((item, index) => {
        return (
          <ul className="menus d-flex flex-column gap-3 " key={index}>
            <li className="d-flex align-center gap-x-1">
              {item?.icon}
              <Link to={item.path} className="w-100">
                {item.name}
              </Link>
            </li>
          </ul>
        );
      })}
    </Layout.Sider>
  );
};
