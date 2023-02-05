const Button = (props) => {
  return (
    <button id={props.id} onClick={props.onclick}>
      {props.text}
    </button>
  );
};

export { Button };
