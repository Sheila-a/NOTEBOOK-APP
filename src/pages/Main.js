// import StyledBtn from "../components/Button/Button.js";
// import Card from "../components/Card/Card.js";
// import { Burger } from "../components/Hamburger/Hamburger.js";
import MainSection from "../layouts/MainSection/MainSection.jsx";
import Sidebar from "../layouts/Sidebar/Sidebar.jsx";

export default function Main(props) {
  return (
    <div style={{ display: "flex" }}>
      {/* <h1>welcome</h1>
      <StyledBtn type="submit" btnName={"Welcome"} />
      <Burger />
      <Card /> */}
      <Sidebar />
      <MainSection />
    </div>
  );
}
