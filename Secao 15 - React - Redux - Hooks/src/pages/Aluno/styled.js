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

export const Form = styled.form`
  display: flex;
    flex-direction: column;
    margin-top: 20px;

    label{
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }

    input{
      height: 40px;
      font-size: 18px;
      border: 1px solid #ddd;
      padding: 0 10px;
      border-radius: 4px;
      margin-top: 5px;

      &:focus{
        border: 1px solid ${colors.corPrimaria};
      }
    }
`;

export const Title = styled.h1`
  text-align:center;
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 20px;

  img {
    width:180px;
    height: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #eee;
    background: ${colors.corPrimaria};
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;