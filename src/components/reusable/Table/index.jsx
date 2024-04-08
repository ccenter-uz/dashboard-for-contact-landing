import { Table as AntTable } from "antd";

export const Table = ({ column = [], row = [], loading, ...props }) => {
  return (
    <AntTable
      {...props}
      loading={loading}
      dataSource={row}
      columns={column}
      size="small"
    />
  );
};
