import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { AvatarXXL } from "../codeComponents/AvatarCode/AvatarXXL";
import { ImagesCode } from "../codeComponents/ImagesCode/ImagesCode";

export default function Images() {
  return (
    <div className="avatarContainer">
      <div className="intro">
        <h3>Images</h3>
        <p>
          Image component can be responsive to their parent Element. (They never
          become wider than their parent.
        </p>
      </div>
      <div className="content">
        <h3>Examples of Resposive Image</h3>
        <p>
          You have just add responsive-images to make image responsive. This
          class applies max-width: 100%; and height: auto; to the image so that
          it scales with the parent width.
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">
          <ImagesCode />
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2520%2520%2520%2520%253Cdiv%2520className%253D%2522imageContainer%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fimg.freepik.com%252Ffree-vector%252Fnature-scene-with-river-hills-forest-mountain-%2509%2509%2509%2509%2509%2509landscape-flat-cartoon-style-illustration_1150-37326.jpg%253Fw%253D2000%2522%2520alt%253D%2522landscape_Image%2522%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <div className="content">
          <h3>Examples of Round Image</h3>
          <p>
            You can make images rounded by adding this rounded-images class to
            img Element.
          </p>
        </div>
        <div className="outputBlock">
          <div className="outputImage">
            <AvatarXXL />
          </div>
        </div>
        <div className="code">
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2520%2520%2520%2520%253Cdiv%2520className%253D%2522imageContainer%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fimg.freepik.com%252Ffree-vector%252Fnature-scene-with-river-hills-forest-mountain-%2509%2509%2509%2509%2509%2509landscape-flat-cartoon-style-illustration_1150-37326.jpg%253Fw%253D2000%2522%2520alt%253D%2522landscape_Image%2522%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
