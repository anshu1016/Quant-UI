import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { AlertCode } from "../codeComponents/Alerts/AlertCode";

export default function Alert() {
  return (
    <div className="avatarContainer">
      <div className="intro">
        <h3>Alerts</h3>
        <p>
          Alerts component provides important message to attract users attention
          without any interrupting.
        </p>
      </div>
      <div className="content">
        <h3>Examples of Alerts</h3>
        <p>
          Alerts are available in four types i.e Primary Alert, Successful
          Alert, Danger Alert and Warning Alert. To use this component, you have
          to add alert, according to your need you can use these classes
          primary-alert, successfull-alert, danger-alert, warning-alert.
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          <AlertCode />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2520%2509%2520%2520%253Cdiv%2520class%253D%2522alert%2520primary-alert%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-info-circle%2520component-icons%2522%253E%253C%252Fi%253E%2520Primary%2520Alerts%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522alert%2520successfull-alert%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-check-circle%2520component-icons%2522%253E%253C%252Fi%253E%2520Successfull%2520Alert%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522alert%2520danger-alert%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-skull-crossbones%2520component-icons%2522%253E%253C%252Fi%253E%2520Danger%2520Alert%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522alert%2520warning-alert%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-exclamation-triangle%2520component-icons%2522%253E%253C%252Fi%253E%2520Warning%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Alert%257B%2522%2520%2522%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
