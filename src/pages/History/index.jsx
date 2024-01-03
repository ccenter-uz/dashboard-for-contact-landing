import { Table } from "src/components/reusable/Table";
import { Button, Avatar, Tooltip } from "antd";
import { useQuery, useMutation } from "@tanstack/react-query";
import "./style.scss";
import { deleteHistory, getHistory } from "src/service/helpers/actions";
import { IMAGE_LINK } from "src/service/helpers/constants";
import { PenTool, Trash2 } from "react-feather";
import { toast } from "react-toastify";
import { queryClient } from "src/main";

const History = () => {
  const { data, isPending } = useQuery({
    queryKey: ["histories"],
    queryFn: getHistory,
    refetchOnWindowFocus: false,
  });
  const deleteData = useMutation({ mutationFn: (id) => deleteHistory(id) });

  // handleDelete
  const handleDelete = async (value) => {
    deleteData.mutate(value.id);
    if (deleteData.isSuccess) {
      queryClient.invalidateQueries({ queryKey: ["histories"] });
      toast.success(deleteData.data, { position: "bottom-right" });
    }
  };

  const column = [
    {
      title: "Фото",
      dataIndex: "image_link",
      key: "image_link",
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
      title: "Название",
      dataIndex: "title",
      key: "title",
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
    <main className="history">
      <h1>History</h1>

      <div className="history-table m-t-2">
        <Button className="m-y-1" type="primary">
          Создать +
        </Button>
        <Table
          column={column}
          row={data?.map((item) => {
            return { ...item, key: item.id };
          })}
          loading={isPending}
        />
      </div>
    </main>
  );
};

export default History;
