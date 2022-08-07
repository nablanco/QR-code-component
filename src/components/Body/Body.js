import "./body.css";

const Body = (content) => {
  let text = content.content;
  return (
    <div className="body-component">
      <h1 className="bold-text">{text[1]}</h1>
      <p className="normal-text">{text[2]}</p>
    </div>
  );
};

export default Body;
