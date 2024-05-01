import "./Circle.css";

const Circle = (props) => {
  return (
    <div
      className="circle"
      style={{
        backgroundColor: props.CircleColor,
      }}
    ></div>
  );
};

export default Circle;
