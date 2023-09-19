import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { TextAlignCode } from "../codeComponents/TextCode/TextAlignCode";

export default function TextAlign() {
  return (
    <div className="avatarContainer">
      <div className="content">
        <h3>Examples of Text Alignment</h3>
        <p>
          Alignment use to align your text on web page. Right, Left, And Center.
          Here, You can use these classes to align text text-left, text-center,
          text-right.
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          <TextAlignCode />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2520%2520%253Cdiv%2520className%253D%2522textAlignContainer%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522topleftSide%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522text%2520leftTop%2520%2522%253E%2520Left%2520Top%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522center%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522text%2520center%2520%2522%253E%2520Center%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522rightBottomSide%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522text%2520rightBottom%2520%2522%253E%2520Right%2520Bottom%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%253C%252Fdiv%253E&tb="
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
