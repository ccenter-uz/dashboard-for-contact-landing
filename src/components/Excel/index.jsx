import * as XLSX from "xlsx";
import "./style.scss";
import { File } from "react-feather";

export const ExportToExcelButton = ({ data, columns, fileName }) => {
  const columnNames = columns.map((col) => col.title);

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      data.map((item) => {
        return {
          Наименования: item.name,
          Услуга: item.type_of_service,
          Название: item.organization_name,
          Номер: item.number,
          Комментария: item.comment,
          "Дата создания": item.create_data,
        };
      }),
      {
        header: columnNames,
      }
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  return (
    <button
      onClick={exportToExcel}
      className="excel-btn d-flex align-center gap-x-1"
    >
      <File size={15} />
      Excel
    </button>
  );
};
