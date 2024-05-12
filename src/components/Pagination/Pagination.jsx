export function Pagination({ viewPosts, total, paginat }) {
  const PageNum = [];

  for (let i = 1; i <= Math.ceil(total / viewPosts); i++) {
    PageNum.push(i);
  }

  return (
    <div>
      <ul>
        {PageNum.map((elem) => (
          <li key={elem}>
            <a
              href="#"
              onClick={() => {
                paginat(elem);
              }}
            >
              {" "}
              {elem}{" "}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
