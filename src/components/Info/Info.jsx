import { Layout, Collapse, Tag } from "antd";
const { Content } = Layout;
const contentStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#FFFFFF",
};

export function Info({ result }) {
  const items = [
    {
      key: "1",
      label: <h2>Особенности сервера</h2>,
      children: (
        <section id="features">
          <ul>
            <li>Режим игры: Выживание</li>
            <li>Плагины: ...</li>
            <li>Ежедневные события: ...</li>
          </ul>
        </section>
      ),
    },
    {
      key: "2",
      label: <h2>Правила сервера</h2>,
      children: (
        <section id="rules">
          <ol>
            <li>Уважение к другим игрокам</li>
            <li>Запрет на использование читов</li>
            <li>Запрет на оскорбления и провокации</li>
          </ol>
        </section>
      ),
    },
    {
      key: "3",
      label: <h2>Правила сервера</h2>,
      children: (
        <section id="rules">
          <ol>
            <li>Уважение к другим игрокам</li>
            <li>Запрет на использование читов</li>
            <li>Запрет на оскорбления и провокации</li>
          </ol>
        </section>
      ),
    },
    {
      key: "4",
      label: <h2>Как подключиться к серверу</h2>,
      children: (
        <section id="connect">
          <p>
            IP-адрес: <Tag>{result.ip}</Tag>
          </p>
          <p>
            Порт: <Tag>{result.port}</Tag>
          </p>
          <p>
            Версия Minecraft: <Tag>{result.version}</Tag>
          </p>
          <p>Рекомендуемые настройки: ...</p>
          <p>
            Скачать лаунчер: <a href="#">Скачать</a>
          </p>
        </section>
      ),
    },
    {
      key: "5",
      label: <h2>Команда сервера</h2>,
      children: (
        <section id="team">
          <ul>
            <li>Администратор: Иван Иванов</li>
            <li>Модераторы: Петр Петров, Мария Иванова</li>
          </ul>
        </section>
      ),
    },

    {
      key: "6",
      label: <h2>Контакты</h2>,
      children: (
        <section id="contacts">
          <ul>
            <li>Email: support@example.com</li>
            <li>Социальные сети: Facebook, Instagram</li>
          </ul>
        </section>
      ),
    },
  ];
  return (
    <Content style={contentStyle}>
      <Collapse accordion items={items} />
    </Content>
  );
}
