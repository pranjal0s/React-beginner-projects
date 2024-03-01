import { useState } from "react"

function Card({ id, name, info, image, price, removeTour}) {
  const [readMore, setReadMore] = useState(false);

  const lessInfo = readMore ? info :`${info.substring(0,200)}...`;
  function readMorehandler() {
    setReadMore(!readMore);
  }

  return (
    <div className="card">
      <img src={image}></img>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4>{price}</h4>
      </div>
      <div>{lessInfo}</div>
      <span onClick={readMorehandler}>
        {readMore ? `show less`:`read more`}
      </span>
      <button onClick={() => { removeTour(id)}}>Not Intrested</button>
    </div>
  );
}

export default Card;
