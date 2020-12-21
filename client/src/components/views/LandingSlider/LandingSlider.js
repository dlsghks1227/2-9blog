import React, { Component } from "react";
import Slider from "react-slick";
import "./LandingSlider.scss"
import write from './write.png';
import book from './book.png';
import coffee from './coffee.png';
import ipad from './ipad.png';
import calendar from './calendar.png';
import {
  Carousel
} from 'react-bootstrap'

const images = [
  {
    text: "하루동안 공부한 것을 기록해 보세요.",
    image: write
  },
  {
    text: "오늘 하루를 글로 담아보세요.",
    image: book
  },
  {
    text: "중요한 것을 기록하세요.",
    image: coffee
  },
  {
    text: "언제든지 글을 찾아 보세요.",
    image: ipad
  },
  {
    text: "마음에 드는 글은 모아서 보세요.",
    image: calendar
  },
]

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
      <Carousel touch>
        {
          images.map((item, index) => {
            return (
                <Carousel.Item key={index}>
                  <div className="photo">
                    <img src={item.image} alt={index}/>
                    <Carousel.Caption>
                      <p className="slider-text">{item.text}</p>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
            )
          })
        }
      </Carousel>
      // <Slider {...settings}>
      //   {
      //     images.map((item, index) => {
      //       return (
      //         <div key={index} className="photo">
      //           <img src={item.image} alt={index} />
      //           <p className="slider-text">{item.text}</p>
      //         </div>
      //       )
      //     }
      //     )
      //   }
      // </Slider>
    );
  }
}