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
        price: "£7.00",
        tags: ["Signature", "GF"],
        options: ["Pork (3) £7", "Crab, King Prawn & Pork (2) £8", "Vegetables (3) £7"],
      },
      {
        id: "goi-cuon",
        name: "Gỏi Cuốn — Summer Rolls",
        description:
          "Lettuce, cucumber, homemade pickle, and rice vermicelli in rice paper — peanut or sweet and sour sauce.",
        price: "£7.00",
        tags: ["GF"],
        options: ["Chicken £7", "King Prawn £7.50", "Vegetables £7"],
      },
      {
        id: "banh-xeo",
        name: "Bánh Xèo — Vietnamese Crispy Crepes",
        description:
          "Rice flour, turmeric, and coconut cream crepe with your choice of filling.",
        price: "£11.00",
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
          "Sweet and sour salad with cucumber, cabbage, pickle, garlic, and crushed peanut.",
        price: "from £8.50",
        options: ["Chicken £8.50", "Beef £8.50", "King Prawn £9.50", "Vegetables £8.50"],
      },
      {
        id: "mango",
        name: "Nộm Xoài — Mango Salad",
        description:
          "Vietnamese sweet and sour mango salad with garlic and crushed peanut.",
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
      },
    ],
  },
  {
    id: "mains",
    name: "Pho & noodles",
    items: [
      {
        id: "pho",
        name: "Phở Soup",
        description: "Classic Vietnamese noodle soup with fragrant broth.",
        price: "£11.00",
        tags: ["Signature", "GF"],
      },
      {
        id: "bun-hue",
        name: "Spicy Huế Soup — Bún Huế",
        description: "Spicy lemongrass noodle soup from Central Vietnam.",
        price: "£11.50",
        tags: ["Mild"],
      },
      {
        id: "pho-xao",
        name: "Phở Xào",
        description: "Wok-stirred flat rice noodles with Asian vegetables.",
        price: "£11.00",
        tags: ["GF"],
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
        price: "£13.50",
      },
      {
        id: "vit-nuong",
        name: "Vịt Nướng",
        description: "Grilled duck with vegetables and rice or vermicelli.",
        price: "£13.50",
        tags: ["Signature"],
      },
      {
        id: "com-rang",
        name: "Cơm Rang Việt Nam",
        description: "Vietnamese egg fried rice with meat.",
        price: "£11.00",
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
        a: "Starters, salads, pho & noodles, and chef specials — from nem rán and bánh xèo to phở and chả cá Hà Nội. Browse the full menu online.",
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
