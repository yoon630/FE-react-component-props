import "./Box.css";

const Box = (props) => {
  console.log(props);
  return (
    <div
      className="box"
      style={{
        backgroundColor: props.boxColor || "black",
      }}
    >
      <p>{props.text}</p>
    </div>
  );
};

export default Box;
