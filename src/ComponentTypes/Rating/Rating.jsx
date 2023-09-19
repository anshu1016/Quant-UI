import { AiFillGithub } from "react-icons/ai";

import { BiWorld } from "react-icons/bi";
import { RatingCode } from "../codeComponents/RatingCode/RatingCode";

export default function Rating() {
  return (
    <div className="avatarContainer">
      <div className="intro">
        <h3>Rating</h3>
        <p>
          Rating component use in review sections of products. You can see on
          many e-commerce websites.
        </p>
      </div>
      <div className="content">
        <h3>Examples of Rating</h3>
        <p>
          It is a static user Rating component. You can use this component by
          adding below mentioned code. Here class rating-star applies some
          styling to it.
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          <RatingCode />
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
            src="https://carbon.now.sh/embed?bg=rgba%2814%2C22%2C29%2C1%29&t=oceanic-next&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%253Ci%2520class%253D%2522fas%2520fa-star%2520star%2520rating-star%2522%253E%253C%252Fi%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2520star%2520rating-star%2522%253E%253C%252Fi%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2520star%2520rating-star%2522%253E%253C%252Fi%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2520star%2522%253E%253C%252Fi%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-star%2520star%2522%253E%253C%252Fi%253E"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
