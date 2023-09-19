import "./listCode.css";

export function ListCode() {
  return (
    <div className="listContainer">
      <ol class="text-md order-list type-number">
        <li>Item </li>
        <li>Item </li>
        <li>Item </li>
        <li>Item </li>
      </ol>

      <ol class="text-md order-list type-A">
        <li>Item </li>
        <li>Item </li>
        <li>Item </li>
        <li>Item </li>
      </ol>

      <ol class="text-md order-list type-a">
        <li>Item </li>
        <li>Item </li>
        <li>Item </li>
        <li>Item </li>
      </ol>

      <ol class="text-md order-list upper-roman">
        <li>Item </li>
        <li>Item </li>
        <li>Item </li>
        <li>Item </li>
      </ol>

      <ol class="text-md order-list lower-roman">
        <li>Item </li>
        <li>Item </li>
        <li>Item </li>
        <li>Item </li>
      </ol>
    </div>
  );
}
