import { Table } from "src/components/reusable/Table";
import { Button } from "antd";
import { useQuery } from "@tanstack/react-query";
import "./style.scss";
import { getStatistics } from "src/service/helpers/actions";

const Statistics = () => {
  const { data, isPending } = useQuery({
    queryKey: ["statistics"],
    queryFn: getStatistics,
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
    },
  ];

  return (
    <main className="statistics">
      <h1>Statistics</h1>

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

export default Statistics;
