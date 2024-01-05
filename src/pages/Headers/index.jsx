import { Table } from "src/components/reusable/Table";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button, Avatar, Tooltip, Form, Input } from "antd";
import "./style.scss";
import {
  addHeaders,
  deleteHeaders,
  getHeaders,
  updateHeaders,
} from "src/service/helpers/actions";
import { IMAGE_LINK } from "src/service/helpers/constants";
import { PenTool, Trash2 } from "react-feather";
import { queryClient } from "src/main";
import { Drawer } from "src/components/Drawer";
import { useState, startTransition } from "react";
import { fileReader } from "src/service/helpers/usefulFns";

const Headers = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState(null);
  const [preview, setPreview] = useState(null);
  const [open, setOpen] = useState(false);
  const [record, setRecord] = useState(null);
  const { data, isPending } = useQuery({
    queryKey: ["headers"],
    queryFn: getHeaders,
    refetchOnWindowFocus: false,
  });
  const deleteData = useMutation({ mutationFn: (id) => deleteHeaders(id) });

  // handleDelete
  const handleDelete = async (value) => {
    await deleteData.mutateAsync(value.id);
    queryClient.invalidateQueries({ queryKey: ["headers"] });
  };

  // handleUpdate
  const handleUpdate = async () => {
    const body = new FormData();
    body.append("header_image", fileList);
    const res = await updateHeaders(record.id, body);
    queryClient.invalidateQueries({ queryKey: ["headers"] });
    closeDrawer();
    console.log(res, "res");
  };

  // handleCreate
  const handleCreate = async () => {
    const body = new FormData();
    body.append("header_image", fileList);
    const res = await addHeaders(body);
    queryClient.invalidateQueries({ queryKey: ["headers"] });
    closeDrawer();
    console.log(res, "res");
  };

  // handleChange
  const handleChange = async (e) => {
    const preview = await fileReader(e.target.files[0]);
    setFileList(e.target.files[0]);
    setPreview(preview);
  };

  // close Drawer
  const closeDrawer = () => {
    startTransition(() => {
      setFileList(null);
      setPreview(null);
      setOpen(false);
      setRecord(null);
      form.resetFields();
    });
  };

  const column = [
    {
      title: "Фото",
      dataIndex: "haeder_image_link",
      key: "haeder_image_link",
      render: (t) => {
        return (
          <Avatar
            src={IMAGE_LINK + "" + t}
            size={80}
            shape="square"
            style={{ boxShadow: "0 0 10px 1px lightgrey" }}
          />
        );
      },
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
                  setFileList(record.image_link);
                  setPreview(IMAGE_LINK + "" + record.haeder_image_link);
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
    <main className="headers">
      <h1>Headers</h1>

      <div className="headers-table m-t-2">
        <div className="w-100 d-flex align-center justify-end">
          <Button
            className="m-y-1"
            type="primary"
            onClick={() => setOpen(true)}
          >
            Создать +
          </Button>
        </div>
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
          preview,
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
          onFinish={record ? handleUpdate : handleCreate}
          form={form}
          id="history-form"
          layout="vertical"
        >
          <Form.Item name={"image"} label="Картинка">
            <Input type="file" onChange={handleChange} />
          </Form.Item>
        </Form>
      </Drawer>
    </main>
  );
};

export default Headers;
