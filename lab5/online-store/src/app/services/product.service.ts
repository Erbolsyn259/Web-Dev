import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones', icon: '📱' },
    { id: 2, name: 'Laptops', icon: '💻' },
    { id: 3, name: 'Headphones', icon: '🎧' },
    { id: 4, name: 'Tablets', icon: '📟' }
  ];

  private products: Product[] = [
    // ===== Смартфоны (Category ID: 1) =====
    {
      id: 1,
      name: 'iPhone 15 Pro Max 256GB',
      description: 'Флагманский смартфон Apple с титановым корпусом, чипом A17 Pro и улучшенной системой камер.',
      price: 649990,
      rating: 4.8,
      image: 'https://fmobile.kz/_next/image?url=https%3A%2F%2Fapi.fmobile.kz%2Fimage%2Fmedia%2Fsale%2Fimage%2Fsmartfon_apple_iphone_15_pro_max_256gb_black_titanium_mu773_274418_1%202023-10-05_09-47-44.608334%200633e4c8a3b4dc33efbee90b.jpg&w=1080&q=100',
      images: [
        'https://fmobile.kz/_next/image?url=https%3A%2F%2Fapi.fmobile.kz%2Fimage%2Fmedia%2Fsale%2Fimage%2Fsmartfon_apple_iphone_15_pro_max_256gb_black_titanium_mu773_274418_2%202023-10-05_09-47-44.609836%208c25b19171da5708be315562.jpg&w=1080&q=100',
        'https://fmobile.kz/_next/image?url=https%3A%2F%2Fapi.fmobile.kz%2Fimage%2Fmedia%2Fsale%2Fimage%2Fsmartfon_apple_iphone_15_pro_max_256gb_black_titanium_mu773_274418_3%202023-10-05_09-47-44.610351%202296bb48e1bef1f41dd78fee.jpg&w=1080&q=100',
        'https://fmobile.kz/_next/image?url=https%3A%2F%2Fapi.fmobile.kz%2Fimage%2Fmedia%2Fsale%2Fimage%2Fsmartfon_apple_iphone_15_pro_max_256gb_black_titanium_mu773_274418_4%202023-10-05_09-47-44.610730%205ad4cefc98e475f32cbbe9d8.jpg&w=1080&q=100'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hNWqHQTNndQD9RMtbtdRK0v&gclid=Cj0KCQiA18DMBhDeARIsABtYwT0tiSF-MjRBIE7Qula3mT8_ab7zGEHFhn0tm9F3UxX0cvG6w3papQYaAquvEALw_wcB',
      likes: 0,
      categoryId: 1
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra 512GB',
        description: 'Смартфон Samsung Galaxy S24 Ultra, 512 ГБ, титановый черный. 200 МП камера, S-Pen, AI функциялар',
        price: 549990,
        rating: 4.9,
        image: 'https://img.joomcdn.net/b7728bc636ec3ea6456629b9e08ed7cecca41b0e_1024_1024.jpeg',
        images: [
          'https://img.joomcdn.net/b7728bc636ec3ea6456629b9e08ed7cecca41b0e_1024_1024.jpeg',
          'https://img.joomcdn.net/9e2507d1b88a3c9ac234f5f10e2a0c952c0a7a40_1024_1024.jpeg',
          'https://img.joomcdn.net/9c5818146d0e4a5138df497e9b894e4d55ebb040_1024_1024.jpeg'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hNWqHQTNndQD9RMtbtdRK0v&gclid=Cj0KCQiA18DMBhDeARIsABtYwT0tiSF-MjRBIE7Qula3mT8_ab7zGEHFhn0tm9F3UxX0cvG6w3papQYaAquvEALw_wcB',
      likes: 0,
      categoryId: 1
    },
    {
        id: 3,
        name: 'Xiaomi Mi TV Q2 65" 4K UHD',
        description: 'Телевизор Xiaomi Mi TV Q2 65" (165 см), 4K UHD, QLED, Google TV, Dolby Vision',
        price: 349990,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h10/h78/64440241930270.jpg',
        images: [
          'https://neom.kz/upload/iblock/97d/aye3wia96nj0s4r5dojn798h7q7af7b1.webp',
          'https://neom.kz/upload/iblock/5ff/394j152cup3mveuh0zu9pgo6m3wv0aja.webp',
          'https://neom.kz/upload/iblock/f02/ukitiq4x3cuneywzogoqleltd12n1oic.webp'
        ],
        link: 'https://kaspi.kz/shop/p/xiaomi-tv-s-pro-mini-led-2026-l55mb-sru-140-sm-chernyi-149014051/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Чистый iPhone с лучшей программной обработкой фото и процессором Tensor G2.',
      price: 792269,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbd/p1b/64464410.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'Смартфон Redmi A3x 3 ГБ/64 ГБ черный',
      description: 'Быстрый и плавный смартфон с OxygenOS, мощным процессором и быстрой зарядкой.',
      price: 50000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9a/h1b/86584697651230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h46/h73/86584697716766.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hac/h2e/86584697683998.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000',
      likes: 0,
      categoryId: 1
    },

    // ===== Ноутбуки (Category ID: 2) =====
    {
      id: 6,
      name: 'MacBook Pro 16" M3 Pro 18GB/512GB',
      description: 'Ноутбук Apple MacBook Pro 16, M3 Pro чип, 18ГБ, 512ГБ SSD, Space Black',
      price: 1299990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p80/pc6/29100257.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p80/pc6/29100257.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pa4/15675603.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd3/pa4/15675604.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-24-gb-ssd-512-gb-macos-mx2e3-137220943/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hNWqHQTNndQD9RMtbtdRK0v&gclid=Cj0KCQiA18DMBhDeARIsABtYwT0tiSF-MjRBIE7Qula3mT8_ab7zGEHFhn0tm9F3UxX0cvG6w3papQYaAquvEALw_wcB',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'Ноутбук HP 15-fc0940fi 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro / BM0B013EA#UUQ',
      description: 'Ноутбук HP 15-fc0940fi — мощный и надежный инструмент для работы, учебы и развлечений, сочетающий в себе производительность и стильный дизайн.',
      price: 315346,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8b/p73/49382216.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p93/p05/49382217.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfd/p08/49382218.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p67/p0c/49382219.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hp-15-fc0940fi-15-6-16-gb-ssd-512-gb-win-11-pro-bm0b013ea-uuq-141492322/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'Ноутбук HYDRA Home H20 15.6" / 12 Гб / SSD 512 Гб / Win 11 / MKII',
      description: 'Ноутбуки HYDRA это Казахстанский бренд электроники и гаджетов для дома. HYDRA H20 стоит, как обычный ноутбук для повседневного использования, ',
      price: 135000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pec/p46/69607282.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p51/36556289.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p47/69607284.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hydra-home-h20-15-6-12-gb-ssd-512-gb-win-11-mkii-115019992/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'Ноутбук ThundeRobot 911S Core D 15.6" / 16 Гб / SSD 512 Гб / Без ОС / JT009K00F',
      description: 'Игровой ноутбук Thunderobot 911S Core D JT009K00F — 15.6-дюймовая модель с IPS-матрицей и разрешением 1920х1080 пикселей. Отличается высокой частотой обновления — достигает 144 Гц. Матовое покрытие экрана уменьшает количество бликов, обеспечивая комфортные условия для глаз.',
      price: 489000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/hf8/85301691613214.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h91/h27/85301691678750.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h98/hae/85301691744286.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'Ноутбук Castom E157D 15.6" / 16 Гб / SSD 1000 Гб / Win 11 / 101725124',
      description: 'Castom E157D — универсальный ноутбук для работы, учебы и развлечений, сочетающий в себе мощный процессор AMD Ryzen 5, быстрый SSD-накопитель и яркий IPS-экран.',
      price: 249900,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p04/p7d/63008953.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe8/p7c/63008954.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcc/p7c/63008955.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/castom-e157d-15-6-16-gb-ssd-1000-gb-win-11-101725124-145214483/?c=750000000',
      likes: 0,
      categoryId: 2
    },

    // ===== Наушники (Category ID: 3) =====
    {
      id: 11,
      name: 'Наушники ArrowX Pro 2 белый',
      description: 'Беспроводные наушники ArrowX Pro 2 — идеальный выбор для тех, кто ценит качественный звук и комфорт в течение всего дня.',
      price: 4990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc8/pc6/70607997.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p94/p40/70608005.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5c/p40/70608007.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0e/p3d/70608016.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-arrowx-pro-2-belyi-147383499/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Наушники Zhang Kai S25 черный',
      description: 'Беспроводные наушники S25 с Bluetooth 5.3 Ощутите комфорт и чистый звук с обновлённой моделью S25. Новейшая версия Bluetooth 5.3 гарантирует ещё более стабильное соединение, высокую скорость передачи и пониженную задержку.',
      price: 4990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p07/p20/99135035.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe1/pb5/59281308.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p59/pb3/59281310.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe8/pb2/59281314.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-zhang-kai-s25-chernyi-136791864/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Наушники HYDRA Home Minor бежевый',
      description: 'Представляем вам наушники HYDRA Minor — идеальный выбор для тех, кто ценит комфорт и высокое качество звука в любом месте и в любое время. Эти беспроводные наушники обеспечивают чистый звук и долгую работу без проводов.',
      price: 4990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/p7f/46750474.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p13/p2e/46750503.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0c/p79/46750494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p76/p7c/46750484.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-hydra-home-minor-bezhevyi-120724130/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Наушники ArrowX PODS PRO3 белый',
      description: 'Наушники ArrowX PODS PRO 3 – свобода движения и качественный звук!',
      price: 9990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p33/p1e/90238585.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p17/p1e/90238586.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p56/p1b/90238590.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1e/p1b/90238592.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-arrowx-pods-pro3-belyi-153251061/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'Наушники WIWU Earbuds 303 белый',
      description: '🎧 **WIWU Earbuds 303** — это универсальные наушники для тех, кто ценит качественный звук и удобство использования в повседневной жизни.',
      price: 527,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p01/pf1/9210783.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p01/pf1/9210783.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1d/pf1/9210784.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p56/pf1/9210786.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-wiwu-earbuds-303-belyi-118287281/?c=750000000',
      likes: 0,
      categoryId: 3
    },

    // ===== Планшеты (Category ID: 4) =====
    {
      id: 16,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
      description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения, а производительный процессор Apple A16 гарантирует быструю работу приложений.',
      price: 209008,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Стилус Apple Pencil Pro белый',
      description: 'Apple Pencil Pro добавляет еще больше волшебных возможностей, чтобы помочь воплотить ваши идеи в жизнь. Расширенные функции, такие как сжатие, бочкообразное вращение и тактильная обратная связь, делают разметку, создание заметок и создание шедевров более интуитивными, чем когда-либо. Используйте наведение Apple Pencil, чтобы просмотреть, где именно Apple Pencil Pro коснется дисплея, 1 и дважды коснитесь, чтобы быстро переключить инструменты. А если вы потеряете его, находясь вне дома или вне дома, вы легко найдете его в приложении Find My. Apple Pencil Pro подключается, заряжается и хранится с помощью магнита на боковой стороне вашего iPad.',
      price: 67159,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcd/hb2/87129104220190.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h18/87129104285726.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/hbb/87129104351262.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7b/hbb/87129104351262.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/stilus-apple-pencil-pro-belyi-119975356/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Планшет Xiaomi Redmi Pad 2 4G 11 дюйм 8 Гб/256 Гб серый',
      description: 'Xiaomi Redmi Pad 2 4G — универсальный планшет с ярким 11-дюймовым экраном и поддержкой мобильной связи, идеально подходящий для работы, учебы и развлечений.',
      price: 129990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p84/p9b/46318885.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4c/p9b/46318887.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p68/p9b/46318886.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-seryi-140640417/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб розовый',
      description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот планшет с мощным процессором Apple A16 и емким аккумулятором обеспечит вам высокую производительность и длительное время работы',
      price: 211216,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pad/p8c/37011948.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p91/p8c/37011949.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-rozovyi-138199640/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Стилус Акс K-2260 белый',
      description: '✅ Универсальный — подходит для iPad, iPhone, Samsung, Xiaomi и других устройств',
      price: 3700,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p33/p32/64490388.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p19/p90/75631063.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc5/p8f/75631066.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa8/p8f/75631067.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/stilus-aks-st-001-belyi-139848560/?c=750000000',
      likes: 0,
      categoryId: 4
    }
  ];

  constructor() { }

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  getCategoryById(categoryId: number): Category | undefined {
    return this.categories.find(category => category.id === categoryId);
  }

  deleteProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes += 1;
    }
  }
}