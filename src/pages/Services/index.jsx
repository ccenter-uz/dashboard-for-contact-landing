import { Table } from "src/components/reusable/Table";
import { useQuery } from "@tanstack/react-query";
import { Button, Avatar } from "antd";
import "./style.scss";
import { getService } from "src/service/helpers/actions";
import { IMAGE_LINK } from "src/service/helpers/constants";

const Services = () => {
  const { data, isPending } = useQuery({
    queryKey: ["services"],
    queryFn: getService,
    refetchOnWindowFocus: false,
  });
  const column = [
    {
      title: "Название",
      dataIndex: "title",
      key: "title",
      flex: 1,
    },
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
    },
  ];
  return (
    <main className="services">
      <h1>Services</h1>

      <div className="services-table m-t-2">
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

export default Services;
