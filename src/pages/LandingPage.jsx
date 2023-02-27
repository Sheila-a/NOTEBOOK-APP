import React, { useState } from "react";
import { CardList } from "../components/CardList/CardList";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import design from "../components/CardList/CardList.module.css";

const LandingPage = () => {
  const [notes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );

  const [searchText, setSearchText] = useState("");
  // ggg

  return (
    <div className={design.container}>
      <Header />
      <Search handleSearchNote={setSearchText} />
      <CardList
        notes={notes.filter((note) =>
          note.title.toLowerCase().includes(searchText)
        )}
      />
    </div>
  );
};

export default LandingPage;
