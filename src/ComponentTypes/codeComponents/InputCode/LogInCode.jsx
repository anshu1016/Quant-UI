export function LogInCode() {
  return (
    <div>
      <form class="form">
        <div class="form-header">
          <h2 class="small-heading">Login</h2>
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
            Password: <span class="reqired">*</span>
          </label>
          <input
            type="password"
            placeholder="******"
            class="input required-input form-password-input"
            required
          />
        </div>

        {/* <div class="input-row">
          <label class="input-label">
            <input type="checkbox" class="input checkbox-input" />
            <span class="checkbox-text">Remember me</span>
          </label>
        </div> */}

        <div class="input-row">
          <button class="btn btn-primary btn-submit">Login</button>
        </div>

        <div class="form-footer">
          <p class="paragraph">
            Create an Account. <i class="fas fa-chevron-right site-icon"></i>
          </p>
        </div>
      </form>
    </div>
  );
}
