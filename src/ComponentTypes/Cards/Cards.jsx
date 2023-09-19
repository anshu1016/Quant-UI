import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { TextCard } from "../codeComponents/CardsCode/TextCard";
// import TextCode from "../../codeComponents/TextCode/TextCode";

export default function Cards() {
  return (
    <div className="avatarContainer">
      <div className="intro">
        <h3>Cards</h3>
        <p>
          Card are use to show collective data which mean data that are related
          to one particular thing for example any product.
        </p>
      </div>
      <div className="content">
        <h3>Examples of Text Card</h3>
        <p>
          We have many cards such as Card with text, card with image, card with
          overlay and also we have some of cards for products.
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          <TextCard />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2520%253Cdiv%2520className%253D%2522card1%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253EText%2520Card%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch6%253EThis%2520is%2520head%2520card.%253C%252Fh6%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522text%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Rerum%252C%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520esse%253F%2520Lorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%253C%252Fdiv%253E"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
