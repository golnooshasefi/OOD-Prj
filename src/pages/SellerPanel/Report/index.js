import { useState, useEffect } from "react";
import classes from "./Report.module.scss";
import axiosInstance from "../../../axios";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];
function createData(name, inventory, number, price, totalPrice, date) {
  return { name, inventory, number, price, totalPrice, date };
}

export default function Report() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState();

  useEffect(() => {
    axiosInstance.get(`/accounts/report/`).then((res) => {
      if (res.status === 200) {
        console.log("reponse 200");
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
        const totalPrice = setTotal(res.data[res.data.length - 1].totalSell);
        // console.log("total", totalPrice);

        setLoading(false);
      }
    });
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.container__headerContainer}>
        <div className={classes.container__headerContainer__header}>
          <span className={classes.container__headerContainer__text}>
            گزارش موجودی
          </span>
        </div>
      </div>
      {!loading && (
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
            <span >مبلغ کل فروش:</span>
            <span>{digitsEnToFa(addCommas(total))}</span>
          </div>
        </>
      )}
    </div>
  );
}
