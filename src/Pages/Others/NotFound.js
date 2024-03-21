
import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return  <>
  <h1>404 NotFound</h1>
  <Link to="/signin">go to back</Link>
  </>;
}

export default NotFound