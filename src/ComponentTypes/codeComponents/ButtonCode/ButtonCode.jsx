import { AiFillCamera } from "react-icons/ai";
import { MdDoNotDisturbOn, MdGroupAdd } from "react-icons/md";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import "./buttonCode.css";
export function ButtonCode() {
  return (
    <div className="buttonContaier">
      <div className="button primary">
        <button>Primary</button>
      </div>

      <div className="button secondary">
        <button>Secondary</button>
      </div>

      <div className="button outline">
        <button>Outline</button>
      </div>

      <div className="button link">
        <button>Primary Text</button>
      </div>

      <div className="button  blueColor">
        <button>Cart</button>
      </div>

      <div className="button greenColor">
        <button>Success</button>
      </div>

      <div className="button redColor">
        <button>Warning</button>
      </div>

      <div className="button primary">
        <button>
          <MdGroupAdd />
        </button>
      </div>

      <div className="button primary">
        <button>
          <AiFillCamera />
        </button>
      </div>

      <div className="button primary">
        <button>
          <BsFillChatLeftDotsFill />
        </button>
      </div>

      <div className="button redColor">
        <button>
          <MdDoNotDisturbOn />
        </button>
      </div>
    </div>
  );
}
