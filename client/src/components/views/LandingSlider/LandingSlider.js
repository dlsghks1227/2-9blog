import React, { Component } from "react";
import Slider from "react-slick";
import "./LandingSlider.scss"
import write from './write.png';
import book from './book.png';
import coffee from './coffee.png';
import ipad from './ipad.png';
import calendar from './calendar.png';
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="photo">
            <img src={write} />
            <p className="slider-text">하루동안 공부한 것을 기록해 보세요.</p>
          </div>
          <div className="photo">
            <img src={book} />
            <p className="slider-text">오늘 하루를 글로 담아보세요.</p>
          </div>
          <div className="photo">
            <img src={ipad} />
            <p className="slider-text">중요한 것을 기록하세요.</p>
          </div>
          <div className="photo">
            <img src={coffee} />
            <p className="slider-text">언제든지 글을 찾아 보세요.</p>
          </div>
          <div className="photo">
            <img src={calendar} />
            <p className="slider-text">마음에 드는 글은 모아서 보세요.</p>
          </div>
        </Slider>
      </div>
    );
  }
}