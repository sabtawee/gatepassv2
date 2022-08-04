import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
import { server } from "../../api";
import LoginPage from "../Login/LoginPage";

export const formatDate = Moment().format("DD-MMM-YY");

export default function InputPage() {
  const EMP_NO = JSON.parse(localStorage.getItem("EMP_NO"));

  const [jobs, setJob] = useState([]);
  const [vendors, setVendor] = useState([]);
  const [processs, setProcess] = useState([]);
  const [items, setItem] = useState([]);

  const [jobcode, setJobcode] = useState("");
  const [vendorcode, setVendorcode] = useState("");
  const [processcode, setProcesscode] = useState("");
  const [itemcode, setItemcode] = useState("");
  const [po, setPo] = useState("");
  const [qty, setQty] = useState("");
  const [controlno, setControlno] = useState("");
  const [itemsearch, setItemsearch] = useState("");

  const [jobname, setJobname] = useState("");

  if (!EMP_NO) {
    return <LoginPage url="/input" />;
  }

  useEffect(() => {
    getSelectAll();
  }, []);

  const getSelectAll = async () => {
    try {
      const job = await axios.get(server.API_GET_JOBALL);
      setJob(job.data);
      const vendor = await axios.get(server.API_GET_VENDORALL);
      setVendor(vendor.data);
      const process = await axios.get(server.API_GET_PROCESSALL);
      setProcess(process.data);
      const item = await axios.get(server.API_GET_ITEMALL);
      setItem(item.data);
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  const SearchByitem = async () => {
    try {
      const response = await axios.get(
        server.API_GET_ITEMSEARCH + `/` + itemsearch
      );
      console.log(response.data);
      setItem(response.data);
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  const getControlNo = async () => {
    try {
      const myItem = await itemcode.split("/");
      let myItemcode = myItem[0];
      let myItemname = myItem[1];
      const myVendor = await vendorcode.split("/");
      let myVendorcode = myVendor[0];
      let myVendorname = myVendor[1];
      const myJob = await jobcode.split("/");
      let myJobcode = myJob[0];
      let myJobname = myJob[1];
      const myProcess = await processcode.split("/");
      let myProcesscode = myProcess[0];
      let myProcessname = myProcess[1];

      let today = new Date();
      let mm = today.getMonth() + 1;
      let yy = Moment().format("YY");
      let cc = myVendorcode + myProcesscode + yy + mm;
      const response = await axios.post(server.API_POST_CHECKNUM, {
        cont: cc,
      });
      let data = response.data;
      let num = data[0].cont_num;
      let zero_num = ("0000" + (num * 1 + 1)).substr(
        String(num * 1 + 1).length
      );
      let con_num = cc + zero_num;
      console.log(con_num);
      setControlno(con_num);
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  const SubMit = async () => {
    try {
      const myItem = await itemcode.split("/");
      let myItemcode = myItem[0];
      let myItemname = myItem[1];
      const myVendor = await vendorcode.split("/");
      let myVendorcode = myVendor[0];
      let myVendorname = myVendor[1];
      const myJob = await jobcode.split("/");
      let myJobcode = myJob[0];
      let myJobname = myJob[1];
      const myProcess = await processcode.split("/");
      let myProcesscode = myProcess[0];
      let myProcessname = myProcess[1];

      let today = new Date();
      let mm = today.getMonth() + 1;
      let yy = Moment().format("YY");
      let cc = myVendorcode + myProcesscode + yy + mm;
      const response = await axios.post(server.API_POST_CHECKNUM, {
        cont: cc,
      });
      let data = response.data;
      let num = data[0].cont_num;
      let sequence = num * 1 + 1;

      await axios.post(server.API_POST_NUMBERING, {
        cont: cc,
        vendorcode: myVendorcode,
        process: myProcesscode,
        sequence: sequence,
        meterial: myItemcode,
        qty: qty,
        date: formatDate,
        job_name: myJobname,
        job_code: myJobcode,
        vendor_name: myVendorname,
        po_no: po,
        meterial_des: myItemname,
        control_no: controlno,
        process_name: myProcessname,
      });
      Swal.fire(
        "Control No : " + controlno,
        "Material : " + myItemname,
        "success",
        {
          buttons: false,
          timer: 2000,
        }
      ).then((value) => {
        window.location.href = "./input";
      });
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
              <li className="breadcrumb-item active">Home Work</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Home Work Gate Pass Out</h3>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Date</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={formatDate}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Contor No.</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={controlno}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Vendor Name</label>
                    <select
                      type="text"
                      onChange={(e) => setVendorcode(e.target.value)}
                      className="form-control"
                    >
                      <option value=""></option>
                      {vendors.map((vendor, i) => (
                        <option
                          key={i}
                          value={vendor.remark + "/" + vendor.vendor_name}
                        >
                          {vendor.vendor_code} || {vendor.vendor_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Job Name</label>
                    <select
                      type="text"
                      onChange={(e) => setJobcode(e.target.value)}
                      className="form-control"
                    >
                      <option value=""></option>
                      {jobs.map((job, i) => (
                        <option
                          key={i}
                          value={job.job_code + "/" + job.job_name}
                        >
                          {job.job_code} || {job.job_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">P/O No</label>
                    <input
                      type="text"
                      onChange={(e) => setPo(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Process Name</label>
                    <select
                      type="text"
                      onChange={(e) => setProcesscode(e.target.value)}
                      className="form-control"
                    >
                      <option value=""></option>
                      {processs.map((process, i) => (
                        <option
                          key={i}
                          value={
                            process.process_code + "/" + process.process_name
                          }
                        >
                          {process.process_code} || {process.process_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">ItemSearch</label>
                    <input
                      type="text"
                      onChange={(e) => setItemsearch(e.target.value)}
                      className="form-control"
                      onKeyUp={SearchByitem}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Item Name</label>
                    <select
                      type="text"
                      onChange={(e) => setItemcode(e.target.value)}
                      className="form-control"
                    >
                      <option value=""></option>
                      {items.map((item, i) => (
                        <option
                          key={i}
                          value={item.item_code + "/" + item.item_name}
                        >
                          {item.item_code} || {item.item_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Qty.</label>
                    <input
                      type="text"
                      onChange={(e) => setQty(e.target.value)}
                      className="form-control"
                      onKeyPress={getControlNo}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button onClick={SubMit} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
