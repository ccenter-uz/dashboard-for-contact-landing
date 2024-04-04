import { Button, Form } from "antd";
import { TableModal } from "../modal/Table";
import { useState } from "react";
import { DrawerModal } from "../modal/Drawer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-feather";
import { SaveMainServiceContent, UpdateMainServiceContent } from "../api";
import { useData } from "src/service/context";

export const MainServiceID = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [background_image, setBackground_image] = useState([]);
  const [icon_image, setIcon_image] = useState([]);
  const { data: TableData, setData: setTableData } = useData();

  // SAVE
  const handleSubmit = async (values) => {
    let content;
    const formdata = new FormData();
    if (values.type === "banner") {
      formdata.append("image", background_image);

      content = {
        services: TableData,
      };
    } else {
      formdata.append("image", background_image);
      formdata.append("icon", icon_image);
    }
    // POST
    await SaveMainServiceContent(values, content, formdata);
  };

  // UPDATE
  const handleUpdate = async (values) => {
    let content;
    const formdata = new FormData();
    if (values.type === "banner") {
      formdata.append("image", background_image);
      content = {
        services: TableData,
      };
    } else {
      formdata.append("image", background_image);
      formdata.append("icon", icon_image);
    }
    // POST
    await UpdateMainServiceContent(values, content, formdata);
  };

  // CREATE
  const handleCreate = async () => {
    form.resetFields();
    setOpen(true);
    setTableData([]);
  };

  return (
    <main id="MainService-Item">
      <h1 style={{ marginBottom: "1em" }}>Main Service-item</h1>
      <Link to={-1} style={{ cursor: "pointer", color: "grey" }}>
        <ArrowLeft />
      </Link>
      <div className="w-100 d-flex align-center justify-end">
        <Button className="m-y-1" type="primary" onClick={handleCreate}>
          Создать +
        </Button>
      </div>
      <Form
        layout="horizontal"
        form={form}
        onFinish={
          sessionStorage.getItem("cardId") ? handleUpdate : handleSubmit
        }
        id="drawer-form"
      >
        <TableModal setOpen={setOpen} form={form} />
        <DrawerModal
          setIcon_image={setIcon_image}
          setBackground_image={setBackground_image}
          open={open}
          setOpen={setOpen}
          form={form}
        />
      </Form>
    </main>
  );
};
