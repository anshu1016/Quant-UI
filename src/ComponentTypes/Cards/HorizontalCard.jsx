import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { HorizontalProductCard } from "../codeComponents/CardsCode/HorizontalProductCode";

export default function HorizontalCard() {
  return (
    <div className="avatarContainer">
      <div className="content">
        <h3>Examples of Horizontal Card</h3>
        <p>
          Also we have Horizontal card for products which comes with two button.
          One button for Move to cart and other is for add to wishlist.
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          <HorizontalProductCard />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%250A%2520%2520%2520%253Cdiv%2520class%253D%2522images-card%2520horizontal-cart-card%2520%2522%253E%250A%2520%2520%2520%2520%2509%253Cimg%2520class%253D%2522card-img%2522%2520src%253D%2522https%253A%252F%252Fcdn5.vectorstock.com%252Fi%252F1000x1000%252F71%252F69%252Fpressure-cooker-vector-%2509%2509%2509%2509%2509%2509%2509%25093817169.jpg%2522%2520%252F%253E%250A%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%2520class%253D%2522card-title%2522%253EPremium%2520Shirt%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520class%253D%2522card-price%2522%253E%25E2%2582%25B9%25209999%252F-%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-text%2522%253EVisit%2520ten%2520places%2520on%2520our%2520planet%2520that%2520are%2520undergoing%2520the%2520biggest%2520changes%2520%2509%2509%2509%2509%2509%2509today.%253C%252Fp%253E%250A%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-footer%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522move-cart-buttons%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-secondary%2520btn-move-cart%2522%253EMove%2520to%2520cart%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-secondary-outline%2520btn-move-cart%2522%253ESave%2520to%2520wishlist%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%250A&tb="
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
