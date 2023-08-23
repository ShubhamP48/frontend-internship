import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../interface/Post";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const SecondPageComponent: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: "userId", headerName: "User ID", flex: 1 },
    { field: "id", headerName: "ID", flex: 1 },
    { field: "title", headerName: "Title", flex: 2 },
    { field: "body", headerName: "Body", flex: 4 },
  ];

 
  const containerStyle = {
    backgroundColor: "lightgray", 
    height: 400,
    width: "50%", 
    margin: "0 auto", 
    padding: "20px", 
  };

  return (
    <div style={containerStyle}>
      <DataGrid
        rows={data}
        columns={columns}
        autoPageSize
        checkboxSelection
        sx={{
          backgroundColor: "lightgray", 
        }}
      />
    </div>
  );
};

export default SecondPageComponent;
