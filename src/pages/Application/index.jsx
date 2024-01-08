import { Table } from "src/components/reusable/Table";
import { useQuery } from "@tanstack/react-query";
import { getApplications } from "src/service/helpers/actions";
import { ExportToExcelButton } from "src/components/Excel";

const Application = () => {
  const { data, isPending } = useQuery({
    queryKey: ["application"],
    queryFn: getApplications,
    refetchOnWindowFocus: false,
  });
  const column = [
    {
      title: "Наименования",
      dataIndex: "name",
      key: "name",
      flex: 1,
    },
    {
      title: "Услуга",
      dataIndex: "type_of_service",
      key: "type_of_service",
      flex: 1,
      align: "center",
    },
    {
      title: "Название",
      dataIndex: "organization_name",
      key: "organization_name",
      flex: 1,
      align: "center",
    },
    {
      title: "Номер",
      dataIndex: "number",
      key: "number",
      flex: 1,
      align: "center",
    },
    {
      title: "Комментария",
      dataIndex: "comment",
      key: "comment",
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
  ];
  return (
    <main className="application">
      <h1>Application</h1>

      <div className="application-table m-t-2">
        <div className="w-100 d-flex justify-end m-b-1">
          <ExportToExcelButton
            data={data}
            columns={column}
            fileName={"Мурожатлар"}
          />
        </div>
        <Table
          loading={isPending}
          column={column}
          row={data?.map((item) => ({ ...item, key: item.id }))}
        />
      </div>
    </main>
  );
};

export default Application;
