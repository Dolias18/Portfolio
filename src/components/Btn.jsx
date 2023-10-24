import "../App.css";

function Btn(props) {
  return (
    <div className="btn">
      <a href={props.link} target="_blank">
        <img src={props.img} />
      </a>
     
    </div>
  );
}
export default Btn;
