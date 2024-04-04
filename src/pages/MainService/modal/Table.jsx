import { Eye, PenTool, Trash } from "react-feather";
import { Table } from "src/components/reusable/Table";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import { DeleteMainServiceTab, GetMainServiceTab } from "../api";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export const TableModal = ({ setOpen, form }) => {
  const [row, setRow] = useState([]);
  const column = [
    {
      id: 1,
      title: "Название (Uz)",
      dataIndex: "title",
      key: "title",
      flex: 1,
    },
    {
      id: 2,
      title: "Название (Ру)",
      dataIndex: "title_ru",
      key: "title_ru",
      flex: 1,
    },
    {
      id: 3,
      title: "Название (En)",
      dataIndex: "title_en",
      key: "title_en",
      flex: 1,
    },
    {
      id: 4,
      title: "Действие",
      dataIndex: "action",
      key: "action",
      flex: 1,
      align: "center",
      render: (t, record) => (
        <div className="d-flex align-center justify-center gap-x-2">
          <Tooltip title="Изменить">
            <PenTool
              width={"20px"}
              height={"20px"}
              cursor={"pointer"}
              onClick={() => {
                setOpen((prev) => !prev);
                sessionStorage.setItem("catId", JSON.stringify(record.id));
                form.setFieldsValue({
                  title: record.title,
                  title_en: record.title_en,
                  title_ru: record.title_ru,
                });
              }}
            />
          </Tooltip>
          <Tooltip title="Удалить">
            <Trash
              width={"20px"}
              height={"20px"}
              cursor={"pointer"}
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  showCancelButton: true,
                }).then((res) => {
                  if (res.isConfirmed) {
                    DeleteMainServiceTab(record.id);
                  }
                });
              }}
            />
          </Tooltip>
          <Tooltip title="Посмотреть">
            <Link
              to={`/main-service/${record.id}`}
              style={{ color: "inherit" }}
              onClick={() =>
                sessionStorage.setItem("catId", JSON.stringify(record.id))
              }
            >
              <Eye width={"20px"} height={"20px"} cursor={"pointer"} />
            </Link>
          </Tooltip>
        </div>
      ),
    },
  ];

  useEffect(() => {
    GetMainServiceTab().then((res) =>
      setRow(res.map((item, _) => ({ key: _, ...item })))
    );
  }, []);

  return <Table row={row} column={column} />;
};
