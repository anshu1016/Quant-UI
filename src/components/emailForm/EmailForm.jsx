import "./email.css";
export const EmailForm = () => {
  return (
    <div className="emailFormContainer">
      <div className="emailPart">
        <h3>
          MyCompLib is growing fast. Want to see just how much? Sign up and
          we'll let you know
        </h3>
        <form action="#">
          <div class="input-group input-group-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg">
              Email
            </span>
            <input
              type="email"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};
