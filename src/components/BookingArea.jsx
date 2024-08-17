import Card from "./Card";

function BookingArea() {
  return (
    <div className="bookingArea">
      <Card>
        <h3>1. Select Date, Language & Time Slots</h3>
        <div className="group">
          <h4>Select Date</h4>
          <div className="sub-group">
            <span>Tomorrow</span>
            <div className="date-box">
              <div className="month">Aug</div>
              <div className="date">18</div>
              <div className="day">Sun</div>
            </div>
          </div>
        </div>
        <div className="group">
          <h4>Select Cinemas</h4>
          <div className="sub-group">
            <div className="buttons">
              <button>All</button>
              <button>Civil Mall</button>
              <button>Labim Mall</button>
            </div>
          </div>
        </div>
        <div className="group">
          <h4>Select Language</h4>
          <div className="sub-group">
            <div className="buttons">
              <button>All</button>
              <button>Nepali</button>
            </div>
          </div>
        </div>
        <div className="group">
          <div className="show-slots">
            <div className="cinemas">Civil Mall</div>
            <div className="slot">11:15</div>
            <div className="slot">11:15</div>
            <div className="slot">11:15</div>
          </div>
          <div className="show-slots">
            <div className="cinemas">City Square Mall</div>
            <div className="slot">11:15</div>
          </div>
          <div className="show-slots">
            <div className="cinemas">Labim Mall</div>
            <div className="slot">11:15</div>
          </div>
        </div>
      </Card>
      <Card>
        <h3>2. Pick Seats | Gharjwai</h3>
      </Card>
    </div>
  );
}
export default BookingArea;
