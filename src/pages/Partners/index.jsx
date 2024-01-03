import { Table } from "src/components/reusable/Table";
import { useQuery } from "@tanstack/react-query";
import { Button, Avatar } from "antd";
import "./style.scss";
import { getPartners } from "src/service/helpers/actions";
import { IMAGE_LINK } from "src/service/helpers/constants";

const Partners = () => {
  const { data, isPending } = useQuery({
    queryKey: ["partners"],
    queryFn: getPartners,
    refetchOnWindowFocus: false,
  });
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
      title: "Дата создания",
      dataIndex: "create_data",
      key: "create_data",
      flex: 1,
      align: "center",
    },
    {
      title: "Комментария",
      dataIndex: "camment",
      key: "camment",
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
    <main className="partners">
      <h1>Partners</h1>

      <div className="partners-table m-t-2">
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

export default Partners;
