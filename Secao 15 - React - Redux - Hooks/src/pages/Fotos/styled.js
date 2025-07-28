import styled from "styled-components";
import * as colors from "../../config/colors";

// export const Titulo = styled.h1`
//   background: green;

//   small{
//     font-size: 12pt;
//     margin-left: 15px;
//     color:#999;
//   }
// `;

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label{
    width: 180px;
    height: 180px;
    display: flex;
    background: #ddd;
    align-items: center;
    justify-content: center;
    border: 5px dashed ${colors.corPrimaria};
    margin: 30px auto;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 180px;
      height: 180px;
    }
  }

  input{
    display: none;
  }
`;