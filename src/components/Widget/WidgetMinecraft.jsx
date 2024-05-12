import React from "react";
import { Flex, Progress, Card, Tag, Typography, Spin } from "antd";

export function WidgetMinecraft(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: ".15rem solid #000000",
        height: '22rem',
        justifyContent: 'center'
      }}
    >
      {props.status ? <Spin size="large"/> :<Card
        title={
          <h4>
            {props.result.hostname}
            <Tag style={{ marginLeft: "1rem" }} color="green">
              {props.result.online && props.result.version}
            </Tag>
          </h4>
        }
      >
        <Flex vertical gap="2rem" align="center">
          <img src={props.result.icon} alt="Offline" />
          <Typography.Title
            level={5}
            style={{
              margin: 0,
              textAlign: "center",
            }}
          >
            {props.result.online ? props.result.motd.clean[0] : `Оффлайн`}
          </Typography.Title>
          <Tag
            color="green"
            style={{
              fontSize: "1.4rem",
              height: "2.2rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            {props.result.ip + ":" + props.result.port}
          </Tag>
          <Progress
            percent={
              props.result.online &&
              (props.result.players.online / props.result.players.max) * 100
            }
            steps={9}
            strokeColor={[
              "#0bbf08",
              "#0bbf08",
              "#0bbf08",
              "#9bbf08",
              "#9bbf08",
              "#bf7608",
              "#bf7608",
              "#bf2908",
              "#bf2908",
            ]}
            format={() => {
              if (props.result.online) {
                return `${props.result.players.online}/${props.result.players.max}`;
              }
              return "0/0";
            }}
          />
        </Flex>
      </Card>}
    </div>
  );
}
