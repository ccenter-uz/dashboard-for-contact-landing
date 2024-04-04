import { Row, Col, Input, Form } from "antd";

export const CardContentModal = ({ setBackground_image, setIcon_image }) => {
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
      <Row gutter={[16]}>
        <Col span={8}>
          <Form.Item name={"paragraph_ru"} label="Параграф">
            <Input.TextArea type="text" placeholder="(Ru)" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={"paragraph_uz"}>
            <Input.TextArea type="text" placeholder="(Uz)" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={"paragraph_en"}>
            <Input.TextArea type="text" placeholder="(En)" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16]}>
        <Col span={8}>
          <Form.Item name={"span_ru"} label="Текст">
            <Input type="text" placeholder="(Ru)" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={"span_uz"}>
            <Input type="text" placeholder="(Uz)" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={"span_en"}>
            <Input type="text" placeholder="(En)" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={[16]}>
        <Col span={8}>
          <Form.Item name={"content_text_ru"} label="Контент текст ">
            <Input.TextArea type="text" placeholder="(Ru)" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={"content_text_uz"}>
            <Input.TextArea type="text" placeholder="(Uz)" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={"content_text_en"}>
            <Input.TextArea type="text" placeholder="(En)" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item label="Иконка">
        <Input
          type="file"
          accept=".png, .jpg, .jpeg, .svg, .avif, .webp"
          onChange={(e) => setIcon_image(e.target.files[0])}
        />
      </Form.Item>
      <Form.Item label="Фон рисунок">
        <Input
          type="file"
          accept=".png, .jpg, .jpeg, .svg, .avif, .webp"
          onChange={(e) => setBackground_image(e.target.files[0])}
        />
      </Form.Item>
    </>
  );
};
