import {useState} from "react";




const App = () => {
  // const surpriseOptions = [
  //     'A blue ostrich eating melon',
  //     'An ant drinking apple juice',
  //     'A pineapple drinking lemonade on a beach'
  // ]
    const [images, setImages] = useState(null);
    const [value, setValue] = useState(null);

    const getImages = async () => {
        const options = {
            method: "POST",
            body: JSON.stringify({
                message: "test"
            }),
            headers: {
                "Content-type": "application/json"
            }
        }
        try {
            const resp = await fetch("http://localhost:8000/images", options);
            const data = await resp.json();
            setImages(data);
        } catch (error) {
            console.log(error);
        }
    }

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
              <button onClick={getImages}>Generate</button>
            </div>
          </section>

          <section className={"image-section"}>
              {images?.map((img, _index) =>
                    <img key={_index} src={img.url} alt={`Generated AI pic of ${value}`}/>
              )}
          </section>

        </div>
    );
}

export default App;
