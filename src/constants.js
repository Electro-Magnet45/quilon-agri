import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${title} | Quilon Agri Products`;

    return () => {
      document.title = prevTitle;
    };
  }, []);
};

const items = [
  {
    id: 1,
    name: "Black Pepper Powder",
    fullName: "BLACK PEPPER POWDER | (കുരുമുളക് പൊടി)",
    img: "https://i.ibb.co/FVqq5DT/removal-ai-tmp-6264f140eda1c.png",
    price: {
      "200gms": "264",
      "500gms": "630",
    },
  },
  {
    id: 2,
    name: "Chilly Powder Spicy",
    fullName: "CHILLY POWDER SPICY | (മുളക് പൊടി എരിവുള്ളത്)",
    img: "https://i.ibb.co/BT4pcwH/removal-ai-tmp-6264eca81cbef.png",
    price: {
      "200gms": "128",
      "500gms": "290",
    },
  },
  {
    id: 3,
    name: "Coriander Powder",
    fullName: "CORIANDER POWDER | (മല്ലി പൊടി)",
    img: "https://i.ibb.co/7WPw7qV/removal-ai-tmp-6264f1f2690fb.png",
    price: {
      "200gms": "64",
      "500gms": "130",
    },
  },
  {
    id: 4,
    name: "Fenugreek Powder",
    fullName: "FENUGREEK POWDER | (ഉലുവ പൊടി)",
    img: "https://i.ibb.co/DY8CJTw/removal-ai-tmp-6264f1f2690fb.png",
    price: {
      "200gms": "64",
      "500gms": "130",
    },
  },
  {
    id: 5,
    name: "Red Chilli Powder",
    fullName: "RED CHILLI POWDER | (മുളക് പൊടി)",
    img: "https://i.ibb.co/tJrGSMp/removal-ai-tmp-6264f244035a6.png",
    price: {
      "200gms": "136",
      "500gms": "310",
    },
  },
  {
    id: 6,
    name: "Turmeric Powder",
    fullName: "TURMERIC POWDER | (മഞ്ഞൾ പൊടി)",
    img: "https://i.ibb.co/0BTczy0/removal-ai-tmp-6264f265f37a9.png",
    price: {
      "200gms": "80",
      "500gms": "170",
    },
  },
];

export { items, useTitle };
