import './viewcustomer.css';
// import { DataGrid } from '@material-ui/data-grid';
// import { getDefaultNormalizer } from '@testing-library/react';
// import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
// import {customerRows} from '../../dummyData';
// import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
import Topbar from '../../componnet/topbar/Topbar';
import Sidebar from '../../componnet/sidebar/Sidebar';
import axios from 'axios';


export default function ViewCustomers() {

  // let { id } = useParams();

  const [listcustomer, setCustomer] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/customers").then((response) => {
      setCustomer(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/customers/byId/${id}`);
  };

  // const [data, setData] = useState(customerRows);

  // const handleDelete = (id)=>{
  //   setData(data.filter(item=>item.id !== id));
  // }

  // const columns = [
  //   { field: 'id', headerName: 'ID', width: 100 },
  //   { field: 'user', headerName: 'User', width: 180, renderCell: (params)=>{
  //       return (
  //         <div className="userListUser">
  //           <img className="userListImg" src={params.row.avatar}/>
  //           {params.row.username}
  //         </div>
  //       )
  //   } },
  //   { field: 'email', headerName: 'Email', width: 180 },
  //   { field: 'date', headerName: 'Last Used Date', width: 150},
  //   {
  //     field: 'action',
  //     headerName: 'Actions',
  //     width: 150,
  //     renderCell: (params)=>{
  //       return(
  //         <>
  //         {/* <Link to={"/user/"+params.row.id}>
  //           <button className="userListEdit">Edit</button>
  //         </Link> */}
          
  //         <DeleteOutlineIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
  //         </>
  //       )
  //     }
  //   },
    
  // ];
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
                <tbody>
                  {listcustomer.map((value, key) => {
                    return (
                      <tr>
                        <td>{value.username}</td>
                        <td>{value.firstname}</td>
                        <td>{value.email}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={()=>handleDelete(value.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* <div className="userList" style={{ height: 400, marginTop: 80}}>
            <DataGrid className="userListData" rows={data} disableSelectionOnClick columns={columns} pageSize={5} checkboxSelection />

        </div> */}
          </div>
        </div>
      </div>
    );
}
