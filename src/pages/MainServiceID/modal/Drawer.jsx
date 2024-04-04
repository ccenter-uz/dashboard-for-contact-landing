import { Drawer, Form, Radio, Button } from "antd";
import { useState } from "react";
import { BannerContentModal } from "./BannerContent";
import { CardContentModal } from "./CardContent";

export const DrawerModal = ({
  open,
  setOpen,
  form,
  setIcon_image,
  setBackground_image,
}) => {
  const [type, setType] = useState();

  // CLOSE
  const handleClose = () => {
    setOpen(false);
    setIcon_image(null);
    setBackground_image(null);
    sessionStorage.removeItem("cardId");
  };

  return (
    <Drawer
      open={open}
      width={"80%"}
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
      <Form.Item name={"type"}>
        <Radio.Group
          disabled={form.getFieldValue("type")}
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ userSelect: "none" }}
        >
          <Radio value={"banner"}>Banner</Radio>
          <Radio value={"card"}>Card</Radio>
        </Radio.Group>
      </Form.Item>
      {form.getFieldValue("type") === "banner" && (
        <BannerContentModal setBackground_image={setBackground_image} />
      )}
      {form.getFieldValue("type") === "card" && (
        <CardContentModal
          setIcon_image={setIcon_image}
          setBackground_image={setBackground_image}
        />
      )}
    </Drawer>
  );
};
