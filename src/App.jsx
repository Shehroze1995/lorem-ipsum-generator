import { useState } from "react";
import data from "./components/data";
import "./index.css";

function App() {
  const [count, setCount] = useState(1);
  const [paragraphs, setParagraphs] = useState([]);

  const showParagraph = (e) => {
    e.preventDefault();
    setParagraphs(data.slice(0, count));
  };

  return (
    <section className="w-[95%] max-w-2xl m-auto flex flex-col items-center py-12">
      <h1 className="text-3xl mb-4 text-center">TIRED OF BORING LOREM IPSUM?</h1>
      <form onSubmit={showParagraph}>
        <label htmlFor="amount">Paragraph:</label>
        <input
          id="amount"
          name="amount"
          type="number"
          value={count}
          min={1}
          max={10}
          onChange={(e) => setCount(e.target.value)}
          className="border-none h-8 w-[3rem] bg-[#0003] text-center rounded outline-none mx-3"
        />
        <button
          type="submit"
          className="bg-purple-400 py-1 px-3 rounded hover:bg-purple-500 hover:text-white"
        >
          Generate
        </button>
      </form>
      <div className="py-8 px-4 flex flex-col gap-8">
        {paragraphs.map((paragraph, index) => {
          return (
            <p key={index}>
              <span className="text-purple-700 font-bold">{index + 1}:</span>{" "}
              <span className="opacity-60">{paragraph}</span>
            </p>
          );
        })}
      </div>
    </section>
  );
}

export default App;
