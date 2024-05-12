import { Layout, Image } from "antd";
const { Content } = Layout;
const contentStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  alignItems: "center",
  textAlign: "center",
  minHeight: 120,
  color: "#000000",
  backgroundColor: "#FFFFFF",
};
export function Main() {
  return (
    <Content style={contentStyle}>
      <div>
        <Image
          width={600}
          src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-logotip-mainkrafta-s-prozrachnim-fonom-2.png"
        />
        <p style={{ fontSize: "1.5rem", width: "70rem" }}>
          Вам надоел ванильный майнкрафт? Хотите почувствовать себя искателем
          приключений, изучая каждую травинку? Данная сборка даёт вам такую
          возможность. Запустив свой мир, вам дадут несколько происхождений на
          выбор, и в зависимости от вашего выбора, может измениться весь ход
          прохождения за счёт баффов и дебаффов. Мир будет наполнен новыми
          подземельями, мирами, мобами, оружием, были переработаны многие
          ванильные постройки. Приятной игры!
        </p>
      </div>
      <a href="#" style={{ color: "#5606d6", fontSize: "2rem" }}>
        Скачать сборку
      </a>
      <h3>Скриншоты сборки:</h3>
      <div style={{ display: "flex", gap: "1rem", marginBottom: '1rem' }}>
        <Image
          width={300}
          src="https://minecraft-inside.ru/uploads/files/2024-04/thumb/Image-19.png"
        />
        <Image
          width={300}
          src="https://minecraft-inside.ru/uploads/files/2024-04/thumb/Image-13.png"
        />
        <Image
          width={300}
          src="https://minecraft-inside.ru/uploads/files/2024-04/thumb/Image-11.png"
        />
        <Image
          width={300}
          src="https://minecraft-inside.ru/uploads/files/2024-04/thumb/Image-10.png"
        />
      </div>
    </Content>
  );
}
