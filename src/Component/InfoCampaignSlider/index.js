import React from "react";
import "./style.css";

import { Carousel } from "react-bootstrap";

function InfoCampaignSlider() {
  return (
    <div className="info-campaign">
      <div className="image-slider-wrapper">
        <Carousel nextIcon={false} prevIcon={false}>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://firebase-kanvas.imgix.net/web_homebanner/homebanner/Desember/quransantripelosok.jpg?auto=compress,format&cs=tinysrgb&fm=pjpg&fit=clip&w=448"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://firebase-kanvas.imgix.net/web_homebanner/homebanner/Desember/countdown4.png?auto=compress,format&cs=tinysrgb&fm=pjpg&fit=clip&w=448"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://firebase-kanvas.imgix.net/web_homebanner/homebanner/Desember/gebrakanbantuwargadhuafa.jpg?auto=compress,format&cs=tinysrgb&fm=pjpg&fit=clip&w=448"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default InfoCampaignSlider;
