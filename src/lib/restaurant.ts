export const restaurant = {
  name: "Com Com",
  fullName: "Com Com Restaurant",
  tagline: "Vietnamese Street Food",
  headline: "Simple bites, big flavours",
  subheadline:
    "Authentic Vietnamese street food in Battersea — fragrant pho, crispy bánh xèo, and recipes passed down through generations.",
  storyTitle: "A taste of Vietnam in Battersea",
  story: [
    "Vietnamese Street Food was founded in 2014 with the dream of sharing the rich and bold flavours of Vietnam with the world.",
    "Our dishes are made with carefully chosen ingredients and traditional recipes. We take pride in our cozy atmosphere and friendly service — come join us for a taste of Vietnam.",
  ],
  location: {
    label: "Battersea",
    area: "Battersea Park Road — Vietnamese street food in a warm dining room.",
    addressLine1: "183-185 Battersea Park Rd",
    addressLine2: "London SW11 4LB",
    phone: "020 7720 9928",
    phoneHref: "tel:+442077209928",
    email: "comcomrestaurant@gmail.com",
    hoursShort: "See opening hours",
    hoursLines: [
      "Mon – Fri · 11:30am – 3:00pm & 4:00pm – 10:00pm",
      "Sat · 12:00pm – 10:30pm",
      "Sun · 12:00pm – 10:00pm",
    ],
    mapQuery: "183-185 Battersea Park Rd, London SW11 4LB",
    lat: 51.475813,
    lng: -0.149048,
  },
  socialNote: "Walk-ins welcome · Reservations recommended on weekends",
} as const;

export type MenuTag = "GF" | "V" | "Vg" | "Mild" | "Signature";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  tags?: MenuTag[];
  options?: string[];
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export const signatureDishes = [
  {
    name: "Phở Soup",
    description:
      "Fragrant Vietnamese noodle soup with a slow-simmered broth — a Battersea favourite.",
    image: "/images/special-pho.jpg",
  },
  {
    name: "Rice & noodles",
    description:
      "From cơm rang to wok-fried noodles — generous plates of Vietnamese comfort food.",
    image: "/images/special-bun.jpg",
  },
  {
    name: "Street-food classics",
    description:
      "Nem rán, bánh xèo, gỏi cuốn, and chef specials prepared fresh for every table.",
    image: "/images/special-chef.jpg",
  },
] as const;

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters",
    items: [
      {
        id: "nem-ran",
        name: "Nem Rán — Deep Fried Spring Rolls",
        description:
          "Onion, vermicelli, Vietnamese mushroom, carrots, and kohlrabi, served with sweet and sour fish sauce.",
        price: "from £7.00",
        tags: ["Signature", "GF"],
        options: [
          "Pork (3 rolls) £7",
          "Crab, King Prawn & Pork (2 rolls) £8",
          "Vegetables (3 rolls) £7",
        ],
      },
      {
        id: "goi-cuon",
        name: "Gỏi Cuốn — Summer Rolls",
        description:
          "Lettuce, cucumber, homemade Vietnamese pickle, and rice vermicelli wrapped in rice paper — peanut sauce or sweet and sour fish sauce.",
        price: "from £7.00",
        tags: ["GF"],
        options: ["Chicken £7", "King Prawn £7.50", "Vegetables £7"],
      },
      {
        id: "banh-xeo",
        name: "Bánh Xèo — Vietnamese Crispy Crepes",
        description:
          "Rice flour, turmeric, and coconut cream crepe with your choice of filling.",
        price: "from £11.00",
        tags: ["Signature", "GF"],
        options: ["Chicken £11", "Beef £11", "King Prawn £12"],
      },
      {
        id: "salt-pepper",
        name: "Salt & Pepper Dishes",
        description: "Crispy salt and pepper favourites.",
        price: "from £8.00",
        tags: ["Mild"],
        options: [
          "Chicken Wings (6) £8",
          "Squid £9.50",
          "King Prawn £9.50",
          "Tofu £8",
        ],
      },
      {
        id: "phong-tom",
        name: "Phồng Tôm — Prawn Crackers",
        description: "Served with sweet chilli sauce.",
        price: "£3.00",
        tags: ["GF", "Mild"],
      },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    items: [
      {
        id: "cabbage",
        name: "Cabbage Salad — Nộm Bắp Cải",
        description:
          "Vietnamese sweet and sour salad with cucumber, cabbage, pickle, dry garlic, and crushed peanut.",
        price: "from £8.50",
        options: [
          "Chicken £8.50",
          "Beef £8.50",
          "King Prawn £9.50",
          "Vegetables £8.50",
        ],
      },
      {
        id: "mango",
        name: "Nộm Xoài — Mango Salad",
        description:
          "Vietnamese special sweet and sour salad with mango, dry garlic, and crushed peanut.",
        price: "from £9.50",
        tags: ["Signature"],
        options: ["Chicken £9.50", "Beef £9.50", "King Prawn £10.50"],
      },
      {
        id: "papaya",
        name: "Nộm Đu Đủ — Green Papaya Salad",
        description:
          "Green papaya, carrot, crushed peanut, and dried garlic with house dressing.",
        price: "from £9.50",
        options: ["Papaya only", "Chicken", "King Prawn"],
      },
    ],
  },
  {
    id: "soups-noodles",
    name: "Pho, bun & noodles",
    items: [
      {
        id: "pho",
        name: "Phở Soup",
        description:
          "Chicken or beef broth with flat pho; served with fresh herbs, chilli sauce, lime, and your choice of meat.",
        price: "from £11.50",
        tags: ["Signature", "GF"],
        options: [
          "Rare Beef £11.50",
          "Well-Cooked Beef £11.50",
          "Stir-Fried Beef £12",
          "Stewed Steak £12",
          "Chicken £11.50",
          "King Prawn £12.50",
          "Special Pho £12.50",
        ],
      },
      {
        id: "bun-sup",
        name: "Bún Sup — Vermicelli Noodle Soup",
        description:
          "Vermicelli in chicken or vegetable stock with a slight sweet tomato flavour — fresh herbs, chilli sauce, and lime.",
        price: "£12.50",
        tags: ["GF"],
        options: ["Fish £12.50", "Crab Paste £12.50"],
      },
      {
        id: "bun-hue",
        name: "Spicy Huế Soup — Bún Huế",
        description:
          "Balance of spicy, sour, salty, and sweet with lemongrass — rice vermicelli, fresh vegetables, chilli, and lime.",
        price: "from £12.00",
        tags: ["Mild"],
        options: ["Chicken £12", "Beef £12", "King Prawn £13"],
      },
      {
        id: "bun-tron",
        name: "Bún Trộn — Mixed Vermicelli Salad",
        description:
          "Cold vermicelli with stir-fried meat, beansprouts, roasted peanut, mint, coriander, cucumber, pickle, fried shallot, and chilli oil — fish sauce or soya.",
        price: "from £11.50",
        options: ["Chicken £11.50", "Beef £11.50", "King Prawn £12.50"],
      },
      {
        id: "bun",
        name: "Bún — Vermicelli Noodle Dishes",
        description:
          "Vermicelli, lettuce, cucumber, and pickle with homemade sweet and sour fish sauce.",
        price: "from £11.50",
        tags: ["GF"],
        options: [
          "Grilled Meatball & Pork £11.50",
          "Pork Rolls £11.50",
          "Crab & Pork Rolls £12.50",
        ],
      },
      {
        id: "pho-xao",
        name: "Phở Xào — Stir-Fried Flat Rice Noodle",
        description: "Wok-stirred noodles with Asian vegetables.",
        price: "from £11.50",
        tags: ["GF"],
        options: [
          "Chicken £11.50",
          "Beef £11.50",
          "King Prawn £12.50",
          "Special £12.90",
        ],
      },
      {
        id: "mi-xao",
        name: "Mì Xào — Stir-Fried Egg Noodle",
        description: "Wok-stirred egg noodles with Asian vegetables.",
        price: "from £11.50",
        options: [
          "Chicken £11.50",
          "Beef £11.50",
          "King Prawn £12.50",
          "Special £12.90",
        ],
      },
      {
        id: "curry",
        name: "Vietnamese Curry Sauce",
        description:
          "Coconut milk mixed with Vietnamese curry powder — choice of rice or vermicelli.",
        price: "from £12.00",
        options: ["Chicken £12", "Beef £12", "King Prawn £13"],
      },
      {
        id: "black-bean",
        name: "Vietnamese Black Bean Sauce",
        description: "Sizzling stir-fried black bean sauce served with rice.",
        price: "from £12.00",
        tags: ["Signature"],
        options: ["Chicken £12", "Beef £12", "King Prawn £13"],
      },
    ],
  },
  {
    id: "rice",
    name: "Rice dishes",
    items: [
      {
        id: "lemongrass-chilli",
        name: "Vietnamese Wok Lemongrass Chilli",
        description: "Stir-fried lemongrass chilli served with rice.",
        price: "from £12.00",
        tags: ["Mild"],
        options: ["Chicken £12", "Beef £12", "King Prawn £13"],
      },
      {
        id: "com-hap-ga-nuong",
        name: "Cơm Hấp Gà Nướng",
        description: "Boiled rice with grilled chicken.",
        price: "Ask server",
      },
      {
        id: "com-chien-ga-nuong",
        name: "Cơm Chiên Gà Nướng",
        description: "Fried rice with grilled chicken.",
        price: "Ask server",
      },
      {
        id: "com-sot-vang",
        name: "Cơm Sốt Vang — Stewed Beef with Rice",
        description: "Stewed beef in wine served with boiled rice.",
        price: "Ask server",
        tags: ["Signature"],
      },
      {
        id: "com-nem-thit-nuong",
        name: "Cơm Nem Thịt Nướng",
        description:
          "Grilled pork and spring roll with vegetables on the side and boiled rice.",
        price: "Ask server",
      },
      {
        id: "com-thit-kho",
        name: "Cơm Thịt Kho",
        description: "Vietnamese braised pork with boiled rice.",
        price: "Ask server",
      },
      {
        id: "com-suon-nuong",
        name: "Cơm Sườn Nướng",
        description:
          "Vietnamese pork chop with egg, salad, and boiled rice — sweet and sour fish sauce.",
        price: "Ask server",
        tags: ["Signature"],
      },
      {
        id: "com-rang",
        name: "Cơm Rang Việt Nam",
        description: "Egg fried rice with meat and salad on the side.",
        price: "from £11.00",
        options: [
          "Chicken £11",
          "Beef £11",
          "King Prawn £12",
          "Special £12.50",
        ],
      },
    ],
  },
  {
    id: "chef",
    name: "Chef's special",
    items: [
      {
        id: "cha-ca",
        name: "Chả Cá Hà Nội",
        description: "Vietnamese turmeric fish with dill and vermicelli.",
        price: "£12.90",
        tags: ["Signature", "GF"],
      },
      {
        id: "sweet-sour",
        name: "Sweet & Sour Hong Kong",
        description:
          "Crispy battered chicken or king prawn in sweet and tangy sauce with boiled rice.",
        price: "from £12.00",
        options: ["Chicken £12", "King Prawn £13.50"],
      },
      {
        id: "vit-lan",
        name: "Vịt Lăn",
        description:
          "Stir-fried duck with galangal, shrimp paste, and chilli lemongrass — rice or vermicelli.",
        price: "Ask server",
        tags: ["Mild"],
      },
      {
        id: "vit-nuong",
        name: "Vịt Nướng",
        description: "Grilled duck served with vegetables and rice or vermicelli.",
        price: "£15.00",
        tags: ["Signature"],
      },
    ],
  },
  {
    id: "vegetarian",
    name: "Vegetarian",
    items: [
      {
        id: "pho-chay",
        name: "Phở Chay",
        description:
          "Vegetable broth with flat pho — fresh herbs, chilli sauce, and lime.",
        price: "Ask server",
        tags: ["V", "Vg", "GF"],
      },
      {
        id: "bun-nem-rau",
        name: "Bún Nem Rau",
        description: "Rice vermicelli with vegetable spring rolls.",
        price: "Ask server",
        tags: ["V", "Vg"],
      },
      {
        id: "bun-tron-dau-phu",
        name: "Bún Trộn Đậu Phụ",
        description: "Vermicelli noodle with tofu and salad.",
        price: "Ask server",
        tags: ["V", "Vg"],
      },
      {
        id: "pho-xao-chay",
        name: "Phở Xào Chay Tofu",
        description: "Stir-fried vegetable flat noodle with tofu.",
        price: "Ask server",
        tags: ["V", "Vg", "GF"],
      },
      {
        id: "mi-xao-chay-veg",
        name: "Mì Xào Chay Vegetables",
        description: "Stir-fried vegetable egg noodle.",
        price: "Ask server",
        tags: ["V", "Vg"],
      },
      {
        id: "mi-xao-chay-tofu",
        name: "Mì Xào Chay Tofu",
        description: "Stir-fried vegetable egg noodle with tofu.",
        price: "Ask server",
        tags: ["V", "Vg"],
      },
      {
        id: "ca-ri-chay",
        name: "Cà Ri Chay — Vegetable Curry",
        description: "Vegetable curry with rice or vermicelli.",
        price: "£11.50",
        tags: ["V", "Vg"],
      },
      {
        id: "dau-phu-ca-tim",
        name: "Đậu Phụ Xào Cà Tím",
        description: "Stir-fried tofu and aubergine with rice.",
        price: "Ask server",
        tags: ["V", "Vg"],
      },
      {
        id: "com-rang-chay-tofu",
        name: "Cơm Rang Chay Tofu",
        description: "Vegetarian egg fried rice with tofu.",
        price: "Ask server",
        tags: ["V"],
      },
      {
        id: "com-rang-chay-veg",
        name: "Cơm Rang Chay Vegetables",
        description: "Vegetarian egg fried rice with vegetables.",
        price: "£12.00",
        tags: ["V"],
      },
      {
        id: "com-dau-phu-do-den",
        name: "Cơm Đậu Phụ Đỗ Đen",
        description: "Tofu black bean sauce with rice.",
        price: "£12.00",
        tags: ["V", "Vg"],
      },
    ],
  },
];

export const faqItems = [
  {
    category: "Reservations",
    items: [
      {
        q: "Do I need a reservation?",
        a: "We welcome walk-ins when tables are available, but reserving ahead is recommended — especially on weekends and for groups of four or more. You can book online in a few minutes.",
      },
      {
        q: "How far in advance can I book?",
        a: "You can book up to 60 days ahead online. For larger parties or special occasions, call us on 020 7720 9928.",
      },
      {
        q: "How soon can I book for today?",
        a: "Online bookings need at least 3 hours’ notice before your table time. For sooner seating, please call the restaurant.",
      },
      {
        q: "Can I change or cancel my booking?",
        a: "Yes — call us with your booking reference and we will help amend or cancel. Please give as much notice as you can.",
      },
      {
        q: "Will I receive a confirmation?",
        a: "Yes. After you complete the online form you will see a booking reference on screen. We also email confirmation to the address you provide when email delivery is enabled.",
      },
    ],
  },
  {
    category: "Dining with us",
    items: [
      {
        q: "What are your opening hours?",
        a: "Monday–Friday 11:30am–3:00pm and 4:00pm–10:00pm; Saturday 12:00pm–10:30pm; Sunday 12:00pm–10:00pm. Hours can vary on bank holidays — call ahead if unsure.",
      },
      {
        q: "Do you cater for dietary requirements?",
        a: "Many dishes can be prepared gluten-free, vegetarian, or vegan. Tell us about allergies when you book and remind your server when you arrive. See our Food hygiene & allergies page.",
      },
      {
        q: "Is there a dress code?",
        a: "No — Com Com is relaxed Vietnamese street-food dining. Come as you are.",
      },
      {
        q: "Do you have high chairs or space for pushchairs?",
        a: "High chairs are available on request. Pushchair space depends on how busy we are — ask when you book if you need room.",
      },
    ],
  },
  {
    category: "Menu & visit",
    items: [
      {
        q: "What is on the menu?",
        a: "Starters, salads, pho/bun/noodles, rice dishes, chef specials, and a full vegetarian section — from nem rán and bánh xèo to phở, cơm sườn nướng, and chả cá Hà Nội. Browse the full menu online.",
      },
      {
        q: "Do you offer takeaway or delivery?",
        a: "Yes — takeaway is available from the restaurant, and delivery partners such as Just Eat may serve your area.",
      },
      {
        q: "Where can I park?",
        a: "Street parking and nearby paid options are available on and around Battersea Park Road. Check local signage for restrictions.",
      },
    ],
  },
] as const;
