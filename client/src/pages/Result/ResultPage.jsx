import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { server } from "../../api";

export default function ResultPage() {
  const [results, setResult] = useState([]);
  const [po, setPo] = useState("");

  useEffect(() => {
    getResultAll();
  }, []);

  const getResultAll = async () => {
    try {
      let result = await axios.get(server.API_GET_RESULTALL);
      setResult(result.data);
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  const getResultPo = async () => {
    try {
      const response = await axios.get(server.API_GET_RESULTPO + `/` + po);
      setResult(response.data);
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  return (
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Home Work</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active"></li>
            </ol>
          </div>
        </div>
      </div>
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Result</h3>
        </div>
        <div className="col-6">
          <div className="card-body">
            <label>PO No.</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPo(e.target.value)}
              onKeyPress={getResultPo}
            />
          </div>
        </div>
      </div>
      <div className="container"></div>
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Result</h3>
        </div>
        <div className="card-body">
          <table className="table table-head-fixed table-hover text-nowrap">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">Date</th>
                {/* <th className="text-center">JobName</th> */}
                <th className="text-center">JobCode</th>
                {/* <th className="text-center">VendorName</th> */}
                <th className="text-center">VendorCode</th>
                <th className="text-center">PO NO</th>
                <th className="text-center">Qty</th>
                <th className="text-center">Material</th>
                {/* <th className="text-center">Mat Des</th> */}
                <th className="text-center">Control No</th>
                <th className="text-center">Process</th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, i) => (
                <tr key={i}>
                  <td className="text-center">{i + 1}</td>
                  <td className="text-center">{result.date}</td>
                  {/* <td className="text-center">{result.job_name}</td> */}
                  <td className="text-center">{result.job_code}</td>
                  {/* <td className="text-center">{result.vendor_name}</td> */}
                  <td className="text-center">{result.vendor_code}</td>
                  <td className="text-center">{result.po_no}</td>
                  <td className="text-center">{result.qty}</td>
                  <td className="text-center">{result.material}</td>
                  {/* <td className="text-center">{result.material_des}</td> */}
                  <td className="text-center">{result.control_no}</td>
                  <td className="text-center">{result.process}</td>
                  <td className="text-center"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
