import "./style.css";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";
import MainComponent from "./components/MainComponent";
import { useState } from "react";
import { initialFacts } from "./utils/data";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState(initialFacts);
  return (
    <>
      <Header setShowForm={setShowForm} showForm={showForm} />
      {showForm && (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      )}
      <MainComponent facts={facts} />
    </>
  );
};

export default App;
