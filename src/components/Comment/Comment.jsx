import { Tag } from "antd";
import { UserOutlined } from "@ant-design/icons";

export function Commment(props) {
  return (
    <div style={{ width: "20rem" }}>
      <UserOutlined />
      <Tag color="default">{props.item.name}</Tag>
      <p>{props.item.body}</p>
      {props.children}
    </div>
  );
}
