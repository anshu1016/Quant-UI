import { useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import "./buttons.css";
import { ButtonCode } from "../codeComponents/ButtonCode/ButtonCode";
export default function Buttons() {
  const iframeRef = useRef(null); // reference to iframe

  return (
    <div className="avatarContainer">
      <div className="intro">
        <h3>Buttons</h3>
        <p>
          Buttons are very use for website. It is also know as Call to action.
          We have different types of buttons. It is use, when you want your
          users click on Call to action.
        </p>
      </div>
      <div className="content">
        <h3>Examples of Image Avatar</h3>
        <p>
          We have different types of Button as mentioned below. Buttons for
          primary uses and Secondary uses. Also we have some floating Buttons.
          According to your needs, You can use these classes in your button for
          example.<span>btn-primary</span> for Primary button,{" "}
          <span> btn-secondary</span> for Secondary Buttons, etc as mentioned
          below.
        </p>
      </div>
      <div className="outputBlock">
        <div className="buttonImage">
          <ButtonCode />
        </div>
      </div>
      <div className="codeText">
        <div className="icons">
          <div className="github">
            <AiFillGithub />
          </div>
          <div className="docs">
            {" "}
            <BiWorld />
          </div>
        </div>
        <div className="code">
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2520%2509%2520%2520%253Cdiv%2520className%253D%2522button%2520primary%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253EPrimary%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522button%2520secondary%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253EPrimary%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522button%2520outline%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253EPrimary%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522button%2520link%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253EPrimary%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522button%2520%2520blueColor%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253ECart%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522button%2520greenColor%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253ESuccess%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522button%2520redColor%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253EWarning%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522button%2520primary%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CMdGroupAdd%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522button%2520primary%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CAiFillCamera%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522button%2520primary%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CBsFillChatLeftDotsFill%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522button%2520redColor%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253CMdDoNotDisturbOn%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
