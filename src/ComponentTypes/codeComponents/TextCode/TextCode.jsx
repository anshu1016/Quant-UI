import "./textCode.css";
export function TextCode() {
  return (
    <div className="textBox">
      <div className="text texth1">
        <h1>
          This is <span>Example</span> of Heading1{" "}
        </h1>
      </div>

      <div className="text texth2">
        <h2>
          This is <span>Example</span> of Heading2{" "}
        </h2>
      </div>

      <div className="text texth3">
        <h3>
          This is <span>Example</span> of Heading3{" "}
        </h3>
      </div>

      <div className="text texth4">
        <h4>
          This is <span>Example</span> of Heading4{" "}
        </h4>
      </div>

      <div className="text texth5">
        <h5>
          This is <span>Example</span> of Heading5{" "}
        </h5>
      </div>

      <div className="text texth6">
        <h6>
          This is <span>Example</span> of Heading6{" "}
        </h6>
      </div>

      <div className="text textP">
        <p>
          This is <span>Example</span> of paragraph.{" "}
        </p>
      </div>

      <div className="text texta">
        <a href="#">
          This is <span>Example</span> of link{" "}
        </a>
      </div>
    </div>
  );
}
