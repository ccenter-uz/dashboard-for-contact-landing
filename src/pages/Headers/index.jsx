import { Table } from "src/components/reusable/Table";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button, Avatar, Tooltip } from "antd";
import "./style.scss";
import { getHeaders } from "src/service/helpers/actions";
import { IMAGE_LINK } from "src/service/helpers/constants";
import { PenTool, Trash2 } from "react-feather";
import { queryClient } from "src/main";
import { toast } from "react-toastify";

const Headers = () => {
  const { data, isPending } = useQuery({
    queryKey: ["headers"],
    queryFn: getHeaders,
    refetchOnWindowFocus: false,
  });
  const deleteData = useMutation({ mutationFn: (id) => deleteHistory(id) });

  // handleDelete
  const handleDelete = async (value) => {
    deleteData.mutate(value.id);
    if (deleteData.isSuccess) {
      queryClient.invalidateQueries({ queryKey: ["headers"] });
      toast.success(deleteData.data, { position: "bottom-right" });
    }
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
              <PenTool cursor={"pointer"} size={20} color="#252525" />
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
        <Button className="m-y-1" type="primary">
          Создать +
        </Button>
        <Table
          loading={isPending}
          column={column}
          row={data?.map((item) => ({ ...item, key: item.id }))}
        />
      </div>
    </main>
  );
};

export default Headers;
