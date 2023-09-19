import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { TextColorCode } from "../codeComponents/TextCode/TextColorCode";

export default function TextColor() {
  return (
    <div className="avatarContainer">
      <div className="content">
        <h3>Examples of Text Color</h3>
        <p>We have some of text in different color for different use.</p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          <TextColorCode />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%253Cp%2520class%253D%2522paragraph%2520primary-text%2522%253EThis%2520is%2520primary%2520Text%253C%252Fp%253E%250A%253Cp%2520class%253D%2522paragraph%2520secondary-text%2522%253EThis%2520is%2520secondary%2520Text%253C%252Fp%253E%250A%253Cp%2520class%253D%2522paragraph%2520grey-text%2522%253EThis%2520is%2520grey%2520Text%253C%252Fp%253E&tb="
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
