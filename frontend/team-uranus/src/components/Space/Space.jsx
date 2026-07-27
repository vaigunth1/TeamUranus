import "./Space.css";

function Space({ children }) {
  return (
    <>
      <div className="space-bg">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="nebula"></div>
      </div>

      {children}
    </>
  );
}

export default Space;