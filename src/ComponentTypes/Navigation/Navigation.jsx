import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { NavigationCode } from "../codeComponents/navigationBarCode/NavigationCode";

export default function Navigation() {
  return (
    <div className="avatarContainer">
      <div className="intro">
        <h3>Navigation</h3>
        <p>
          Navigation use to navigate you user. Basically user can get useful
          link quakily form here.
        </p>
      </div>
      <div className="content">
        <h3>Examples of Navigation</h3>
        <p>We have added a basic navigation for small works.</p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          {/* < /> */}
          <NavigationCode />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%253Cdiv%2520class%253D%2522navigation%2520sm-rounded%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%253Cdiv%2520class%253D%2522nav-left%2520logo%2522%253E%250A%2520%2520%2520%2520%2520%2509%253Ch2%2520class%253D%2522nav-logo%2522%253EBinaryUI%253C%252Fh2%253E%250A%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav-center%2520searchbar%2522%253E%250A%2520%2520%2520%2520%2509%253Cinput%2520type%253D%2522search%2522%2520class%253D%2522input%2520input-search%2522%2520placeholder%253D%2522Search%2522%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%250A%2520%2520%253Cdiv%2520class%253D%2522nav-right%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-primary%2520login-button%2520text-md%2522%253ELogin%253C%252Fbutton%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge-container%2520icon-badge%2520%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522badge-icon-number%2520%2520badge-status%2522%253E%25204%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge-container%2520icon-badge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-heart%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522badge-icon-number%2520%2520badge-status%2522%253E%25204%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
