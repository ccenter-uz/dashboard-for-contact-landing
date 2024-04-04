import { Button, Input, Table, Tooltip, Row, Col } from "antd";
import { memo, useState } from "react";
import { Trash } from "react-feather";
import { useData } from "src/service/context";

export const AddServiceModal = memo(() => {
  const { data, setData } = useData();
  const [inputs, setInputs] = useState({
    name_uz: "",
    name_ru: "",
    name_en: "",
  });
  // COLUMNS
  const columns = [
    {
      title: "Названия (UZ)",
      dataIndex: "name_uz",
      key: "name_uz",
    },
    {
      title: "Названия (RU)",
      dataIndex: "name_ru",
      key: "name_ru",
    },
    {
      title: "Названия (EN)",
      dataIndex: "name_en",
      key: "name_en",
    },
    {
      title: "Действия",
      key: "action",
      render: (text, record) => (
        <div>
          <Tooltip title="Удалить">
            <Trash
              color="red"
              type="danger"
              onClick={() => handleDelete(record)}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  // DELETE
  const handleDelete = (record) => {
    setData(data.filter((item) => item.id !== record.id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleAddData = () => {
    const newData = {
      id: Date.now(),
      name_uz: inputs.name_uz,
      name_ru: inputs.name_ru,
      name_en: inputs.name_en,
    };
    setData((prevData) => [...prevData, newData]);
    setInputs({
      name_uz: "",
      name_ru: "",
      name_en: "",
    });
  };

  return (
    <div>
      <Button
        className="m-1"
        disabled={Object.keys(inputs) === ""}
        type="primary"
        onClick={handleAddData}
      >
        Добавить
      </Button>
      <Row gutter={[16]} className="m-y-2">
        <Col span={8}>
          <strong>UZ:</strong>
          <Input
            autoComplete="off"
            type="text"
            name="name_uz"
            value={inputs.name_uz}
            placeholder="UZ"
            onChange={(e) => handleInputChange(e, "uz")}
          />
        </Col>
        <Col span={8}>
          <strong>RU:</strong>
          <Input
            autoComplete="off"
            type="text"
            name="name_ru"
            value={inputs.name_ru}
            placeholder="RU"
            onChange={(e) => handleInputChange(e, "ru")}
          />
        </Col>
        <Col span={8}>
          <strong>EN:</strong>
          <Input
            autoComplete="off"
            type="text"
            name="name_en"
            value={inputs.name_en}
            placeholder="EN"
            onChange={(e) => handleInputChange(e, "en")}
          />
        </Col>
      </Row>
      <Table
        size="small"
        columns={columns}
        dataSource={data.map((item) => ({ key: item.id, ...item }))}
      />
    </div>
  );
});

AddServiceModal.displayName = "AddServiceModal";
