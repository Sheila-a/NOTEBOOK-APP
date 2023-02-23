import React, { useState } from "react";
import styled from "styled-components";
import HangingNav from "../HangingNav/HangingNav.js";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  right: 12vh;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  ${"" /* display: none; */}

  @media only screen and (max-width: 1246px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  @media screen and (max-width: 428px) {
    right: 2vw;
  }

  div {
    width: 1.8rem;
    height: 0.2rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(52deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-52deg)" : "rotate(0)")};
    }
  }
`;

export const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger
        open={open}
        onClick={() => setOpen(!open)}
        className="Burger"
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <HangingNav open={open} />
    </>
  );
};

// export class Burger extends React.Component {
//   constructor(open) {
//     super(open);
//     // this.open = open;
//     this.state = {
//       open: false,
//     };

//     this.clickFxn = this.clickFxn.bind(this);
//   }

//   clickFxn = (e) => {
//     this.setState({ open: !this.state.open });
//   };

//   render() {
//     return (
//       <>
//         <StyledBurger
//           open={this.open}
//           onClick={this.clickFxn}
//           // onClick={() => this.setState(!this.open)}
//           className="Burger"
//         >
//           <div />
//           <div />
//           <div />
//         </StyledBurger>
//         <HangingNav open={this.open} />
//       </>
//     );
//   }
// }
