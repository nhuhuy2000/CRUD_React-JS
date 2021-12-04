import React, { FC, useState, useEffect } from "react";
import Navigation from "./component/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Home from "./component/Home";
import Pagination from "./component/Pagination";
import Add from "./component/Add";
import Update from "./component/Update";
import useAxios from "./api/FetchDataApi";
import { useSelector, useDispatch } from "react-redux";
import reducer from "./redux/reducer/rootReducer";
import { listUser } from "./redux/actions/listAction";
import { User } from "./redux/contant/types";

interface Type {
  id: number;
  name: string;
  dob: string;
  age: string;
}

const App = () => {
  const dispatch = useDispatch();

  // const { data, isLoading, isError } = useAxios<Type[]>(
  //   "http://localhost:8080/customers/"
  // );
  // const [dataGet, setDataGet] = useState<Type[]>([]);
  // useEffect(() => {
  //   if (data) {
  //     setDataGet(data);
  //   }
  // }, [data]);
  // useEffect(() => {
  //   dispatch(listUser());
  // }, []);
  // const addUser = (name: string, dob: string, age: string): void => {
  //   const dataNew: User = {
  //     id: userList.length < 1 ? 1 : userList.length + 1,
  //     name: name,
  //     dob: dob,
  //     age: age,
  //   };
  //   // setDataGet((prevDataGet: Type[]): Type[] => {
  //   //   return [...prevDataGet, dataNew];
  //   // });
  // };
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
