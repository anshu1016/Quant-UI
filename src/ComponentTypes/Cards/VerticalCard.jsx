import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { VerticalCardCode } from "../codeComponents/CardsCode/VerticalCardCode";

export default function VerticalCard() {
  return (
    <div className="avatarContainer">
      <div className="content">
        <h3>Examples of Text Card</h3>
        <p>
          We have many cards such as Card with text, card with image, card with
          overlay and also we have some of cards for products.
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          <VerticalCardCode />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522card%2520socialMediaCard%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253EPost%2520Title%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253ESome%2520content%2520of%2520the%2520post...%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fi.pinimg.com%252F564x%252Fe2%252Ff8%252F21%252Fe2f821c9fbb3a8d23b2918ebeb8cd06f.jpg%2522%2520alt%253D%2522Post%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522actions%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522buttons%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%252F*%2520You%2520can%2520repurpose%2520the%2520buttons%2520for%2520some%2520other%2520actions%2520or%2520replace%2520with%2520icons%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253EFollow%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%253EMore%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522icons%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E%25F0%259F%2594%2597%253C%252Fspan%253E%2520%257B%252F*%2520Share%2520icon%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E%25E2%259D%25A4%25EF%25B8%258F%253C%252Fspan%253E%2520%257B%252F*%2520Like%2520icon%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E%25F0%259F%2592%25AC%253C%252Fspan%253E%2520%257B%252F*%2520Comment%2520icon%2520*%252F%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
