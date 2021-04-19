import React,{useState} from "react";
import { dispatch ,useDispatch } from "react-redux";
import Forms from "./form/Form";


function TableList() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  return (
    <>
      <Forms currentId={currentId} setCurrentId={setCurrentId} /> 
    </>
  );
}

export default TableList;
