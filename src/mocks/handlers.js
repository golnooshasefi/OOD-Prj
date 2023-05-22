import { rest } from "msw";

export const handlers = [
  rest.post("/accounts/api/token/", (req, res, ctx) => {
    const { username, password } = req.json();

    if (username === "maryam@gmail.com" && password === "ABCD") {
      return res(
        ctx.status(200),
        ctx.json({
          refresh:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4MjE0NTU1NSwiaWF0IjoxNjgyMDU5MTU1LCJqdGkiOiI2Y2Y3NjcwNTE3YTA0ZDc3YmQ4YTU1MTQ2YWE4NjdlOCIsInVzZXJfaWQiOjJ9.IFQu-0jiZa3AxLpuEk1A-UY6D1WXByEeLCpafS0qAeg",
          access:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgyMDYyNzU1LCJpYXQiOjE2ODIwNTkxNTUsImp0aSI6IjFmOTE4NGNmNDc4NTRkZWU5YzcwYTcyMjI1MGM3NThhIiwidXNlcl9pZCI6Mn0.sTx-oqLAE8Uo9puchMCifmIPseTzlMT13G80bML-_Lg",
          type: "user",
          username: "maryam",
          email: "maryam@gmail.com",
          user_phone_number: "09108949238",
          balance: 0.0,
          score: 4,
        })
      );
    } else {
      return res(ctx.status(400));
    }
  }),

  rest.get("/accounts/show_user_info/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        email: "user1@gmail.com",
        username: "user1",
        user_phone_number: "0983728113",
        user_postal_code: "21354",
        user_address: "دانشگاه اصفهان، دانشکده فنی و مهندسی",
        inventory: 0.0,
      })
    );
  }),

  rest.get("/gifts/show_gift/", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        {
          description: "تخفیف 20 درصدی",
          score: 0,
        },
        {
          description: "تخفیف 30 درصدی",
          score: 200,
        },
        {
          description: "ارسال رایگان",
          score: 300,
        }
      )
    );
  }),

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
