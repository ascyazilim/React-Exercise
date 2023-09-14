import React from "react";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";

function MenuTable({ selectedItem }) {
  return (
    <Table className="custom-table">
      <TableHead>
        <TableRow>
          <TableCell style={{ backgroundColor: "#ff5722", color: "#fff" }}>
            Seçilen Ögeler
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {selectedItem.map((item) => (
          <TableRow key={item}>
            <TableCell>{item}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default MenuTable;
