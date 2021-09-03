import './receivedpay.css';
// import { DataGrid } from '@material-ui/data-grid';
// import { getDefaultNormalizer } from '@testing-library/react';
// import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
// import {userpaymentRows} from '../../dummyData';
// import { Link } from "react-router-dom";
// import { useState } from 'react';
import Topbar from '../../componnet/topbar/Topbar';
import Sidebar from '../../componnet/sidebar/Sidebar';
import axios from "axios";
import { useEffect, useState } from 'react';


export default function ReceivedPayment() {

  const [listpayment, setListPayment] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/receivedpayments").then((response) => {
      setListPayment(response.data);
    });
  }, []);

  // const [data, setData] = useState(userpaymentRows);

//   const handleDelete = (id)=>{
//     setData(data.filter(item=>item.id !== id));
//   }

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
  //   { field: 'amount', headerName: 'Amount', width: 150}
  //   // {
  //   //   field: 'action',
  //   //   headerName: 'Actions',
  //   //   width: 150,
  //   //   renderCell: (params)=>{
  //   //     return(
  //   //       <>
  //   //       <Link to={"/user/"+params.row.id}>
  //   //         <button className="userListEdit">Edit</button>
  //   //       </Link>
          
  //   //       <DeleteOutlineIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
  //   //       </>
  //   //     )
  //   //   }
  //   // },
    
  // ];
    return (
      <div className="fullcontainer">
        <Topbar />
        <div className="containersidebar">
          <Sidebar />

          <div className="listcontainer">
            <div className="userListHead">
              <h3 className="userListHeader">Received Payments</h3>
            </div>
            <div className="userList" style={{ height: 400, marginTop: 80 }}>
              {/* <DataGrid className="userListData" rows={data} disableSelectionOnClick columns={columns} pageSize={5} checkboxSelection /> */}
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Username</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Phone No</th>
                    <th scope="col">Date/Time</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {listpayment.map((value, key) => {
                    return (
                      <tr>
                        <td>{value.username}</td>
                        <td>{value.firstname}</td>
                        <td>{value.phonenumber}</td>
                        <td>{value.createdAt}</td>
                        <td>{value.amount}</td>
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
