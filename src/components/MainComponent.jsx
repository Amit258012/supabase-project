import FactList from "./FactList";
import CategoryFilter from "./CategoryFilter";

function MainComponent({ facts }) {
  return (
    <>
      <main className="main">
        <CategoryFilter />
        <FactList facts={facts} />
      </main>
    </>
  );
}

export default MainComponent;
