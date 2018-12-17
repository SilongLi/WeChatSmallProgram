//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/swiper/swiper01.png',
      '../../images/swiper/swiper02.png',
      '../../images/swiper/swiper03.png',
      '../../images/swiper/swiper04.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    plans: [{
        plan_image: "../../images/swiper/swiper01.png",
        plan_name: "小蘑菇一号",
        plan_price: 900.0,
      },{
        plan_image: "../../images/swiper/swiper02.png",
        plan_name: "小蘑菇二号",
        plan_price: 800.0,
      },{
        plan_image: "../../images/swiper/swiper03.png",
        plan_name: "小蘑菇三号",
        plan_price: 7000,
      }, {
        plan_image: "../../images/swiper/swiper01.png",
        plan_name: "小蘑菇4号",
        plan_price: 900.00,
      }, {
        plan_image: "../../images/swiper/swiper02.png",
        plan_name: "小蘑菇5号",
        plan_price: 800,
      }, {
        plan_image: "../../images/swiper/swiper03.png",
        plan_name: "小蘑菇6号",
        plan_price: 700.0,
      },
    ],
  }
})