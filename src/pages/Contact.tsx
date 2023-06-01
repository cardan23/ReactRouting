import { useNavigate } from "react-router";

export const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Contact us</p>
      <button className="btn btn-primary" onClick={() => navigate("/")}>Back Home</button>
    </div>
  );
};
