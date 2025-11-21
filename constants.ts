import { ProductItem } from './types';

export const PRODUCT_ITEMS: ProductItem[] = [
  {
    id: '1',
    name: '極致霧黑禮盒',
    description: '採用 400g 重磅黑卡紙，燙金邊緣處理。適合高級珠寶、精品香氛或限量版禮品，展現低調奢華。',
    price: 'MOQ 500 pcs',
    category: 'box',
    image: 'https://i.postimg.cc/sxxyv2qG/packaging-box-black.png' 
  },
  {
    id: '2',
    name: '琥珀光影玻璃瓶',
    description: '抗 UV 琥珀色玻璃，搭配胡桃木紋旋蓋。專為頂級精油、精華液設計，完美保存活性成分。',
    price: 'MOQ 1000 pcs',
    category: 'bottle',
    image: 'https://i.postimg.cc/WzqXq2yT/packaging-bottle-amber.png'
  },
  {
    id: '3',
    name: '雲霧與杉・環保立袋',
    description: '可生物降解材質，模擬和紙觸感。適合精品咖啡豆、有機茶葉，兼顧防潮與環保美學。',
    price: 'MOQ 2000 pcs',
    category: 'bag',
    image: 'https://i.postimg.cc/FR7Q6yvJ/packaging-pouch.png'
  },
  {
    id: '4',
    name: '絲絨觸感內襯',
    description: '高密度 EVA 覆蓋頂級絲絨，依產品形狀客製化開模。為您的易碎藝術品提供最溫柔的保護。',
    price: 'Custom Order',
    category: 'accessory',
    image: 'https://i.postimg.cc/Xv2qZz1h/packaging-insert.png'
  }
];

export const GALLERY_IMAGES = [
  'https://i.postimg.cc/WzqXq2yT/packaging-bottle-amber.png', // Portrait
  'https://i.postimg.cc/sxxyv2qG/packaging-box-black.png', // Landscape
  'https://i.postimg.cc/FR7Q6yvJ/packaging-pouch.png',  // Square
  'https://i.postimg.cc/Xv2qZz1h/packaging-insert.png', // Portrait
];