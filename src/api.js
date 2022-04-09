import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
  },[]);

  return(
    <table style={{ border: '3px solid red' }}>
      <thead>
        <tr>
          <th>Body</th>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {comments.map((value) => {
          return (
            <tr>
              <td>{value.body}</td>
              <td>{value.id}</td>
              <td>{value.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}
export default Api;
