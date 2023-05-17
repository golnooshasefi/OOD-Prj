import { rest } from "msw";

export const handlers = [
  rest.get("/accounts/report/", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(Report));
  }),
];

const Report = [
  {
    productName: "شلوار",
    inventory: 8,
    initial_inventory: 10,
    price: 450000,
    totalPriceOfProduct: 900000,
    date: "2023-04-23",
  },
  {
    productName: "تیشرت",
    inventory: 100,
    initial_inventory: 200,
    price: 240000,
    totalPriceOfProduct: 480000,
    date: "2023-05-12",
  },

  {
    productName: "هودی آبی",
    inventory: 118,
    initial_inventory: 120,
    price: 240000,
    totalPriceOfProduct: 480000,
    date: "2022-12-02",
  },
];
