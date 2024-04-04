import { Button, Form } from "antd";
import { TableModal } from "../modal/Table";
import { useState } from "react";
import { DrawerModal } from "../modal/Drawer";
import { SaveMainServiceTab, UpdateMainServiceTab } from "../api";

export const MainService = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  // CREATE
  const handleCreate = () => {
    sessionStorage.removeItem("catId");
    form.resetFields();
    setOpen(true);
  };

  return (
    <main id="MainService">
      <h1>Main Service</h1>
      <div className="w-100 d-flex align-center justify-end">
        <Button className="m-y-1" type="primary" onClick={handleCreate}>
          Создать +
        </Button>
      </div>
      <Form
        onFinish={
          JSON.parse(sessionStorage.getItem("catId"))
            ? UpdateMainServiceTab
            : SaveMainServiceTab
        }
        id="drawer-form"
        layout="vertical"
        form={form}
      >
        <TableModal setOpen={setOpen} form={form} />
        <DrawerModal open={open} setOpen={setOpen} />
      </Form>
    </main>
  );
};
