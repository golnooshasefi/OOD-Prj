import { useState, useEffect } from "react";
import classes from "./Report.module.scss";
import axiosInstance from "../../../axios";
import { useQuery } from "react-query";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
import { BeatLoader } from "react-spinners";

const override = `
  display: inline-block;
  margin: 15rem auto 0;
`;

function createData(name, inventory, number, price, totalPrice, date) {
  return { name, inventory, number, price, totalPrice, date };
}

export default function Report() {
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState();

  async function getOrders() {
    const res = await axiosInstance.get("/products/report/");
    setRows(
      res.data.map((r) =>
        createData(
          r.productName,
          r.inventory,
          r.initial_inventory,
          r.price,
          r.totalPriceOfProduct,
          r.date
        )
      )
    );
    return res.data;
  }

  const { isLoading, status } = useQuery("orders", getOrders);

  return (
    <>
      <ToastContainer />
      <div className={classes.container}>
        <div className={classes.container__headerContainer}>
          <div className={classes.container__headerContainer__header}>
            <span className={classes.container__headerContainer__text}>
              گزارش موجودی
            </span>
          </div>
        </div>
        <BeatLoader
          color="#6667ab"
          loading={isLoading}
          css={override}
          size={30}
        />
        {status === "success" && (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontSize: 18 }} align="right">
                      نام محصول
                    </TableCell>
                    <TableCell sx={{ fontSize: 18 }} align="right">
                      تعداد باقی‌مانده
                    </TableCell>

                    <TableCell sx={{ fontSize: 18 }} align="right">
                      موجودی اولیه
                    </TableCell>
                    <TableCell sx={{ fontSize: 18 }} align="right">
                      مبلغ کالا
                    </TableCell>
                    <TableCell sx={{ fontSize: 18 }} align="right">
                      مبلغ کل فروش
                    </TableCell>
                    <TableCell sx={{ fontSize: 18 }} align="right">
                      تاریخ آخرین فروش
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      data-testid="tableRow"
                    >
                      <TableCell
                        sx={{ fontSize: 17 }}
                        align="right"
                        component="th"
                        scope="row"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell sx={{ fontSize: 16 }} align="right">
                        {digitsEnToFa(addCommas(row.inventory))}
                      </TableCell>
                      <TableCell sx={{ fontSize: 16 }} align="right">
                        {digitsEnToFa(addCommas(row.number))}
                      </TableCell>
                      <TableCell sx={{ fontSize: 16 }} align="right">
                        {digitsEnToFa(addCommas(row.price))}
                      </TableCell>
                      <TableCell sx={{ fontSize: 16 }} align="right">
                        {digitsEnToFa(addCommas(row.totalPrice))}
                      </TableCell>
                      <TableCell sx={{ fontSize: 16 }} align="right">
                        {row.date}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className={classes.totalPrice__container}>
              <span>مبلغ کل فروش:</span>
              <span>{digitsEnToFa(addCommas(total))}</span>
              <span>تومان </span>
            </div>
          </>
        )}
      </div>
    </>
  );
}
