import React, { useState, useRef } from "react";
import "./report.css";
import Topbar from "../../componnet/topbar/Topbar";
import Sidebar from "../../componnet/sidebar/Sidebar";
import axios from "axios";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
// import { saveAs } from 'file-saver';

function ReportOwner() {
  const [reportState, setReportState] = useState("");
  const [getItems, setGetItems] = useState([]);
  const [show, setShow] = useState(false);
  const [showbtn, setShowBtn] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToData] = useState("");

  const container = useRef(null);
  const pdfExportComponent = React.useRef(null);

  const handleDownload = (e) => {
    const data = { fromDate: fromDate, toDate: toDate };
    // e.preventDefault();
    // if (reportState === 1) {
    axios
      .post(`http://localhost:3001/${reportState}`, data)
      .then((response) => {
        // const name = response.data.firstname;
        // console.log(response.data[0].username);
        setGetItems(response.data);
        setShow(true);
        setShowBtn(true);

        console.log(response.data);
        // axios.post("http://localhost:3001/generatereport/create-pdf", response.data).then(() => {
        //   axios.get('http://localhost:3001/generatereport/fetch-pdf', { responseType: 'blob' }).then((res) => {
        //     const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        //     saveAs(pdfBlob, 'newPdf.pdf');
        //   });
        // });
      });

    // }
  };
  const exportPDFWithMethod = () => {
    let element = container.current || document.body;
    savePDF(element, {
      paperSize: "auto",
      margin: 40,
      fontSize: 14,
      fileName: `Report for ${new Date().getFullYear()}`,
    });
  };
  // const exportPDFWithComponent = () => {
  //   if (pdfExportComponent.current) {
  //     pdfExportComponent.current.save();
  //   }
  // };
  return (
    <div className="fullcontainer">
      <Topbar />
      <div className="containersidebar">
        <Sidebar />

        <div className="reportContainer">
          <div className="titleContainer">
            <h2 className="userTitle">Reports</h2>
            {/* {fromDate} */}
          </div>
          <div className="selectContainer">
            <select
              className="custom-select"
              aria-label="Default select example"
              onChange={(e) => {
                setReportState(e.target.value);
              }}
            >
              <option selected disabled>
                Select Report Type
              </option>
              {/* <option value="reportreceivedpayments">
                Recived Payment List
              </option> */}
              <option value="reportviewowners">Park Owners</option>
              {/* <option value="reportcustomers">Customers</option> */}
            </select>

            <label className="label">From</label>
            <input
              type="Date"
              name="name"
              className="input"
              onChange={(e) => setFromDate(e.target.value)}
            />

            <label className="label">To</label>
            <input
              type="Date"
              name="name"
              className="input"
              onChange={(e) => setToData(e.target.value)}
            />
            {/* {toDate} */}
          </div>
          <div className="buttonContainer">
            <button className="btn btn-warning" onClick={handleDownload}>
              Genereate
            </button>
            {showbtn ? (
              <div>
                {" "}
                <p>Genereated Success</p>
                <br />
                <button
                  className="btn btn-success"
                  onClick={exportPDFWithMethod}
                >
                  Download
                </button>
              </div>
            ) : null}
          </div>
          <div className="generated-file">
            {show ? (
              <PDFExport
                ref={pdfExportComponent}
                paperSize="auto"
                margin={40}
                fileName={`Report for ${new Date().getFullYear()}${reportState}`}
                author="iParkSL Team"
              >
                <div className="tableContainer" ref={container}>
                  <div className="reportHeading">
                                      <h3>Park Owners Registered {fromDate} to { toDate}</h3>
                  </div>
                  <div className="reportTable">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Username</th>
                          <th scope="col">First Name</th>
                          <th scope="col">Email</th>
                          {/* <th scope="col">Address Line 1</th>
                          <th scope="col">Address Line 2</th>
                          <th scope="col">Phone Number</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {getItems.map((value, key) => {
                          return (
                            <tr>
                              <td>{value.username}</td>
                              <td>{value.firstname}</td>
                              <td>{value.email}</td>
                              {/* <td>{value.address_line1}</td>
                              <td>{value.address_line2}</td>
                              <td>{value.phonenumber}</td> */}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </PDFExport>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportOwner;
