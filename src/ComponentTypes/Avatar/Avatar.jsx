import avatarLarge2 from "../../images/codeTextImages/avatarLarge2.png";
import { MdContentCopy } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { useRef, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import "./fullAvatar.css";
import { AvatarL } from "../codeComponents/AvatarCode/AvatarL";
import { AvatarM } from "../codeComponents/AvatarCode/AvatarM";
import { AvatarSmall } from "../codeComponents/AvatarCode/AvatarSmall";
import { AvatarXXL } from "../codeComponents/AvatarCode/AvatarXXL";
import { AvatarXL } from "../codeComponents/AvatarCode/AvatarXL";
export function Avatar() {
  return (
    <div className="avatarContainer">
      <div className="intro">
        <h3>Avatar</h3>
        <p>
          Avatar use for Profile picture, You can put your Image into avatar
          component.
        </p>
      </div>
      <div className="content">
        <h3>Examples of Image Avatar</h3>
        <p>
          Avatar are available in five different sizes. Extra large avatar,
          Large avatar, Medium avatar, Small avatar and Extra small avatar.
          Here, <span>img-responsive</span> applies responsive property to image
          and img-rounded applies <span> 50% of border radius</span> to avatar.
          You can use these according to your need{" "}
          <span>
            avatar-ex-large, avatar-large, avatar-medium, avatar-small,
            avatar-ex-small
          </span>
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          <AvatarXXL />
          <AvatarXL />
          <AvatarL />
          <AvatarM />
          <AvatarSmall />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%252F%252FFor%2520XXL%2520Size%250A%250A%253Cdiv%2520className%253D%2522avatar%2520avatar-large%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%257BbigTeddy%257D%2520alt%253D%2522XXLIMAGE%2522%2520className%253D%2522image%2522%252F%253E%250A%2520%253C%252Fdiv%253E%250A%250A%252F%252FFor%2520XL%2520Size%250A%250A%2520%253Cdiv%2520className%253D%2522avatar%2520avatar-xl%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%257BXLimage%257D%2520alt%253D%2522XXLIMAGE%2522%2520className%253D%2522image%2522%2520%252F%253E%250A%2520%253C%252Fdiv%253E%250A%250A%252F%252FFor%2520L%2520Size%250A%250A%2520%253Cdiv%2520className%253D%2522avatar%2520avatar-l%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%257BLSizeImage%257D%2520alt%253D%2522LIMAGE%2522%2520className%253D%2522image%2522%2520%252F%253E%250A%2520%253C%252Fdiv%253E%250A%250A%252F%252FFor%2520M%2520Size%250A%250A%253Cdiv%2520className%253D%2522avatar%2520avatar-m%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%257BLSizeImage2%257D%2520alt%253D%2522LIMAGE%2522%2520className%253D%2522image%2522%252F%253E%250A%253C%252Fdiv%253E%250A%250A%252F%252FFor%2520Small%2520Size%250A%250A%253Cdiv%2520className%253D%2522avatar%2520avatar-small%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%257BsmallImage%257D%2520alt%253D%2522small-IMAGE%2522%2520className%253D%2522image%2522%252F%253E%250A%253C%252Fdiv%253E"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
