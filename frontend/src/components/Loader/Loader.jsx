import "./Loader.css";
import icons from "../../assets/icons/uranusimg.png";

function Loader() {
  return (
    <div className="loader">

      <img src={icons} alt="Logo" />

      <h1>TEAM <span>URANUS</span></h1>

      <p>Loading Universe...</p>

      <div className="loading-bar">

        <div className="progress"></div>

      </div>

    </div>
  );
}

export default Loader;