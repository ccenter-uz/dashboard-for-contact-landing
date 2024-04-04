import { Drawer, Input, Button, Form } from "antd";

export const DrawerModal = ({ open, setOpen }) => {
  // CLOSE
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      width={728}
      onClose={handleClose}
      footer={
        <div className="d-flex align-center justify-end gap-x-2">
          <Button type="primary" form="drawer-form" htmlType="submit">
            Сохранить
          </Button>
          <Button danger onClick={handleClose}>
            Отмена
          </Button>
        </div>
      }
    >
      <Form.Item name={"title_ru"} label="Название (Ru)">
        <Input type="text" placeholder="Название (Ru)" />
      </Form.Item>

      <Form.Item name={"title"} label="Название (Uz)">
        <Input type="text" placeholder="Название (Uz)" />
      </Form.Item>

      <Form.Item name={"title_en"} label="Название (En)">
        <Input type="text" placeholder="Название (En)" />
      </Form.Item>
    </Drawer>
  );
};
