import { useHistory, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar";

const ViewPageLocation = () => {
  const history = useHistory();
  const getLocation = useLocation();

  const queryString = new URLSearchParams(getLocation.search);
  const getId = queryString.get("id");

  const allItems = JSON.parse(localStorage.getItem("todo")) || [];

  const getData = allItems[getId];
  return (
    <>
      <NavBar />
      <button
        onClick={() => {
          history.push("/");
        }}
        style={{ background: "#ff3792", color: "white" }}
      >
        Go Back
      </button>

      <div
        style={{
          background: "#e7e7e7",
          padding: "10px",
          fontSize: "20px",
          margin: "10px",
        }}
      >
        {getData}
      </div>
    </>
  );
};

export default ViewPageLocation;
