import "./inputType.css";
export function InputTypeCode() {
  return (
    <div className="inputTypeContainer">
      <label class="input-label">Primary Input</label>
      <input type="text" placeholder="Enter Text" class="input primary-input" />

      <label class="input-label">Secondary Input</label>
      <input
        type="text"
        placeholder="Enter Text"
        class="input seconday-input"
      />

      <label class="input-label">Disabled Input</label>
      <input type="text" placeholder="Enter Text" class="input" disabled />

      <label class="input-label">
        Required Input <span class="reqired">*</span>
      </label>
      <input
        type="email"
        placeholder="example@.com"
        class="input required-input email-input"
        required
      />

      <label class="input-label">
        Password Input <span class="reqired">*</span>
      </label>
      <input
        type="password"
        placeholder="********"
        class="input required-input password-input"
        required
      />

      <label class="input-label">Number Input</label>
      <input
        type="number"
        placeholder="Enter Number"
        class="input number-input"
      />

      <label class="input-label">Textarea</label>
      <textarea
        placeholder="Enter your text"
        class="input textarea-input"
      ></textarea>

      <label class="input-label">Radio</label>
      <input type="radio" class="input radio-input" />

      <label class="input-label">Checkbox</label>
      <input type="checkbox" class="input checkbox-input" />

      <p class="error-style" id="error-message"></p>
    </div>
  );
}
