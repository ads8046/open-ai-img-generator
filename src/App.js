import {useState} from "react";


const App = () => {
    const [images, setImages] = useState(null);
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    const getImages = async () => {
        setImages(null);
        if (!value) {
            setError("Please enter a valid search query.");
            return
        }
        const options = {
            method: "POST",
            body: JSON.stringify({
                message: value
            }),
            headers: {
                "Content-type": "application/json"
            }
        }
        try {
            const resp = await fetch("http://localhost:8000/images", options);
            const data = await resp.json();
            console.log(data);
            setImages(data);
        } catch (error) {
            console.log(error);
        }
    }

    const feelingLucky = () => {
        const surpriseOptions = [
            'A blue ostrich eating melon',
            'An ant drinking apple juice',
            'A pineapple drinking lemonade on a beach'
        ]

        setImages(null);
        const randomVal = surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
        setValue(randomVal);
    }

    return (
        <div className="App">
            <h1><span className={"picasso"}>PicassoAI</span> - Image Generator
                <span className={"built-by"}>Built by Atharva Shivankar</span>
            </h1>
          <p className={"project-description"}>
              An OpenAI API / DALL-E 2 Model Experimental Project.
              Not intended for commercial use.
          </p>
          <section className={"search-section"}>
            <p>Enter a detailed description of the image or
              <span className={"surprise"} onClick={feelingLucky}>Feeling Lucky!</span>
            </p>
            <div className={"input-container"}>
              <input
                  value={value}
                  placeholder={"An impressionist oil painting" +
                      " of a sunflower in a violet vase..."}
                  onChange={event => setValue(event.target.value)}
              />
              <button onClick={getImages}>Generate</button>
            </div>
              { error && <p>{error}</p>}
          </section>

          <section className={"image-section"}>
              {images?.map(
                  (img, _index) =>
                    <img key={_index} src={img.url} alt={`Generated AI pic of ${value}`}/>
              )}
          </section>

        </div>
    );
}

export default App;
