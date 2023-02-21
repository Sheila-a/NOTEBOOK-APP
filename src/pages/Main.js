import StyledBtn from "../components/Button/Button.js";
import { Burger } from "../components/Hamburger/Hamburger.js";

export default function Main(props) {
  return (
    <>
      <h1>welcome</h1>
      <StyledBtn type="submit" btnName={"Welcome"} />
      <Burger />
    </>
  );
}
