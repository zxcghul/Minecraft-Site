import { LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { Button, Popover, Tag, Form, Input } from "antd";
import { useState } from "react";
import { Commment } from "../Comment/Comment";
import classes from "./Post.module.css";

export function Post(props) {
  const [Liked, setLiked] = useState(props.post.likeCount);
  const [YorN, setYorN] = useState(true);
  const [body, setBody] = useState();

  function yorn() {
    if (YorN === true) {
      setYorN(false);
      return setLiked(++props.post.likeCount);
    }
    setYorN(true);
    return setLiked(--props.post.likeCount);
  }

  function addNewComment() {
    const newComment = {
      name: "xx",
      body,
    };
    props.post.comment.push(newComment);
    setBody("");
  }
  const content = props.post.comment.map((item, index) => {
    return (
      <Commment item={item} key={index}>
        {props.post.comment.length === index + 1 && (
          <Form
            labelCol={{
              span: 8,
            }}
            style={{
              display: "flex",
              justifyContent: "start",
              marginTop: "1rem",
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Напиши что-то..",
                },
              ]}
              initialValue={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            >
              <Input style={{ width: "11rem" }} />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 2,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => {
                  body && addNewComment();
                }}
              >
                Отправить
              </Button>
            </Form.Item>
          </Form>
        )}
      </Commment>
    );
  });

  return (
    <div className={classes.block}>
      <p className={classes.title}>{props.post.title}</p>
      <Tag className={classes.description}>{props.post.description}</Tag>
      <p className={classes.content}>{props.post.content}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <div className={classes.like}>
          <LikeOutlined onClick={yorn} />

          {props.post.likeCount}
        </div>
        <div className={classes.comment}>
          <Popover
            content={
              props.post.comment.length != 0 ? (
                content
              ) : (
                <Form
                  labelCol={{
                    span: 8,
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    marginTop: "1rem",
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  autoComplete="off"
                >
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Напиши что-то..",
                      },
                    ]}
                    initialValue={body}
                    onChange={(e) => {
                      setBody(e.target.value);
                    }}
                  >
                    <Input style={{ width: "11rem" }} />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 2,
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      onClick={() => {
                        addNewComment();
                      }}
                    >
                      Отправить
                    </Button>
                  </Form.Item>
                </Form>
              )
            }
            title="Комментарии:"
            placement="right"
            trigger="click"
          >
            <MessageOutlined /> {props.post.comment.length}
          </Popover>
        </div>
      </div>
    </div>
  );
}
