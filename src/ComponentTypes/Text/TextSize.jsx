import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { TextSizeCode } from "../codeComponents/TextCode/TextSizeCode";

export default function TextSize() {
  return (
    <div className="avatarContainer">
      <div className="content">
        <h3>Examples of Text Size</h3>
        <p>
          We have some default sizes for text. Such as Extra large text, Large
          text, Medium text, Small text, Extra small text. Here, You can use
          these classes to your need. text-xl, text-lg, text-md, text-sm,
          text-xm.
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          <TextSizeCode />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2520%2509%2520%2520%253Cp%2520class%253D%2522paragraph%2520text-xl%2522%253EExtra%2520large%2520text%253C%252Fp%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522paragraph%2520text-lg%2522%253ELarge%2520text%253C%252Fp%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522paragraph%2520text-md%2522%253EMedium%2520text%253C%252Fp%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522paragraph%2520text-sm%2522%253ESmall%2520text%253C%252Fp%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522paragraph%2520text-xm%2522%253EExtra%2520small%2520text%253C%252Fp%253E&tb="
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
