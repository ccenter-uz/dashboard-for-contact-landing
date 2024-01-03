import { Table } from "src/components/reusable/Table";
import { useQuery } from "@tanstack/react-query";
import { Button, Avatar } from "antd";
import "./style.scss";
import { getTeam } from "src/service/helpers/actions";
import { IMAGE_LINK } from "src/service/helpers/constants";

const Team = () => {
  const { data, isPending } = useQuery({
    queryKey: ["team"],
    queryFn: getTeam,
    refetchOnWindowFocus: false,
  });
  const column = [
    {
      title: "Фото",
      dataIndex: "our_team_image_link",
      key: "our_team_image_link",
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
    },
  ];
  return (
    <main className="team">
      <h1>Team</h1>

      <div className="history-table m-t-2">
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

export default Team;
