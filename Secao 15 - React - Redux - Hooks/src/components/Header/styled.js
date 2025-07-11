import styled from "styled-components";
import {corPrimaria} from '../../config/colors';

export const Nav = styled.nav`
  background: ${corPrimaria};
  padding:20px;
  display:flex;
  align-items: center;
  justify-content: center;

  a {
    color: #eee;
    margin: 0 10px 0 0;
    font-weight: bold;
  }
`;