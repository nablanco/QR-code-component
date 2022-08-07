import "./component.css";
import QR from "../QR/QR";
import Body from "../Body/Body";
import TextObject from "./component-txt.json";

const Component = () => {
  let text = TextObject;
  return (
    <div className="container">
      <QR></QR>
      <Body content={text}></Body>
    </div>
  );
};

export default Component;
