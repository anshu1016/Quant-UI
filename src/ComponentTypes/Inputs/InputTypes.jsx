import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

export default function InputTypes() {
  return (
    <div className="avatarContainer">
      <div className="intro">
        <h3>Inputs</h3>
        <p>
          Inputs are very Important part to take data from user using form
          element.
        </p>
      </div>
      <div className="content">
        <h3>Examples of Inputs</h3>
        <p>
          We have different types of input such as Primary input, Input with
          number, Input with error style. Here input class applies common
          styling to all input fields. Also we have a checkbox and radio inputs.
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">{/* <InputTypeCode /> */}</div>
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%253Clabel%2520class%253D%2522input-label%2522%253EPrimary%2520Input%253C%252Flabel%253E%250A%253Cinput%2520type%253D%2522text%2522%2520placeholder%253D%2522Enter%2520Text%2522%2520class%253D%2522input%2520primary-input%2522%2520%252F%253E%250A%250A%253Clabel%2520class%253D%2522input-label%2522%253ESecondary%2520Input%253C%252Flabel%253E%250A%253Cinput%2520type%253D%2522text%2522%2520placeholder%253D%2522Enter%2520Text%2522%2520class%253D%2522input%2520seconday-input%2522%2520%252F%253E%250A%250A%253Clabel%2520class%253D%2522input-label%2522%253EDisabled%2520Input%253C%252Flabel%253E%250A%253Cinput%2520type%253D%2522text%2522%2520placeholder%253D%2522Enter%2520Text%2522%2520class%253D%2522input%2522%2520disabled%252F%253E%250A%2520%2520%250A%253Clabel%2520class%253D%2522input-label%2522%253ERequired%2520Input%2520%253Cspan%2520class%253D%2522reqired%2522%253E*%253C%252Fspan%253E%253C%252Flabel%253E%250A%253Cinput%2520type%253D%2522email%2522%2520placeholder%253D%2522example%2540.com%2522%2520class%253D%2522input%2520required-input%2520email-input%2522%2520required%252F%253E%250A%2520%2520%250A%253Clabel%2520class%253D%2522input-label%2522%253EPassword%2520Input%2520%253Cspan%2520class%253D%2522reqired%2522%253E*%253C%252Fspan%253E%253C%252Flabel%253E%250A%253Cinput%2520type%253D%2522password%2522%2520placeholder%253D%2522********%2522%2520class%253D%2522input%2520required-input%2520password-input%2522%2520required%252F%253E%250A%2520%2520%250A%253Clabel%2520class%253D%2522input-label%2522%253ENumber%2520Input%253C%252Flabel%253E%250A%253Cinput%2520type%253D%2522number%2522%2520placeholder%253D%2522Enter%2520Number%2522%2520class%253D%2522input%2520number-input%2522%2520%252F%253E%250A%250A%253Clabel%2520class%253D%2522input-label%2522%253ETextarea%253C%252Flabel%253E%250A%253Ctextarea%2520placeholder%253D%2522Enter%2520your%2520text%2522%2520class%253D%2522input%2520textarea-input%2522%253E%253C%252Ftextarea%253E%250A%2520%2520%250A%253Clabel%2520class%253D%2522input-label%2522%253ERadio%253C%252Flabel%253E%250A%253Cinput%2520type%253D%2522radio%2522%2520class%253D%2522input%2520radio-input%2522%2520%252F%253E%250A%2520%2520%250A%253Clabel%2520class%253D%2522input-label%2522%253ECheckbox%253C%252Flabel%253E%250A%253Cinput%2520type%253D%2522checkbox%2522%2520class%253D%2522input%2520checkbox-input%2522%2520%252F%253E%250A%2520%2520%250A%253Clabel%2520class%253D%2522input-label%2522%253EError%2520Style%2520%253Cspan%2520class%253D%2522reqired%2522%253E*%253C%252Fspan%253E%253C%252Flabel%253E%250A%253Cinput%2520type%253D%2522password%2522%2520placeholder%253D%2522*******%2522%2520class%253D%2522input%2520required-input%2520password-input%2522%2520id%253D%2522error-style%2522%2520required%252F%253E%250A%253Cp%2520class%253D%2522error-style%2522%2520id%253D%2522error-message%2522%253E%253C%252Fp%253E%250A%2520%2520&tb="
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
