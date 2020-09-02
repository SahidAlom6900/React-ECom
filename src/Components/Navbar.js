import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "../lam.jpg";
import { ButtonContainer } from "./styledComponent";
import styled from "styled-components";
export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <NavWrapper className="navbar navbar-expand-sm  ">
          <Link to="">
            <img
              src={img}
              alt="logo"
              className="navbar-brand"
              height="50px"
              width="60px"
            />
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="" className="nav-link ml-5">
                product
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-3">
                <i className="fa fa-cart-plus">my cart</i>
              </span>
            </ButtonContainer>
          </Link>
        </NavWrapper>
      </React.Fragment>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainblue);
  .nav-link {
    color: var(--mainwhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
