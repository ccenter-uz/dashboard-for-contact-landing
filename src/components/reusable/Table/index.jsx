import { Table as AntTable } from "antd";

export const Table = ({ column = [], row = [], loading }) => {
  return (
    <AntTable
      loading={loading}
      dataSource={row}
      columns={column}
      size="small"
    />
  );
};
