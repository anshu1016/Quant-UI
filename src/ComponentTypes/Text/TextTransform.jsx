import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { TextTransformCode } from "../codeComponents/TextCode/TextTransformCode";

export default function TextTransform() {
  return (
    <div className="avatarContainer">
      <div className="content">
        <h3>Examples of Text transform</h3>
        <p>
          You can use these classes text-uppercase, text-lowercase,
          text-capitalize for text Uppercaase, Lowercase and Capitalize.
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          <TextTransformCode />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2520%2520%253Cp%2520class%253D%2522paragraph%2520text-uppercase%2522%253EThis%2520is%2520Uppercaase%253C%252Fp%253E%250A%250A%2520%2520%253Cp%2520class%253D%2522paragraph%2520text-lowercase%2522%253EThis%2520is%2520Lowercase%253C%252Fp%253E%250A%250A%2520%2520%253Cp%2520class%253D%2522paragraph%2520text-capitalize%2522%253EThis%2520is%2520Lowercase%253C%252Fp%253E&tb="
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
