import { dataService } from "../services/data";
import { HomeSVG } from "./HomeSVG";

export function SecondSection() {
  const items = dataService.items;

  return (
    <section className="second-section">
      <div className="shape"></div>
      <h1>Build & manage distributed teams like no one else.</h1>
      <HomeSVG />
      <ul className="section-2-list">
        {items.map((item) => (
          <li className="section-2-list-item" key={item.id}>
            <img src={item.img} />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
