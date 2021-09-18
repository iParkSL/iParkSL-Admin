import "./userList.css";

import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Topbar from "../../componnet/topbar/Topbar";
import Sidebar from "../../componnet/sidebar/Sidebar";
import axios from "axios";
import ReactPaginate from "react-paginate";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { toast } from "react-toastify";

toast.configure();

export default function UserList() {

  const history = useHistory();

  const [listowners, setOwners] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");


  useEffect(() => {
    axios.get("http://localhost:3001/viewowners").then((response) => {
      setOwners(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/viewowners/byId/${id}`).then(() => {
      // setOwners([listowners]);
      const newOwnerList = listowners.filter((owner) => owner.id != id);
      setOwners([...newOwnerList]);
      
      toast.success("Delete Success", {
        autoClose: 2000,
      });
      // history.push("/users");
    });
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = listowners.filter((value) => {
      return value.firstname.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const ownersPerPage = 6;
  const pagesVisited = pageNumber * ownersPerPage;

  const displayOwners = listowners
    .slice(pagesVisited, pagesVisited + ownersPerPage)
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
  
  const newFilteredData = filteredData.map((value, key) => {
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
  
  const pageCount = Math.ceil(listowners.length / ownersPerPage);

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
            <h3 className="userListHeader">Park Owners</h3>
          </div>
          <div className="search">
            <div className="searchInputs">
              <input
                type="text"
                placeholder="Enter Name"
                value={wordEntered}
                onChange={handleFilter}
              />
              <div className="searchIcon">
                {filteredData.length === 0 ? (
                  <SearchIcon />
                ) : (
                  <CloseIcon id="clearBtn" onClick={clearInput} />
                )}
              </div>
            </div>
          </div>
          <div className="userList" style={{ height: 400, marginTop: 20 }}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Username</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {" "}
                {filteredData.length === 0 ? displayOwners : newFilteredData}
              </tbody>
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
