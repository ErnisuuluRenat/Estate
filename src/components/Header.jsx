import React from "react";
import { Link } from "react-router-dom";

const menuList = ["Home", "Properties", "About us", "Blog"];

export function Header({ activeMenuList, setActiveMenuList }) {
  console.log(activeMenuList);
  return (
    <div>
      <div className="header header__content">
        <div className="header__logo">
          <svg
            width="250"
            height="65"
            viewBox="0 0 250 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="250" height="65" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_1_21"
                  transform="scale(0.004 0.0153846)"
                />
              </pattern>
              <image
                id="image0_1_21"
                width="250"
                height="65"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </div>
        <div className="header__menu">
          <ul className="nav">
            {menuList.map((list, i) => (
              <li
                key={i}
                onClick={() => setActiveMenuList(i)}
                className={activeMenuList === i ? "active" : ""}
              >
                {list}
              </li>
            ))}
          </ul>
          <Link className="header__button" to={"#"}>
            Contact us
          </Link>
          <Link className="header__auth" to={"/auth"}>
            <svg
              fill="#000000"
              height="30px"
              width="30px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 499.1 499.1"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M0,249.6c0,9.5,7.7,17.2,17.2,17.2h327.6l-63.9,63.8c-6.7,6.7-6.7,17.6,0,24.3c3.3,3.3,7.7,5,12.1,5s8.8-1.7,12.1-5
				l93.1-93.1c6.7-6.7,6.7-17.6,0-24.3l-93.1-93.1c-6.7-6.7-17.6-6.7-24.3,0c-6.7,6.7-6.7,17.6,0,24.3l63.8,63.8H17.2
				C7.7,232.5,0,240.1,0,249.6z"
                    />
                    <path
                      d="M396.4,494.2c56.7,0,102.7-46.1,102.7-102.8V107.7C499.1,51,453,4.9,396.4,4.9H112.7C56,4.9,10,51,10,107.7V166
				c0,9.5,7.7,17.1,17.1,17.1c9.5,0,17.2-7.7,17.2-17.1v-58.3c0-37.7,30.7-68.5,68.4-68.5h283.7c37.7,0,68.4,30.7,68.4,68.5v283.7
				c0,37.7-30.7,68.5-68.4,68.5H112.7c-37.7,0-68.4-30.7-68.4-68.5v-57.6c0-9.5-7.7-17.2-17.2-17.2S10,324.3,10,333.8v57.6
				c0,56.7,46.1,102.8,102.7,102.8H396.4L396.4,494.2z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
