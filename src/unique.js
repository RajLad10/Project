import React,{useCallback,useRef} from "react";
import './App.css';

import { NavLink } from "react-router-dom";
import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import newData from "./Data";

import {
  AiFillDelete,
} from "react-icons/ai";

import {
  FiRefreshCcw,
} from "react-icons/fi";

export default function Delayed() 
{
  const gridRef = useRef();

  const BtnDelete = (event) =>{
    const btn=()=>
    {
      let data=event.api.getSelectedRows();
      
      alert("Data deleted");
      console.log(data); 
    }; 

    const btn1=()=>
    {
      let data=event.api.getSelectedRows();
      alert("Data Reloaded");
      console.log(data)
    }; 
    return(
          <span>
              <button onClick={() => btn()}><AiFillDelete/></button>
              <button onClick={() => btn1()}> <FiRefreshCcw/> </button>
          </span>
      );
  };

  const columnDefs =[

    {headerName:"Id",field:'Id',lockVisible:true,},

    {headerName:"Topic",field:'Topic',lockVisible:true, checkboxSelection:true,cellRenderer:elink,filter: 'agSetColumnFilter', },

    {headerName:"Link_Name",field:'Link_Name',sortable:true,lockVisible:true, },

    {headerName:"Time",field:'Time',sortable:true,lockVisible:true, },

    {headerName:"Action",field:'Action',cellRendererFramework: BtnDelete,sortable:true,lockVisible:true, },
  
  ];

  const DefaultColDef = {
    sortable:true,
    filter:true,
    resizable: true,
    minWidth:100,
    flex:1,
    enableValue:true,
  }

  function elink(props){
    return(
    <NavLink to="/detail">{props.value}</NavLink>)
 }

  let getData = (from, to) =>
  {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (from > 50) {
                reject(false);
            } else {
                resolve(newData.slice(from,to));
            }
        }, 500);
    });
  }

  let gridData = [];
  let isAllDataFetched = false;

  const datasource = {

    getRows(params) {

      console.log(JSON.stringify(params.startRow+" to "+params.endRow));

      const { startRow, endRow } = params

      // let url = `http://localhost:8080/delayed?`

   

      // url += `_start=${startRow}&_end=${endRow}`

      // //fetch(url)

      getData(startRow, endRow)

        .then(response => {

          isAllDataFetched = response.length!==25;

          gridData = gridData.concat(response);

          params.successCallback(gridData, isAllDataFetched ? gridData.length: -1);

        })

        .catch(error => {

          console.error(error);

          params.failCallback();

        })

    }

  };

  const onGridReady = (params) => {   
    params.api.setDatasource(datasource);
  }

  

      const components={
        loading:(params)=>{
          if(params.value!==undefined){
            return params.value
          }else{
            return "Loading......"
          }
        }
      }

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById('filter-text-box').value
    );
  }, []);

  return (
    <>
      <div className="block">
        Unique
      </div>
      <div>
        <div className="searchbox">
          <input
            type="text"
            id="filter-text-box"
            placeholder="Filter1..."
            onInput={onFilterTextBoxChanged}
          />

          <input
            type="text"
            id="filter-text-box1"
            placeholder="Filter2..."
            onInput={onFilterTextBoxChanged}
          />
        </div>
        
      </div>

      <div style={{width: '100%', height:'100%'}}>
      <div className="">

        <div className="ag-theme-alpine" style={{'height':500}}>

        <AgGridReact
          ref={gridRef}
          // rowData={getData}
          columnDefs={columnDefs}
          rowSelection={'multiple'}
          rowMultiSelectWithClick={true} 
          //suppressRowClickSelection={true}
          defaultColDef = {DefaultColDef}

          serverSideInfiniteScrolling = {true}
          cacheBlockSize = {25}
          onGridReady={onGridReady}  
          components={components} 
          rowModelType={"infinite"}
          cacheQuickFilter={true}
          serverSideFilterOnServer={true}
        />
        </div>
      </div>
      </div>
    
    </>
  );
}
