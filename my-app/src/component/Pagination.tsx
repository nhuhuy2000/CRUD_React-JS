// import React, { FC, useState, useEffect ,FormEvent, useRef } from "react";
// interface Type {
//   id: number;
//   name: string;
//   dob: string;
//   age: string;
// }
// interface IPROPS {
//   dataGet: Type[];

// }
// const Pagination: FC<IPROPS> = ({ dataGet }) => {

//   const itemsPerPage = 10;
//   const allPages = Math.ceil(dataGet.length / itemsPerPage);

//   const onPageChange = (page: number = 1) => {
//     const startItem = (page - 1) * itemsPerPage;
//     const endItem = page * itemsPerPage;
//     setDisplayedData(dataGet.slice(startItem, endItem))
//   }

//   useEffect(() => {
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     fetchData(url).then(data => setData(data));
//     onPageChange()
//   }, [data.length])

//   return (
//     <div className="main__container">
//       <h1>Pagination</h1>
//       <DataList posts={displayedData} />
//       <Pagination allPagesNumber={allPages} itemsPerPage={10} itemsNumber={data.length} pageChange={onPageChange}/>
//     </div>
//   );
// }

// };
// export default Pagination;
import React from "react";

const Pagination = () => {
  return (
    <div>
      <h1>Welcome Test</h1>
    </div>
  );
};

export default Pagination;
