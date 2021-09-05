import "./viewcustomer.css";

import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import Topbar from "../../componnet/topbar/Topbar";
import Sidebar from "../../componnet/sidebar/Sidebar";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function ViewCustomers() {
  let history = useHistory();

  // let { id } = useParams();

  const [listcustomer, setCustomer] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3001/customers").then((response) => {
      setCustomer(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/customers/byId/${id}`).then(() => {
      history.push("/viewcustomer");
    });
  };

  const custPerPage = 6;
  const pagesVisited = pageNumber * custPerPage;

  const displayCustomers = listcustomer
    .slice(pagesVisited, pagesVisited + custPerPage)
    .map((value, key) => {
      return (
        <tr>
          <td>{value.username}</td>
          <td>{value.firstname}</td>
          <td>{value.email}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(value.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  
  const pageCount = Math.ceil(listcustomer.length / custPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  
  return (
    <div className="fullcontainer">
      <Topbar />
      <div className="containersidebar">
        <Sidebar />

        <div className="listcontainer">
          <div className="userListHead">
            <h3 className="userListHeader">View Customers</h3>
          </div>
          <div className="userList" style={{ height: 400, marginTop: 80 }}>
            {/* <DataGrid className="userListData" rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection /> */}
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Username</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{displayCustomers}</tbody>
            </table>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
