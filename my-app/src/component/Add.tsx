import React, { FC, FormEvent, useState } from "react";
import "./css/add.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUsers } from "../redux/actions/listAction";

interface IPROPS {}
const Add: FC<IPROPS> = () => {
  //     // const submit = (e => {
  //     //     let name = e.target.value;
  //     // }
  //     )
  const [name, setName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [age, setAge] = useState<string>("");
  // const dataPost = (name: string, dob: string, age: string) => {
  //   let data = {
  //     name,
  //     dob,
  //     age,
  //   };
  //   axios
  //     .post("http://localhost:8080/customers/add", data)
  //     .then((d) => {
  //       console.log(d);
  //     })
  //     .catch((err) => alert(err));
  // };
  // const handleOnsubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   addUser(name, dob, age);
  //   setName("");
  //   setDob("");
  //   setAge("");
  //   // let data : Type[]  = {
  //   //   name,
  //   //   dob,
  //   //   age
  //   // }
  //   // console.log(data);
  //   dataPost(name, dob, age);
  //   window.alert("Them thanh cong!");
  // };
  const dispatch = useDispatch();
  return (
    <div>
      <form>
        <div className="container">
          <h1>Add User</h1>

          <hr />

          <label htmlFor="email">
            <b>Name</b>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            name="email"
            id="email"
          />

          <label htmlFor="psw">
            <b>Date of Birth</b>
          </label>
          <input
            type="text"
            placeholder="Date of birth"
            name="Date"
            id="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />

          <label htmlFor="psw-repeat">
            <b>Age</b>
          </label>
          <input
            type="text"
            placeholder="Age"
            name="psw-repeat"
            id="psw-repeat"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <hr />

          <button
            type="submit"
            className="registerbtn"
            onClick={(event) => {
              event.preventDefault();
              dispatch(addUsers({ name, dob, age }));
            }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
