import React, { Component } from "react";
import styled from "styled-components";

const UL = styled.div`
  visibility: hidden;

  @media only screen and (max-width: 1246px) {
    visibility: visible;
    display: flex;
    flex-direction: column;
    flex-flow: column nowrap;
    background-color: rgb(186, 209, 226);
    ${"" /* margin-top: 4.5vh; */}
    position: fixed;
    top: 0vh;
    padding: 5vh;
    right: 0;
    height: 100vh;
    width: 30%;
    transition: transform 0.5s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

    p {
      width: 190px;
      font-size: 15px;
    }

    p:hover {
      background: #711a75;
      color: #fff;
    }

    div {
      flex-direction: column;
      text-align: left;
      flex-flow: column nowrap;
    }

    .DList {
      padding-top: 2vh;
      padding-top: 2vh;
    }

    .span {
      margin-left: 2vh;
      margin-top: 0;
      box-shadow: #bae4e0 1.95px 1.95px 2.6px;
    }
  }
  @media screen and (max-width: 428px) {
    margin-top: 2.8vh;

    p {
      width: 52vw;
    }
  }
`;

export default class HangingNav extends Component {
  constructor(props) {
    super(props);
    this.state = { open: props.open };
  }

  render() {
    return (
      <UL open={this.state.open}>
        <h1>Thank you !</h1>
        <h3>For everything, Josh</h3>
      </UL>
    );
  }
}
