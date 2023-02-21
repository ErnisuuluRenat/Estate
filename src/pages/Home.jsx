import React from "react";
import axios from "axios";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Partnership } from "../components/Partnership";
import { EstateBlock } from "../components/EstateBlock";
import { PropertyFeatures } from "../components/PropertyFeatures";

export const Home = () => {
  const [activeMenuList, setActiveMenuList] = React.useState(0);
  const [activeHeroList, setActiveHeroList] = React.useState(0);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://63e377ac619fce55d4198e6f.mockapi.io/estate")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  console.log(items);

  return (
    <>
      <div className="wrapper">
        <Header
          activeMenuList={activeMenuList}
          setActiveMenuList={setActiveMenuList}
        />
        <Hero
          activeHeroList={activeHeroList}
          setActiveHeroList={setActiveHeroList}
        />
        <Partnership />
        <div className="popular__property">
          <h1>Popular Properties</h1>
        </div>
        <div className="content__items">
          {items.map((obj) => (
            <EstateBlock key={obj.title} {...obj}></EstateBlock>
          ))}
        </div>
      </div>
      <PropertyFeatures />
    </>
  );
};
