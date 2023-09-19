import "./alertCode.css";
export function AlertCode() {
  return (
    <div className="alertContainer">
      <div class="alert primary-alert">
        <p>
          <i class="fas fa-info-circle component-icons"></i> Primary Alerts
        </p>
      </div>

      <div class="alert successfull-alert">
        <p>
          {" "}
          <i class="fas fa-check-circle component-icons"></i> Successfull Alert{" "}
        </p>
      </div>

      <div class="alert danger-alert">
        <p>
          {" "}
          <i class="fas fa-skull-crossbones component-icons"></i> Danger Alert{" "}
        </p>
      </div>

      <div class="alert warning-alert">
        <p>
          {" "}
          <i class="fas fa-exclamation-triangle component-icons"></i> Warning
          Alert{" "}
        </p>
      </div>
    </div>
  );
}
