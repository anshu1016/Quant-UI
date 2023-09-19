import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { ProductCardCode } from "../codeComponents/CardsCode/ProductCardCode";

export default function ProductCard() {
  return (
    <div className="avatarContainer">
      <div className="content">
        <h3>Example Of Card With Badge</h3>
        <p>
          We have Badge with vertical card. You can use this card for your
          products.
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          <ProductCardCode />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2520%253Cdiv%2520className%253D%2522productCard%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badgeContainer%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522discountBadge%2522%253E25%2525%2520Off%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522wishlistBadge%2522%253E%25E2%2599%25A5%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fcdn.vectorstock.com%252Fi%252Fpreview-1x%252F71%252F69%252Fpressure-cooker-vector-3817169.jpg%2522%2520%2509%2509%2509%2509%2509%2509alt%253D%2522Product%2522%2520className%253D%2522productImage%2522%252F%253E%250A%2520%2520%2520%2520%2520%2520%253Ch4%2520className%253D%2522productName%2522%253EElegant%2520Watch%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522productDetails%2522%253EExquisite%2520craftsmanship%252C%2520reliable%2520quality%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522productPrice%2522%253E%2524199%2520%253Cspan%2520className%253D%2522oldPrice%2522%253E%2524250%253C%252Fspan%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522addToCart%2522%253EAdd%2520to%2520Cart%253C%252Fbutton%253E%250A%253C%252Fdiv%253E&tb="
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
