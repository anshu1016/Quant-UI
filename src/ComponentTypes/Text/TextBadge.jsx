import { useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import "./textBadge.css";
import { TextCode } from "../codeComponents/TextCode/TextCode";
export function TextBadge() {
  return (
    <div className="avatarContainer">
      <div className="intro">
        <h3>Text</h3>
        <p>Text use for heading, link and paragraph text.</p>
      </div>
      <div className="content">
        <h3>Examples of Text Headings</h3>
        <p>
          Even you can use Text Badge. We have text badge according to size
          heading <span>h1 to h6</span> and also for Paragraph size
          <span> p</span> Here, class
          <span>text-h1 to text-h6 and text-p</span>
          applies text sizes. And class{" "}
          <span>
            badge, badge-h1 to badge-h6 and badge-p applies badge styling .
          </span>
          .
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          <TextCode />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2520%2509%2520%2520%253Cdiv%2520className%253D%2522text%2520texth1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253EThis%2520is%2520%253Cspan%253EExample%253C%252Fspan%253E%2520of%2520Heading1%2520%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522text%2520texth2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EThis%2520is%2520%253Cspan%253EExample%253C%252Fspan%253E%2520of%2520Heading2%2520%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522text%2520texth3%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EThis%2520is%2520%253Cspan%253EExample%253C%252Fspan%253E%2520of%2520Heading3%2520%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522text%2520texth4%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253EThis%2520is%2520%253Cspan%253EExample%253C%252Fspan%253E%2520of%2520Heading4%2520%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522text%2520texth5%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch5%253EThis%2520is%2520%253Cspan%253EExample%253C%252Fspan%253E%2520of%2520Heading5%2520%253C%252Fh5%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522text%2520texth6%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch6%253EThis%2520is%2520%253Cspan%253EExample%253C%252Fspan%253E%2520of%2520Heading6%2520%253C%252Fh6%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522text%2520textP%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EThis%2520is%2520%253Cspan%253EExample%253C%252Fspan%253E%2520of%2520paragraph.%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522text%2520texta%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%253EThis%2520is%2520%253Cspan%253EExample%253C%252Fspan%253E%2520of%2520link%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
