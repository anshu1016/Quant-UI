import { AiFillGithub } from "react-icons/ai";

import { BiWorld } from "react-icons/bi";
import { LogInCode } from "../codeComponents/InputCode/LogInCode";

export default function Login() {
  return (
    <div className="avatarContainer">
      <div className="content">
        <h3>Example Of Validation With Login</h3>
        <p>
          Also, We have pre-build login component. You can use this in your
          project. Users can login to your website using it.
        </p>
      </div>
      <div className="outputBlock">
        <div className="buttonImage">
          <LogInCode />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%253Cform%2520class%253D%2522form%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522form-header%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ch2%2520class%253D%2522small-heading%2522%253ELogin%253C%252Fh2%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522input-row%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Clabel%2520class%253D%2522input-label%2520form-label%2522%253EName%253A%2520%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522text%2522%2520placeholder%253D%2522Enter%2520Text%2522%2520class%253D%2522input%2520primary-input%2522%2520%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522input-row%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Clabel%2520class%253D%2522input-label%2520form-label%2522%253EPassword%253A%2520%253Cspan%2520class%253D%2522reqired%2522%253E*%253C%252Fspan%253E%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522password%2522%2520placeholder%253D%2522******%2522%2520class%253D%2522input%2520required-input%2520form-password-input%2522%2520required%252F%253E%250A%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522input-row%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520class%253D%2522input-label%2522%253E%253Cinput%2520type%253D%2522checkbox%2522%2520class%253D%2522input%2520checkbox-input%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522checkbox-text%2522%253ERemember%2520me%253C%252Fspan%253E%253C%252Flabel%253E%250A%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%253Cdiv%2520class%253D%2522input-row%2522%253E%250A%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-primary%2520btn-submit%2522%253ELogin%253C%252Fbutton%253E%250A%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%253Cdiv%2520class%253D%2522form-footer%2522%253E%250A%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522paragraph%2522%253ECreate%2520an%2520Account.%2520%253Ci%2520class%253D%2522fas%2520fa-chevron-right%2520site-icon%2522%253E%253C%252Fi%253E%253C%252Fp%253E%250A%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%250A%253C%252Fform%253E%250A%2520%2520%2520%2520%2520%2520%2520"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
