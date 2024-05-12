import React, { useState } from "react";
import { Layout, Button, Modal, Input, Form, Pagination } from "antd";
const { Content } = Layout;

import { data } from "../../data";
import { Post } from "../Post/Post";
import Sorting from "../Sorting/Sorting";
const contentStyle = {
  textAlign: "center",
  color: "#0958d9",
  backgroundColor: "#FFFFFF",
  margin: "1rem",
};

export function Blog() {
  const [posts, setPosts] = useState(data);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewPosts, setViewPosts] = useState(5);

  const LastIndex = currentPage * viewPosts;
  const FirstIndex = LastIndex - viewPosts;
  const ChoisePages = posts.slice(FirstIndex, LastIndex);
  function Paginat(pageNumber) {
    setCurrentPage(pageNumber);
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  function addNewPost() {
    const newPost = {
      href: "https://ant.design",
      title,
      content,
      likeCount: 0,
      comment: [{}],
      avatar: `https://i2.wp.com/www.fractalcamo.com/uploads/5/9/0/2/5902948/s189772745713394276_p7011_i154_w1500.jpeg`,
      description: "Nickname",
    };
    setPosts([...posts, newPost]);
  }
  function sortByAlf() {
    setPosts([...posts].sort((a, b) => a.title.localeCompare(b.title)));
  }
  function sortByLike() {
    setPosts([...posts].sort((a, b) => b.likeCount - a.likeCount));
  }
  return (
    <Content style={contentStyle}>
      <Button type="primary" onClick={showModal}>
        Добавить обсуждение
      </Button>
      <Sorting sortAlf={sortByAlf} sortLike={sortByLike} />
      <Modal
        title="Добавить обсуждение"
        open={isModalOpen}
        onOk={() => {
          if (title && content) {
            addNewPost();
          }
          handleOk();
        }}
        okText={"Добавить"}
        onCancel={handleCancel}
        cancelText={"Отмена"}
      >
        <Form
          name="wrap"
          labelCol={{
            flex: "110px",
          }}
          labelAlign="left"
          labelWrap
          wrapperCol={{
            flex: 1,
          }}
          colon={false}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            label="Название"
            name="title"
            initialValue={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Описание"
            name="content"
            initialValue={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      {ChoisePages.map((item, index) => (
        <Post post={item} key={index} />
      ))}
      <Pagination
        style={{ marginTop: ".5rem" }}
        defaultCurrent={1}
        total={posts.length}
        defaultPageSize={viewPosts}
        onChange={(e) => {
          Paginat(e);
        }}
      />
    </Content>
  );
}
