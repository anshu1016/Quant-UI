import "./textCard.css";
export function TextCard() {
  return (
    <div className="textCardContainer">
      <div className="card1">
        <h4>Text Card</h4>
        <h6>This is head card.</h6>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            esse? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="card2">
        <h4>Card Demo</h4>
        <h6>This is demo card.</h6>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            esse? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
