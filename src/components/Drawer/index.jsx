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
          <div className="d-flex flex-column gap-y-1">
            <div className="block">
              <p style={{ fontSize: "16px", fontWeight: 600 }}>Desktop:</p>
              <img
                src={history.preview.img}
                alt="preview"
                width={300}
                height={"auto"}
              />
            </div>
            <div className="block">
              <p style={{ fontSize: "16px", fontWeight: 600 }}>Mobile:</p>
              <img
                src={history.preview.mobile}
                alt="preview"
                width={300}
                height={"auto"}
              />
            </div>
          </div>
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
