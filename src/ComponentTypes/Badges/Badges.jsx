import { useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import BadgeCode from "../codeComponents/BadgesCode/BadgeCode";

export function Badges() {
  const iframeRef = useRef(null); // reference to iframe

  return (
    <div className="avatarContainer">
      <div className="intro">
        <h3>Badges</h3>
        <p>
          Badges are use for user status. (such as online and offline status).
          To show notification count user.
        </p>
      </div>
      <div className="content">
        <h3>Examples of Badges</h3>
        <p>
          Badges are available in four different types (
          <span>
            status-online, status-offline, status-away and status-disturb
          </span>{" "}
          )These are the classes you have to add. and also, You can use Badges
          on icon. You have to use these class as mentioned below.
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          <BadgeCode />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2520%253Cdiv%2520className%253D%2522badge%2520badge-large%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%257BbigTeddy%257D%2520alt%253D%2522XXLIMAGE%2522%2520className%253D%2522imageB%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522tag%2520xxlSize%2520green%2522%253E%253C%252Fdiv%253E%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%253C%252Fdiv%253E%250A%250A%250A%2520%253Cdiv%2520className%253D%2522badge%2520badge-xl%2522%253E%250A%2520%2520%2520%253Cimg%2520src%253D%257BXLimage%257D%2520alt%253D%2522XLIMAGE%2522%2520className%253D%2522imageB%2522%2520%252F%253E%250A%2520%2520%2520%253Cdiv%2520className%253D%2522tag%2520xlsize%2520red%2522%253E%253C%252Fdiv%253E%2520%2520%2520%250A%2520%253C%252Fdiv%253E%250A%250A%250A%2520%253Cdiv%2520className%253D%2522badge%2520badge-l%2522%253E%250A%2520%2520%2520%253Cimg%2520src%253D%257BLSizeImage%257D%2520alt%253D%2522LIMAGE%2522%2520className%253D%2522imageB%2522%2520%252F%253E%250A%2520%2520%2520%253Cdiv%2520className%253D%2522tag%2520lsize%2520yellow%2522%253E%253C%252Fdiv%253E%2520%2520%2520%250A%2520%253C%252Fdiv%253E%250A%250A%250A%2520%253Cdiv%2520className%253D%2522badge%2520badge-m%2522%253E%250A%2520%2520%2520%253Cimg%2520src%253D%257BLSizeImage2%257D%2520alt%253D%2522MIMAGE%2522%2520className%253D%2522imageB%2522%2520%252F%253E%250A%2520%2520%2520%253Cdiv%2520className%253D%2522tag%2520msize%2520green%2520number%2522%253E2%253C%252Fdiv%253E%2520%2520%2520%250A%2520%253C%252Fdiv%253E%250A%250A%250A%2520%253Cdiv%2520className%253D%2522badge%2520badge-small%2522%253E%250A%2520%2520%2520%253Cimg%2520src%253D%257BsmallImage%257D%2520alt%253D%2522smallIMAGE%2522%2520className%253D%2522imageB%2522%2520%252F%253E%250A%2520%2520%2520%253Cdiv%2520className%253D%2522tag%2520ssize%2520red%2520number%2522%253E4%253C%252Fdiv%253E%2520%2520%2520%250A%2520%253C%252Fdiv%253E%250A%250A%250A%2520%253Cdiv%2520className%253D%2522badge%2520badgeIcon%2520%2522%253E%250A%2520%2520%2520%2520%253CAiOutlineShoppingCart%2520className%253D%2522imageB%2522%252F%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522tag%2520Iconsize%2520red%2520number%2522%253E4%253C%252Fdiv%253E%2520%2520%2520%250A%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
