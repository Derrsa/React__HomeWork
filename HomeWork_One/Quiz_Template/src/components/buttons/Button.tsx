import "./Button.css";
import { Link } from "react-router-dom";
export function Button({ title, route, click,  }) {
  return (
    <>
      <Link onClick={click} to={route}>
        <button className="btn">{title}</button>
      </Link>
    </>
  );
}
