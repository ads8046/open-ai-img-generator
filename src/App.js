
const App = () => {
  // const surpriseOptions = [
  //     'A blue ostrich eating melon',
  //     'An ant drinking apple juice',
  //     'A pineapple drinking lemonade on a beach'
  // ]

  return (
    <div className="App">

      <section className={"search-section"}>
        <p>Start with a detailed description
          <span className={"surprise"}>Surprise me!</span>
        </p>
        <div className={"input-container"}>
          <input
              placeholder={"An impressionist oil painting of a sunflower in a violet vase..."}
          />
          <button>Generate</button>
        </div>
      </section>

      <section className={"image-section"}></section>

    </div>
  );
}

export default App;
