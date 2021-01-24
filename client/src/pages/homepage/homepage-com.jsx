import React from "react";
import { HomePageContainer } from "./homepage-sty";
import { ReactComponent as Logo } from "../../assests/hero.svg";

const HomePage = (props) => {
  return (
    <HomePageContainer>
      <div
        style={{
          backgroundColor: "#406AC4",
          height: "100vh",
        }}
      >
        <div className="p-grid p-justify-center	p-align-center p-mp-6">
          <div className="p-col-12 p-md-4 p-lg-3">
            <h1>
              Trello helps teams work more collaboratively and get more done.
            </h1>
            <p>
              Trello’s boards, lists, and cards enable teams to organize and
              prioritize projects in a fun, flexible, and rewarding way.
            </p>
          </div>
          <div className="p-col-12 p-md-5 p-lg-4">
            <Logo />
          </div>
        </div>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
