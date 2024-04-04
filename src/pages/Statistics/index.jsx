import { Table } from "src/components/reusable/Table";
import { Button, Tooltip, Form, Input } from "antd";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  deleteStatistics,
  getStatistics,
  updateStatistics,
} from "src/service/helpers/actions";
import { PenTool, Trash2 } from "react-feather";
import { queryClient } from "src/main";
import { Drawer } from "src/components/Drawer";
import { useState } from "react";

const Statistics = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [record, setRecord] = useState(null);
  const { data, isPending } = useQuery({
    queryKey: ["statistics"],
    queryFn: getStatistics,
    refetchOnWindowFocus: false,
  });
  const deleteData = useMutation({ mutationFn: (id) => deleteStatistics(id) });

  // handleDelete
  const handleDelete = async (value) => {
    deleteData.mutate(value.id);
    queryClient.invalidateQueries({ queryKey: ["statistics"] });
  };

  // handleUpdate
  const handleUpdate = async (values) => {
    const res = await updateStatistics(record.id, values);
    queryClient.invalidateQueries({ queryKey: ["statistics"] });
    closeDrawer();
    console.log(res, "res");
  };

  // close Drawer
  const closeDrawer = () => {
    setOpen(false);
    setRecord(null);
    form.resetFields();
  };

  const column = [
    {
      title: "Название",
      dataIndex: "title",
      key: "title",
      flex: 1,
    },
    {
      title: "Кол-во",
      dataIndex: "statistic",
      key: "statistic",
      flex: 1,
      align: "center",
    },
    {
      title: "Дата создания",
      dataIndex: "create_data",
      key: "create_data",
      flex: 1,
      align: "center",
    },
    {
      title: "Дейтсвия",
      dataIndex: "action",
      key: "action",
      flex: 1,
      align: "center",
      render: (t, record) => {
        return (
          <div className="d-flex align-center justify-center gap-x-1">
            <Tooltip title="Изменить" placement="top">
              <PenTool
                cursor={"pointer"}
                size={20}
                color="#252525"
                onClick={() => {
                  setOpen(true);
                  setRecord(record);
                  form.setFieldValue("title", record.title);
                  form.setFieldValue("title_ru", record.title_ru);
                  form.setFieldValue("title_en", record.title_en);
                  form.setFieldValue("statistic", record.statistic);
                }}
              />
            </Tooltip>
            <Tooltip title="Удалить" placement="top">
              <Trash2
                cursor={"pointer"}
                size={20}
                color="#252525"
                onClick={() => handleDelete(record)}
              />
            </Tooltip>
          </div>
        );
      },
    },
  ];

  return (
    <main className="statistics">
      <h1>Statistics</h1>

      <div className="history-table m-t-2">
        <Table
          loading={isPending}
          column={column}
          row={data?.map((item) => ({ ...item, key: item.id }))}
        />
      </div>
      {/* DRAWER*/}
      <Drawer
        history={{
          record,
          open,
          closeDrawer,
          title: "Добавить",
          footer: (
            <div className="d-flex align-center gap-x-2">
              <Button type="primary" form="history-form" htmlType="submit">
                Сохранить
              </Button>
              <Button danger onClick={closeDrawer}>
                Отмена
              </Button>
            </div>
          ),
        }}
      >
        <Form
          typeof="form-data"
          onFinish={handleUpdate}
          form={form}
          id="history-form"
          layout="vertical"
        >
          <Form.Item name={"title"} label="Название UZ">
            <Input type="text" />
          </Form.Item>
          <Form.Item name={"title_ru"} label="Название РУ">
            <Input type="text" />
          </Form.Item>
          <Form.Item name={"title_en"} label="Название EN">
            <Input type="text" />
          </Form.Item>
          <Form.Item name={"statistic"} label="Статистика">
            <Input type="text" />
          </Form.Item>
        </Form>
      </Drawer>
    </main>
  );
};

export default Statistics;
