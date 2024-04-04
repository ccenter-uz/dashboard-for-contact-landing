import { Row, Col, Form, Input, Divider } from "antd";
import { AddServiceModal } from "./AddService";

export const BannerContentModal = ({ setBackground_image }) => {
  return (
    <>
      <Row gutter={[16]}>
        <Col span={8}>
          <Form.Item name={"title_ru"} label="Название">
            <Input type="text" placeholder="(Ru)" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={"title"}>
            <Input type="text" placeholder="(Uz)" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={"title_en"}>
            <Input type="text" placeholder="(En)" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Form.Item name="phone" label="Номер телефона">
            <Input type="text" placeholder="Номер телефона" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16]}>
        <Col span={8}>
          <Form.Item name={"paragraph_ru"} label="Текст">
            <Input.TextArea placeholder="(Ru)" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={"paragraph_uz"}>
            <Input.TextArea placeholder="(Uz)" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={"paragraph_en"}>
            <Input.TextArea placeholder="(En)" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="Фон рисунок">
        <Input
          type="file"
          accept=".png, .jpg, .jpeg, .svg, .avif, .webp"
          onChange={(e) => setBackground_image(e.target.files[0])}
        />
      </Form.Item>
      {/* DRAWER */}
      <Divider />
      <AddServiceModal />
    </>
  );
};
