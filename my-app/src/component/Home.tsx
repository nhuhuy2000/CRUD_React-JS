import React, { FC, useState, useEffect, ReactNode } from 'react';
import { TableContainer, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TableHead, Table, TableRow, TableCell, TableBody, Button, TextField } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import AddIcon from '@mui/icons-material/Add';
import Checkbox from '@mui/material/Checkbox';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import './css/home.css';
import { User } from '../redux/contant/types';
import { useDispatch, useSelector } from 'react-redux';
// interface IPROPS {
//   dataGet: Type[];
//   isLoading: boolean;
//   isError: boolean;
// }
import { listUser, viewUser } from '../redux/actions/listAction';
import { RootState } from '../redux/store';
import { deleteUser } from './../redux/actions/listAction';
interface IPROPS {
  user: User[];
  loading: boolean;
  error: boolean;
}

const Home: FC = () => {
  const userList = useSelector((state: RootState) => state.allUser.userList);
  const loading = useSelector((state: RootState) => state.allUser.loading);
  const error = useSelector((state: RootState) => state.allUser.error);
  // const dataDelete = (id: number) => {
  //   axios
  //     .delete(`http://localhost:8080/customers/delete/${id}`)
  //     .then((d) => {
  //       console.log(d);
  //     })
  //     .catch((err) => alert(err));
  // };
  // const handleOnDelete = (id: number) => {
  //   dataDelete(id);
  //   // let data : Type[]  = {
  //   //   name,
  //   //   dob,
  //   //   age
  //   // }
  //   // console.log(data);
  // };
  const [searchItem, setSearchItem] = useState('');

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  // const pageCount = Math.ceil(dataGet.length / usersPerPage);
  const [pageCount, setPageCount] = useState(Math.ceil(userList.length / usersPerPage));
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUser());
  }, []);
  const [displayUsers, setDisplayUsers] = useState<ReactNode>(<></>);
  console.log(userList);
  useEffect(() => {
    setDisplayUsers(
      userList
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .filter((val) => {
          if (searchItem === '') {
            return val;
          } else if (val.name.toLowerCase().includes(searchItem.toLowerCase())) {
            return val;
          }
        })
        .map((item) => {
          return (
            <>
              <TableRow key={item.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.dob}</TableCell>
                <TableCell>{item.name}</TableCell>

                <Link to={`/update/${item.id}`}>
                  <Button
                    variant="contained"
                    // onClick={() => {
                    //   dispatch(viewUser(item.id!));
                    // }}
                    endIcon={<UpdateIcon />}
                  >
                    Update
                  </Button>
                </Link>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(deleteUser(item.id!));
                  }}
                >
                  Delete
                </Button>
              </TableRow>
            </>
          );
        })
    );
  }, [userList, searchItem, pagesVisited]);

  return (
    <div>
      <Typography variant="h1">CRUD User</Typography>
      <Link to="/add">
        {' '}
        <Button variant="outlined" startIcon={<AddIcon />}>
          ADD
        </Button>
      </Link>
      <TextField
        variant="outlined"
        label="Search"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />{' '}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Date of birth</TableCell>

              <TableCell>Name</TableCell>

              <TableCell>Update</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {error === false &&
              loading === false &&
              userList &&
              userList.length > 0 &&
              displayUsers}

            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={'paginationBttns'}
              previousLinkClassName={'previousBttn'}
              nextLinkClassName={'nextBttn'}
              disabledClassName={'paginationDisabled'}
              activeClassName={'paginationActive'}
              pageRangeDisplayed={5}
              marginPagesDisplayed={0}
            />
            {loading === true && <tr> Loading ...</tr>}
            {error === true && <tr> Some thing wrong...</tr>}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Pagination dataGet={dataGet} /> */}
    </div>
  );
};

export default Home;
