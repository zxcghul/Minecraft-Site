import { Space, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import classes from "./Sorting.module.css";

function Sorting(props) {
  const items = [
    {
      label: <p>По алфавиту</p>,
      key: "0",
      onClick: () => {
        props.sortAlf();
      },
    },
    {
      label: <p>По популярности</p>,
      key: "1",
      onClick: () => {
        props.sortLike();
      },
    },
  ];
  return (
    <Dropdown
      className={classes.sort}
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <a
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <Space>
          Сортировка
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
}

export default Sorting;
