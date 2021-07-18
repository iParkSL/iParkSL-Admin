import './viewcustomer.css';
import { DataGrid } from '@material-ui/data-grid';
// import { getDefaultNormalizer } from '@testing-library/react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {customerRows} from '../../dummyData';
// import { Link } from "react-router-dom";
import { useState } from 'react';


export default function ViewCustomers() {

  const [data, setData] = useState(customerRows);

  const handleDelete = (id)=>{
    setData(data.filter(item=>item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'user', headerName: 'User', width: 180, renderCell: (params)=>{
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar}/>
            {params.row.username}
          </div>
        )
    } },
    { field: 'email', headerName: 'Email', width: 180 },
    { field: 'date', headerName: 'Last Used Date', width: 150},
    {
      field: 'action',
      headerName: 'Actions',
      width: 150,
      renderCell: (params)=>{
        return(
          <>
          {/* <Link to={"/user/"+params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link> */}
          
          <DeleteOutlineIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </>
        )
      }
    },
    
  ];
    return (
      <div className="listcontainer">
        <div className="userListHead">
          <h3 className="userListHeader">View Customers</h3>
        </div>
        <div className="userList" style={{ height: 400, marginTop: 80}}>
            <DataGrid className="userListData" rows={data} disableSelectionOnClick columns={columns} pageSize={5} checkboxSelection />

        </div>
        {/* <div className="userList" style={{ height: 400, marginTop: 80}}>
            <DataGrid className="userListData" rows={data} disableSelectionOnClick columns={columns} pageSize={5} checkboxSelection />

        </div> */}
      </div>
        
    )
}
