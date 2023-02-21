import React from "react";
import He from "../assets/imgs/Hero.png";

const heroList = ["Buy", "Rent", "Sell"];
const searchInfo = ["Location", "Property type", "Price"];
const searchBackEnd = ["Dhaka", "Duplex", "$4000-8000"];

export const Hero = ({ activeHeroList, setActiveHeroList }) => {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__content">
          <div className="hero__information">
            <h1>Find the perfect place to stay with your family</h1>
            <p>
              Buying a home is a life-changing experience, so shouldn’t your
              real estate agent be a life changer.
            </p>
          </div>
          <div className="hero__opening">
            <img src={He} alt="pic" />
          </div>
        </div>
        <div className="hero__buttons">
          <ul className="hero__usage">
            {heroList.map((lis, i) => (
              <li
                className={activeHeroList === i ? "active" : ""}
                onClick={() => setActiveHeroList(i)}
                key={i}
              >
                {lis}
              </li>
            ))}
          </ul>
          <div className="hero__search">
            <div className="hero__search-block-1">
              <ul className="hero__search-list">
                {searchInfo.map((item, i) => (
                  <li key={i + item}>
                    {item}
                    <svg
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.7"
                        d="M1 1L6 6L11 0.999999"
                        stroke="#030A1B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </li>
                ))}
              </ul>
              <ul className="hero__searchSettings">
                {searchBackEnd.map((item, i) => (
                  <li key={i + item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="hero__search-block-2">
              <div className="hero__search-button">
                <div className="hero__search-button-content">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.73047 10.7532C8.34303 10.7532 10.4609 8.5699 10.4609 5.87662C10.4609 3.18334 8.34303 1 5.73047 1C3.1179 1 1 3.18334 1 5.87662C1 8.5699 3.1179 10.7532 5.73047 10.7532Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.0367 13.2581L8.89764 9.60059"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3>Search</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
