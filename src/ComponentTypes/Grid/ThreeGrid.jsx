import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
// import ThreeGridCode from "../../codeComponents/GridCode/ThreeGridCode";

export default function ThreeGrid() {
  return (
    <div className="avatarContainer">
      <div className="content">
        <h3>Examples of Three Items in a Grid</h3>
        <p>
          We have (1x3) grid. You can use to making card. To use this you have
          to add this class to grid-3-wrapper in parent container and child
          items should contain with this class grid-item.
        </p>
      </div>
      <div className="outputBlock">
        <div className="outputImage">{/* <ThreeGridCode /> */}</div>
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
            src="https://carbon.now.sh/embed?bg=rgba%2815%2C15%2C15%2C1%29&t=vscode&wt=none&l=htmlmixed&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2520%253Cdiv%2520class%253D%2522grid-wrapper%2522%253E%250A%2520%2520%2520%253Cdiv%2520class%253D%2522grid-item%2520grid-item1%2520lg-rounded%2522%253E%250A%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522data%253Aimage%252Fjpeg%253Bbase64%252C%252F9j%252F4AAQSkZJRgABAQAAAQABAAD%252F2wCEAAkGBxMQEhUTExIWFRUWFhkYGBgYGRkXFhgdFxYXFxoWGBgdHSggGBonHRUXIjIhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy4lICYtKy0rLS0tLS0rKy0tLS0tLS0tKy0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf%252FAABEIAOEA4QMBIgACEQEDEQH%252FxAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj%252FxABOEAABAwIEAgcEBAoGBwkAAAABAAIDBBEFEiExBkETIlFhcYGRBzJCoRRSscEjM0NTYnKCkrLRFTRzouHwFzVUk8PS8QgWJER0dYOzwv%252FEABsBAAIDAQEBAAAAAAAAAAAAAAAEAwUGAgEH%252F8QAPREAAQMCAgYJAgMGBwEAAAAAAQACAwQRITESQVFhcZEFEyKBobHB0fAGMhRy4TRCUoKiwhU1U5Ky0vEz%252F9oADAMBAAIRAxEAPwCvIiLNr68iIiEIiIhCIiIQiIiEIi%252BhQtfNURm2cCNzuq%252FKCWX2YRsO42UkcZkdogparqm00ZkcCQM7C%252FzjkNdhipqy%252BKszdM7%252FAMy8eAH3WXltRVN2mDu5zW%252FeE0aCS2Y8fZUY%252BqKW%252BLH%252FANP%252FAGVoRV8Y3O334Gu%252FUdb%252Ba2ouIoCbPzR%252FrNP3KF1JK3VfhirCHpuhlykA%252FN2fPDxUsi8QSteLscHgfVIcvE1UxnvPa07a6fNQWN7fPdWRkaG6RIttvgsyLxDK1%252Fuva79Ug%252FYshC8OGC7BuLhfEREIRERCEREQhEREIRERCEREQhEREIRETvshCL6ATyUVVYuBpE3pD9Y6M9d3eXqoupjfL%252BNkJH1W9VnpzTcVG9%252BJwHzUqOt6fpqfst7btgy7zlyupepxuCPQvzHsb1j6jq%252FNakmOvd%252BLpzb6zzYfu%252F4rVhp2M91oH2%252Bqyp5lFEM8Vm5%252FqOskwZZg3C55m%252FgAvRrah35Vre5rGn5uBXnM%252FwCKWR3i7T0FgiKcRRjJo5BVklfVSG7pXf7j5Xsi%252BIikSi%252Br45oO4uiIQtd1Cy9wCw9oOU%252FJZnSy5SxzhK0nZ%252BjhbmHjn3kL2i5cxrswpoaiWG%252FVuIvmNR4jI94WoKYSDrss4cxofEELYhr54OZmj7D748Dz%252FwA7L0vqHsa8WcLr2mqZaZ2lC4tO71GR7wVMUFdHO28Zv2g%252B8OWo7Fsqqy03WzsOR4%252BIc%252FEc1MYXifSnJIMso5cnd7f5KqqKQx9puI8Qtv0V04yqIilAa%252FVsdw2Hdy2CSRYoZg69j7ri1w7CP8%252FNZUmRbAq%252Fa4OFwiIi8XqIiIQiIiEIiIhCIiBCF9Ch8VgflLpZo2tv1QWuy8uQPWd6r3ieL9GejjGeX%252B63vd39yi2QEnPI7O%252FtOw7mjkE%252FSU776eQ4XPdfLjyWY6c6Upg005GmdYDiGjc6xF%252Fy5bdS%252Bwved7W7dW38AdfWyzIvitViSbnK3P1JRERC8RERCEREQhEREIRERCEREQhfVjmhDu4jUEaEHtBXtfQEIX2grDHI90nuucM%252FZ7rQJLctTr4nsVhItovnDHC76p4L2kR87jfuWSuoXUs0lK4k9HYxk7ujd7h7yLFp7296ra2nAAe3gfT25LYfT3SbnudTym5N3NJ2nFw9R36rBY0RFWrXIiIhCIiIQiIiEIorFMQIJjiPX%252BJ%252FKPuHa%252F7FlxSre0ZY43vedy0E5PPYO%252F6qIpiRmbly5Ta17m%252B5v6%252Bt0%252FSU4cdJ3cPU7vPgs1070rJC3qoQQTgXWNhuacr7TfAb8vtPThgsPMnc95Kl8O6GSzJer%252BkPvUavitVhlef%252B4Akbmhna4HtWhUcB1Tdg13gVX6PEZYTeORzfA"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
