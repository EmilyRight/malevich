const cameraImg = require('../../img/page/camera-left.png');
const capsImg = require('../../img/page/caps-left.png');
const winkImg = require('../../img/page/wink-left.png');
const smartphone30Img = require('../../img/page/smartphone-left.png');
const smartphone30iImg = require('../../img/page/smartphone30i-left.png');

const devicesData = [
  {
    id: 1,
    type: 'device',
    name: 'Видеокамера',
    imageSrc: cameraImg,
    maxDiscount: 1000,
    basePrice: 5990,
  },
  {
    id: 2,
    type: 'device',
    name: 'VK Капсула Мини',
    imageSrc: capsImg,
    maxDiscount: 1000,
    basePrice: 6990,
  },

  {
    id: 3,
    type: 'device',
    name: 'TV-приставка Wink',
    imageSrc: winkImg,
    maxDiscount: 2000,
    basePrice: 6990,
  },

  {
    id: 4,
    type: 'smartphone',
    name: 'Infinix HOT 30 8/128Gb',
    imageSrc: smartphone30Img,
    maxDiscount: 4000,
    basePrice: 17990,
  },

  {
    id: 5,
    type: 'smartphone',
    name: 'Infinix NOTE 30i 8/256',
    imageSrc: smartphone30iImg,
    maxDiscount: 4000,
    basePrice: 21990,
  },
];
export default devicesData;
