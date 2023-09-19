import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { ListCode } from "../codeComponents/ListCode/ListCode";

export default function List() {
  return (
    <div className="avatarContainer">
      <div className="intro">
        <h3>Lists</h3>
        <p>
          Lists can be use for so many things. Such as Listing some items,
          Stacked list, Space list, Navigation, etc. We have different types of
          list as mentioned below.
        </p>
      </div>
      <div className="content">
        <h3>Examples of Ordered Lists:</h3>
        <p>
          Order list can be use for listing items but in specific order. To use
          this component you can add these classes according to your needs Even
          You can reverse the order of ordered list, add reversed attribute to
          ol element.
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          <ListCode />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%253Col%2520class%253D%2522text-md%2520order-list%2520type-number%2522%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%253C%252Fol%253E%250A%250A%253Col%2520class%253D%2522text-md%2520order-list%2520type-A%2522%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%253C%252Fol%253E%250A%250A%253Col%2520class%253D%2522text-md%2520order-list%2520type-a%2522%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%253C%252Fol%253E%250A%250A%253Col%2520class%253D%2522text-md%2520order-list%2520upper-roman%2522%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%253C%252Fol%253E%250A%250A%253Col%2520class%253D%2522text-md%2520order-list%2520lower-roman%2522%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%2520%2520%2520%253Cli%253EItem%2520%253C%252Fli%253E%250A%253C%252Fol%253E&tb="
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
