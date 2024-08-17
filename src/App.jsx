import "./App.css";
import BookingArea from "./components/BookingArea";
import Card from "./components/Card";
import DetailsArea from "./components/DetailsArea";

function App() {
  return (
    <div className="wrapper">
      <DetailsArea />
      <BookingArea />
    </div>
  );
}

export default App;
