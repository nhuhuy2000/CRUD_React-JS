import React, { FC, FormEvent, useState, useEffect } from 'react';
import './css/add.css';
import axios from 'axios';
import useAxios from '../api/FetchDataApi';
import { useParams } from 'react-router';
import { updateUser } from '../redux/actions/listAction';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { User } from '../redux/contant/types';
import { viewUser } from '../redux/api/api';

interface IPROPS {
  addUser(name: string, dob: string, age: string): void;
}

const Update = () => {
  const { id } = useParams();

  const userList = useSelector((state: RootState) => state.allUser.userList);
  // console.log(userList);
  const loading = useSelector((state: RootState) => state.allUser.loading);
  const error = useSelector((state: RootState) => state.allUser.error);
  // console.log('view user:', userList);

  const [user, setUser] = useState<User>({
    name: '',
    dob: '',
    age: '',
  });

  useEffect(() => {
    console.log(id);
    const oldUser = userList.find((item) => item.id === +id!);
    if (oldUser) {
      console.log('UPdate');
      setUser(oldUser);
    }
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);
  // const getUser = dataGet.filter((item) => item.id === id);
  // console.log(id);
  // console.log(getUser);
  // const user = userList[0];
  // console.log('dataGet:', dataGet);
  // const userView = userList.filter((user) => user.id === id);
  // console.log('userView:', userView);
  //   const handleOnsubmit = (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     addUser(name, dob, age);
  //     setName("");
  //     setDob("");
  //     setAge("");
  //     // let data : Type[]  = {
  //     //   name,
  //     //   dob,
  //     //   age
  //     // }
  //     // console.log(data);
  //     dataPost(name, dob, age);
  //     window.alert("Them thanh cong!");
  //   };
  // const dataUpdate = (id: number, name: string, dob: string, age: string) => {
  //   let data = {
  //     id,
  //     name,
  //     dob,
  //     age,
  //   };
  //   axios
  //     .put(`http://localhost:8080/customers/update/${id}`, data)
  //     .then((d) => {
  //       console.log(d);
  //     })
  //     .catch((err) => alert(err));
  // };

  // const handleOnsubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   dataUpdate(dataGet?.id, dataGet?.name, dataGet?.dob, dataGet?.age);
  //   // let data : Type[]  = {
  //   //   name,
  //   //   dob,
  //   //   age
  //   // }
  //   // console.log(data);
  //   window.alert("Cap nhat thanh cong!");
  // };
  const dispatch = useDispatch();
  // const userView = userList[0];
  // const [name, setName] = useState(userView.name);
  // const [dob, setDob] = useState(userView.dob);
  // const [age, setAge] = useState(userView.age);
  // const [dataGet, setDataGet] = useState<User>();
  // setDataGet(userList[0]);
  return (
    <>
      {/* {console.log(dataGet)}
      {console.log(id)} */}
      <div>
        <form>
          <div className="container">
            <h1>Update User</h1>

            <hr />

            <label htmlFor="email">
              <b>Name</b>
            </label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => {
                let value = e.target.value;
                setUser((prev) => ({ ...prev, name: value }));
              }}
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
              value={user.dob}
              // onChange={(e) => setDob(e.target.value)}
              onChange={(e) => {
                let value = e.target.value;
                setUser((prev) => ({ ...prev, dob: value }));
              }}
            />

            <label htmlFor="psw-repeat">
              <b>Age</b>
            </label>
            <input
              type="text"
              placeholder="Age"
              name="psw-repeat"
              id="psw-repeat"
              // value={age}
              // onChange={(e) => setAge(e.target.value)}
              value={user.age}
              onChange={(e) => {
                let value = e.target.value;
                setUser((prev) => ({ ...prev, age: value }));
              }}
            />
            <hr />

            <button
              type="submit"
              className="registerbtn"
              onClick={(event) => {
                event.preventDefault();
                dispatch(updateUser({ id: +id!, name: user.name, dob: user.dob, age: user.age }));
              }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
