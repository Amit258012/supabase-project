import FactList from "./FactList";
import CategoryFilter from "./CategoryFilter";
import Loader from "./Loader";

function MainComponent({ facts, isLoading, setCurCategory, setFacts }) {
  return (
    <>
      <main className="main">
        <CategoryFilter setCurCategory={setCurCategory} />
        {isLoading ? (
          <Loader />
        ) : (
          <FactList facts={facts} setFacts={setFacts} />
        )}
        <a href="https://github.com/Amit258012" className="footer">
          Amit Jahagirdar
        </a>
      </main>
    </>
  );
}

export default MainComponent;
