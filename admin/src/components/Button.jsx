import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = ({label,onClick,route}) => {
  return (
    <StyledWrapper>
      <Link to={route}>
        <button onClick={onClick} id="bottone1">
          <strong>{label}</strong>
        </button>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #bottone1 {
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 10px;
    padding-top: 10px;
    border-radius: 9px;
    background: #d5f365;
    border: none;
    font-family: inherit;
    text-align: center;
    cursor: pointer;
    transition: 0.4s;
  }

  #bottone1:hover {
    box-shadow: 7px 5px 56px -14px #c3d900;
  }

  #bottone1:active {
    transform: scale(0.97);
    box-shadow: 7px 5px 56px -10px #c3d900;
  }
`;

export default Button;
