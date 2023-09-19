import "./signup.css";
export function SignUpCode() {
  return (
    <div className="signUpContainer">
      <form class="form">
        <div class="form-header">
          <h2 class="small-heading">Singup</h2>
        </div>

        <div class="input-row">
          <label class="input-label form-label">Name: </label>
          <input
            type="text"
            placeholder="Enter Text"
            class="input primary-input"
          />
        </div>

        <div class="input-row">
          <label class="input-label form-label">
            Email: <span class="reqired">*</span>
          </label>
          <input
            type="email"
            placeholder="example@.com"
            class="input required-input form-email-input"
            required
          />
        </div>

        <div class="input-row">
          <button class="btn btn-primary btn-submit">Submit</button>
        </div>

        <div class="form-footer">
          <p class="paragraph">
            Already have an Account.{" "}
            <i class="fas fa-chevron-right site-icon"></i>
          </p>
        </div>
      </form>
    </div>
  );
}
