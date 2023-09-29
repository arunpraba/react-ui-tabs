import { useState } from "react";
import "./styles.css";

const cities = [
  {
    title: "London",
    subTitle: "This is London",
    description:
      "This is London. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facilis adipisci sapiente esse nulla a quo nisi, doloribus odit maxime repudiandae laudantium nobis dolore, quidem ea distinctio accusamus officiis quisquam.Quisquam molestias explicabo repellendus eligendi omnis eius, soluta sint possimus saepe, tempore praesentium? Adipisci accusantium eum impedit voluptas delectus totam libero, repellendus assumenda itaque facilis, velit hic quo repellat tempore."
  },
  {
    title: "Paris",
    subTitle: "This is Paris",
    description:
      "This is Paris. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facilis adipisci sapiente esse nulla a quo nisi, doloribus odit maxime repudiandae laudantium nobis dolore, quidem ea distinctio accusamus officiis quisquam.Quisquam molestias explicabo repellendus eligendi omnis eius, soluta sint possimus saepe, tempore praesentium? Adipisci accusantium eum impedit voluptas delectus totam libero, repellendus assumenda itaque facilis, velit hic quo repellat tempore."
  },
  {
    title: "Tokyo",
    subTitle: "This is Tokyo",
    description:
      "This is Tokyo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facilis adipisci sapiente esse nulla a quo nisi, doloribus odit maxime repudiandae laudantium nobis dolore, quidem ea distinctio accusamus officiis quisquam.Quisquam molestias explicabo repellendus eligendi omnis eius, soluta sint possimus saepe, tempore praesentium? Adipisci accusantium eum impedit voluptas delectus totam libero, repellendus assumenda itaque facilis, velit hic quo repellat tempore."
  }
];

export default function App() {
  const [cityIndex, setCityIndex] = useState(0);
  const selectedCity = cities[cityIndex];

  return (
    <div className="container">
      <>
        <div className="tab">
          {cities.map((city, i) => (
            <button
              key={city.title}
              className={cityIndex === i ? "active" : ""}
              onClick={() => {
                setCityIndex(i);
              }}
            >
              {city.title}
            </button>
          ))}
        </div>
        <div key={selectedCity.title} className="tabcontent">
          <h1>{selectedCity.subTitle}</h1>
          <p>{selectedCity.description}</p>
        </div>
      </>
    </div>
  );
}
