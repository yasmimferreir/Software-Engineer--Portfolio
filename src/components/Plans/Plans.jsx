import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import Carousel from "react-elastic-carousel";
import { StyleSheetManager } from "styled-components";

const Plans = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
  ];

  return (
    <div className="plans-container">
      <div className="plans-container"></div>
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>

      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">Alguns</span>
        <span>dos meus</span>
        <span className="stroke-text">Projeto</span>
      </div>

      <div className="plans">
        <StyleSheetManager shouldForwardProp={(prop) => prop !== "isRTL"}>
          <Carousel itemsToShow={3} breakPoints={breakPoints}>
            {plansData.map((plan) => (
              <div className="plan" key={plan.id}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>{plan.price}</span>
                <span>{plan.Image}</span>

                <div className="features">
                  {plan.features.map((feature, i) => (
                    <div className="feature" key={i}>
                      <img src={whiteTick} alt="img-tick" />
                      <span key={i}>{feature}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <button className="btn">
                    <a href={plan.url}>Acesse agora</a>
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </StyleSheetManager>
      </div>
    </div>
  );
};

export default Plans;
