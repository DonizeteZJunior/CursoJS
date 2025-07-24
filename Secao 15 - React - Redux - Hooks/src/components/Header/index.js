import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt, FaCircle, FaPowerOff } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as actions from '../../store/modules/auth/actions';
import historico from '../../services/historico';
import { Nav } from "./styled";

export default function Header(){
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleLogout = e => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    historico.push('/');
  };

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24}/>
      </Link>
      <Link to="/registro">
        <FaUserAlt size={24}/>
      </Link>
      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/login">
          <FaPowerOff size={24}/>
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={24}/>
        </Link>
      )}

      {isLoggedIn && <FaCircle size={24} color="#66ff33" />}
    </Nav>
  );
}