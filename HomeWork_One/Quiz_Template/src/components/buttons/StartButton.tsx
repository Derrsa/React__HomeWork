import "./Button.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function StartButton({ title, route, handleClick }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    navigate("/loading");
    setLoading(true);
    await handleClick(); // Ждем завершения handleGetQuestions
    setLoading(false);
    navigate(route); // Маршрутизация после завершения
  };

  return (
    <button className={"btn"} onClick={handleButtonClick} disabled={loading}>
      {loading ? "Loading..." : title}
    </button>
  );
}
