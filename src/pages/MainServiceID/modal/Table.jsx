import { PenTool, Trash } from "react-feather";
import { Tooltip } from "antd";
import { DeleteMainServiceContent, GetMainServiceContent } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useData } from "src/service/context";
import { IMAGE_LINK } from "src/service/helpers/constants";
import { DragTable } from "src/pages/MainService";

export const TableModal = ({ setOpen, form }) => {
  const { id } = useParams();
  const { setData: setTableData } = useData();
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
      title: "Тип",
      dataIndex: "type",
      key: "type",
      flex: 1,
      align: "center",
    },
    {
      title: "Рисунок",
      dataIndex: "image",
      key: "image",
      flex: 1,
      align: "center",
      render: (t, record) => (
        <img
          src={IMAGE_LINK + "" + record.image}
          style={{ border: "1px solid lightgrey", borderRadius: "16px" }}
          width={"80px"}
          height={"80px"}
          alt="bg-image"
        />
      ),
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
                record.type === "banner"
                  ? form.setFieldsValue(
                      {
                        title: record.title,
                        title_ru: record.title_ru,
                        title_en: record.title_en,
                        type: record.type,
                        phone: record.phone,
                        paragraph_en: record.paragraph_en,
                        paragraph_ru: record.paragraph_ru,
                        paragraph_uz: record.paragraph_uz,
                      },
                      sessionStorage.setItem(
                        "cardId",
                        JSON.stringify(record.id)
                      ),
                      setTableData(
                        record.services.map((item) => ({
                          key: item.id,
                          ...item,
                        }))
                      )
                    )
                  : form.setFieldsValue(
                      {
                        title: record.title,
                        title_ru: record.title_ru,
                        title_en: record.title_en,
                        type: record.type,
                        paragraph_uz: record.paragraph_uz,
                        paragraph_ru: record.paragraph_ru,
                        paragraph_en: record.paragraph_en,
                        span_ru: record.span_ru,
                        span_uz: record.span_uz,
                        span_en: record.span_en,
                        content_text_ru: record.content_text_ru,
                        content_text_uz: record.content_text_uz,
                        content_text_en: record.content_text_en,
                      },
                      sessionStorage.setItem(
                        "cardId",
                        JSON.stringify(record.id)
                      )
                    );
                setOpen((prev) => !prev);
              }}
            />
          </Tooltip>
          <Tooltip title="Удалить">
            <Trash
              width={"20px"}
              height={"20px"}
              cursor={"pointer"}
              onClick={() => DeleteMainServiceContent(record.id)}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  // GET
  useEffect(() => {
    GetMainServiceContent(id).then((res) => {
      setRow(
        res.servises.map((item) => ({
          key: item.id,
          id: item.id,
          image: item.image_link,
          icon: item.icon_link,
          type: item.type,
          ...item.text,
        }))
      );
    });
  }, [id]);

  return <DragTable rows={row} setRow={setRow} columns={column} />;
};
