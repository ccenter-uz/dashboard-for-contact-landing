import { Drawer as AntDrawer } from "antd";

const imageStyle = {
  width: "300px",
  height: "180px",
  borderRadius: "5px",
  border: "1px solid lightgrey",
  background: "lightgrey",
};

export const Drawer = ({ history, children }) => {
  if (history) {
    const { record } = history;
    return (
      <AntDrawer
        open={history.open}
        onClose={history.closeDrawer}
        width={545}
        title={record ? record.title : history.title}
        footer={history.footer}
      >
        {children}
        {history.preview ? (
          <img
            src={history.preview}
            alt="preview"
            width={300}
            height={"auto"}
          />
        ) : (
          <div
            className="d-flex align-center justify-center"
            style={imageStyle}
          >
            <p
              style={{
                color: "red",
                transform: "rotate(-25deg)",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              NOT FOUND
            </p>
          </div>
        )}
      </AntDrawer>
    );
  }
};
