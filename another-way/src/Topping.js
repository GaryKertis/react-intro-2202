// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  let isSelected = props.selectedTopping === props.type;
  return (
    <li
      onClick={() => props.handleClick(props.type)}
      className={isSelected ? "selected" : ""}
    >
      {props.type}
    </li>
  );
}
