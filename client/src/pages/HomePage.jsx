import React, { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import axios from "axios";
import { server } from "../api";

export default function HomePage() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(server.API_GET_STOCKLOGOUT);
    setData(res.data);
  };

  const jsPdfGenerator = async () => {
    const doc = new jsPDF();
    //autoTable(doc, { html: "#my-table" });
    // Or use javascript directly:
    autoTable(doc, {
      head: [
        [
          {
            content: "",
          },
          {
            content: "",
          },
          {
            content: "",
          },
          {
            content: "",
          },
          {
            content: "",
          },
          {
            content: "",
          },       
          {
            content: "Part NG Detail",
          },
          {
            content: "",
          },       
          {
            content: "",
          },       
        ],
        [
          {
            content: "No",
          },
          {
            content: "Process code",
          },
          {
            content: "Process Name",
          },
          {
            content: "Operation name",
          },
          {
            content: "NG Qty",
          },
          {
            content: "Approved",
          },
          {
            content: "Part Ng Name",
          },
          {
            content: "Ng Qty",
          },
          {
            content: "Approved",
          },
        ],
        
      ],
      body: [
        ["1", "11111", "2222222222222222222222222222", "33333333", "44", "55555555", "666666666666666", "77", "8888888"],
        // datas.map(({ model, material_des, wos, qty, wos_out, type, emp }) => {
        //   return [model, material_des, wos, qty, wos_out, type, emp];
        // }),
      ],
      styles: {overflow: 'linebreak',
                fontSize: 6},
      margin: {left: 2, right: 2, bottom: 0 },
      theme: 'grid',
      
    });

    doc.save("table.pdf");
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
