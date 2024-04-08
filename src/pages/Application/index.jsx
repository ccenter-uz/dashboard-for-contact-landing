import { Table } from "src/components/reusable/Table";
import { useQuery } from "@tanstack/react-query";
import { getApplications } from "src/service/helpers/actions";
import { ExportToExcelButton } from "src/components/Excel";
import { Select, Tooltip } from "antd";
import { api } from "src/utils/api";
import { useEffect, useState } from "react";

const Application = () => {
  const [serviceType, setServiceType] = useState("");
  const { data, isPending } = useQuery({
    queryKey: ["application", serviceType],
    queryFn: getApplications,
    refetchOnWindowFocus: false,
  });
  const [services, setServices] = useState([
    {
      id: "1",
      label: "Все",
      value: "",
    },
  ]);

  useEffect(() => {
    api.get("mainServiseCategory/all").then((res) => setServices(res.data));
  }, []);

  const column = [
    {
      title: "№",
      dataIndex: "application_Number",
      key: "application_Number",
    },
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
      title: "Вертуал номер",
      dataIndex: "virtual_number",
      key: "virtual_number",
      flex: 1,
      align: "center",
      render: (t, record) => <p>{record.text?.virtual_number}</p>,
    },
    {
      title: "Доп.услуги",
      dataIndex: "additional_services",
      key: "additional_services",
      flex: 1,
      align: "center",
      render: (t, record) => (
        <Tooltip
          style={{ width: "100%" }}
          title={
            record.text.services
              ? record.text.services.map(
                  (item, index) => `
              ${[index + 1]}- ${item},
              `
                )
              : record.text?.services
          }
        >
          <p
            style={{
              fontSize: "12px",
              width: "150px",
              height: "100px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "clip",
              display: "flex",
              alignItems: "center",
            }}
          >
            {record.text.services
              ? record.text.services.map(
                  (item, index) => `
              ${[index + 1]}- ${item},
              `
                )
              : record.text?.services}
          </p>
        </Tooltip>
      ),
    },
    {
      title: "Тариф",
      dataIndex: "tariff",
      key: "tariff",
      flex: 1,
      align: "center",
      render: (t, record) => record?.text?.tarif?.title_ru,
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
      render: (t) => (
        <Tooltip style={{ width: "100%" }} title={t}>
          <p
            style={{
              fontSize: "12px",
              width: "100px",
              height: "100px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "clip",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {t}
          </p>
        </Tooltip>
      ),
    },
    {
      title: "Дата создания",
      dataIndex: "create_data",
      key: "create_data",
      flex: 1,
      align: "center",
      render: (t) => (
        <p>{new Intl.DateTimeFormat("ru-RU").format(new Date(t))} </p>
      ),
    },
  ];

  return (
    <main className="application">
      <h1>Application</h1>

      <div className="application-table m-t-2">
        <div className="w-100 d-flex justify-end m-b-1 gap-x-2">
          <Select
            defaultValue={""}
            onChange={(value) => setServiceType(value)}
            placeholder="Выберите услугу для фильтрации"
            style={{ width: "100%" }}
            options={[{ id: "1", value: "", label: "Все" }].concat(
              services.map((item) => ({
                key: item.id,
                value: item.id,
                label: item.title_ru,
              }))
            )}
          />
          <ExportToExcelButton
            data={data}
            columns={column}
            fileName={"Мурожатлар"}
          />
        </div>
        <Table
          bordered
          loading={isPending}
          column={column}
          row={data?.map((item) => ({ ...item, key: item.id }))}
        />
      </div>
    </main>
  );
};

export default Application;
