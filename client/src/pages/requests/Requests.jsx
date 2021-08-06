import './requests.css';
import { DataGrid } from '@material-ui/data-grid';
// import { getDefaultNormalizer } from '@testing-library/react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {userRows} from '../../dummyData';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Topbar from '../../componnet/topbar/Topbar';
import Sidebar from '../../componnet/sidebar/Sidebar';


export default function Requests() {

  const [data, setData] = useState(userRows);

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
    {
      field: 'action',
      headerName: 'Actions',
      width: 150,
      renderCell: (params)=>{
        return(
          <>
          <Link to={"/parkownerrequest/"+params.row.id}>
            <button className="userListEdit">View</button>
          </Link>
          
          {/* <DeleteOutlineIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)}/> */}
          </>
        )
      }
    },
    
  ];
    return (
      
      <div className="fullcontainer">
      <Topbar/>
      <div className="containersidebar">
          <Sidebar/>
      
          <div className="listcontainer">
        <div className="userListHead">
          <h3 className="userListHeader">Requests</h3>
        </div>
        <div className="userList" style={{ height: 400, marginTop: 80}}>
            <DataGrid className="userListData" rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />

        </div>
      </div>
      </div>
      </div>
        
    )
}
