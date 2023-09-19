import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { GridCode } from "../codeComponents/GridCode/GridCode";

export default function Grid() {
  return (
    <div className="avatarContainer">
      <div className="intro">
        <h3>Grid</h3>
        <p>
          We use grid system to helps align page elements based on sequenced
          columns and rows.
        </p>
      </div>
      <div className="content">
        <h3>Examples of Grid</h3>
        <p>
          We have (1x2) grid. To use this you have to add this class to
          grid-2-wrapper in parent container and child items should contain with
          this class grid-item.
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          <GridCode />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%253Cdiv%2520class%253D%2522grid-wrapper%2522%253E%250A%2520%2520%2520%253Cdiv%2520class%253D%2522grid-item%2520grid-item1%2520lg-rounded%2522%253E%250A%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fassets%252FPlain1.webp%2522%2520class%253D%2522grid-img%2520responsive-images%2522%253E%250A%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522grid-item%2520grid-item2%2520lg-rounded%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522.%252Fassets%252FPlain2.webp%2522%2520class%253D%2522grid-img%2520responsive-images%2522%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
