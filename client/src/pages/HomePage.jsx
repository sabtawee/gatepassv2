import React, { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import axios from "axios";
import { server } from "../api";

export default function HomePage() {
  const jsPdfGenerator = async () => {
    const doc = new jsPDF({
      orientation: "landscape",
    });
    // autoTable(doc, { html: "#my-table" });
    // Or use javascript directly:
    autoTable(doc, {
      head: [
        [
          "Mater",
          "Material Description",
          "Qty",
          "PC",
          "1",
          "2",
          "3",
          "4",
          "5",
          "Lot No.",
          "Batch No",
          "Return",
        ],
      ],
      body: [
        [
          "Mater",
          "Material Description",
          "Qty",
          "PC",
          "1",
          "2",
          "3",
          "4",
          "5",
          "Lot No.",
          "Batch No",
          "Return",
        ],
        // datas.map(({ model, material_des, wos, qty, wos_out, type, emp }) => {
        //   return [model, material_des, wos, qty, wos_out, type, emp];
        // }),
      ],
      startY: 50, // startY is basically margin-top
      headStyles: {
        fillColor: [241, 196, 15],
        fontSize: 8,
        halign: "center",
      },
      columnStyles: {
        0: { cellWidth: 30, cellHeight: 20, halign: "center" },
        1: { cellWidth: 40, halign: "center" },
        2: { cellWidth: "auto", halign: "center", fontStyle: "bold" },
        3: { cellWidth: 20, halign: "center" },
        4: { cellWidth: 30, halign: "center" },
      },
      styles: {
        valign: "middle",
      },
    });
    doc.save(`pdf.pdf`);
  };

  return (
    <section className="content">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">HOME</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active">HOME</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={jsPdfGenerator}>
        Test
      </button>
    </section>
  );
}
