import "./App.css";
import Card from "./components/Card";
import DetailsArea from "./components/DetailsArea";

function App() {
  return (
    <>
      <DetailsArea />
      <Card>
        <h3>1. Select Date, Language & Time Slots</h3>
        <div className="group">
          <h4>Select Date</h4>
          <div className="date-group">
            <span>Tomorrow</span>
            <div className="date-box">
              <div className="month">Aug</div>
              <div className="date">18</div>
              <div className="day">Sun</div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default App;
