import { dataService } from "../services/data";

export function ThirdSection() {
  const items = dataService.usersStories;

  return (
    <section className="third-section">
      <img src="images/bg-pattern-home-4-about-3.svg" alt="svg"></img>
      <h1>
        Delivering real results for top companies. some of our
        <span> success stories</span>
      </h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img className="quotes" src="images/icon-quotes.svg"></img>
            <p>{`"${item.text}"`}</p>
            <h2 className="name">{item.name}</h2>
            <img className="avatar" src={item.avatar}></img>
          </li>
        ))}
      </ul>
      <img
        className="svg-bottom"
        src="public\images\bg-pattern-home-5.svg"
      ></img>
    </section>
  );
}
