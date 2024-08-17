import { useState } from "react";

function DetailsArea() {
  const [viewMore, setViewLess] = useState(false);
  function showLess() {
    setViewLess(!viewMore);
  }
  return (
    <div className="detailsArea">
      <img src="./images/kalki.png" alt="" />
      <span className="nowShowing">Now showing</span>
      <h2>
        Gharjwai <span>(2024)</span>
      </h2>
      <div className="tags">
        <div className="tag">127 mins</div>
        <div className="tag">U</div>
      </div>

      <div className={`details${viewMore ? " full" : ""}`}>
        {" "}
        {/* utilize template literal to combine conditional classes */}
        <p>
          The story of the movie revolves around Soro (Dayahang Rai), who upon
          returning to his village in Taksera (Rukum) as a school teacher after
          the end pf the civil war falls in love with a village girl Binjuri
          (Miruna Magar). Soro wants to marry Binjuri but her father wants his
          son-in-law to live with them in his house as a gharjwain after the
          marriage. As Soro is the only son of his parenys he cann't leave his
          father and mother to live with Binjuri and her father. Binjuri also
          cann't go against her father. Now to persuade his father-in-law Soro
          must perform different tasks assigned by him as a test of skills.
        </p>
        <p>
          <strong>LANGUAGE: </strong>Language: Nepali
        </p>
        <p>
          <strong>GENRE: </strong>Social Drama
        </p>
        <p>
          <strong>CAST: </strong>Dayahang Rai, Miruna Magar, Shishir Bangdel
        </p>
        <p>
          <strong>DIRECTOR: </strong>Anil Budha Magar
        </p>
      </div>
      <button onClick={showLess}>
        View {viewMore ? "Less" : "More"} Details
      </button>
    </div>
  );
}
export default DetailsArea;
