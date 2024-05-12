import { WidgetMinecraft } from "./components/Widget/WidgetMinecraft";
import { Layout } from "antd";
import { Blog } from "./components/Blog/Blog";
import { Main } from "./components/Main/Main";
import { Info } from "./components/Info/Info";
import { Routes, Route, Link } from "react-router-dom";
import { FetchMine } from "./api";
import { useEffect, useState } from "react";
const { Header, Footer, Sider } = Layout;
const headerStyle = {
  position: "sticky",
  top: 0,
  zIndex: 1,
  width: "100%",
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  fontSize: "1.1rem",
};

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#FFFFFF",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
};


// const result = await FetchMine("https://api.mcsrvstat.us/2/hype.alphacraft.ru");

export default function App() {
  const [WidgetInfo, setWidgetInfo] = useState({});
  const [Loading, setLoading] = useState(false);

  async function FetchInfo() {
    setLoading(true)
    const result = await FetchMine("https://api.mcsrvstat.us/2/hype.alphacraft.ru");
    setWidgetInfo(result)
    setLoading(false)
  }

  useEffect(() => {
    FetchInfo()
  }, [])
  
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Link to="/">Главная</Link>
        <Link to="/blog">Блог</Link>
        <Link to="/info">Инфо</Link>
      </Header>

      <Layout style={{ backgroundColor: "#FFFFFF" }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/info" element={<Info result={WidgetInfo} />} />
        </Routes>
        <Sider width="20%" style={siderStyle}>
          <WidgetMinecraft result={WidgetInfo} status={Loading}></WidgetMinecraft>
        </Sider>
      </Layout>
      <Footer style={footerStyle}>FAQ</Footer>
    </Layout>
  );
}
