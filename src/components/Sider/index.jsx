import { Layout } from "antd";
import "./style.scss";
import { route } from "src/service/helpers/route";
import { NavLink } from "react-router-dom";

export const Sider = () => {
  return (
    <Layout.Sider theme="light" width={250} className="sider" collapsible>
      {route.slice(1).map((item, index) => {
        return (
          <ul className="menus d-flex flex-column gap-3 " key={index}>
            <li>
              <NavLink
                className="w-100 d-flex align-center gap-x-1"
                to={item.path}
              >
                {item?.icon}
                {item.name}
              </NavLink>
            </li>
          </ul>
        );
      })}
    </Layout.Sider>
  );
};
