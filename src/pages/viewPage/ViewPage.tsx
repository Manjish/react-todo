import { useHistory, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";

const ViewPage = () => {
  const history = useHistory();
  const getParams: { id: string } = useParams();

  const getId = getParams.id;
  const getAllItems = JSON.parse(localStorage.getItem("todo")) || [];
  const getData = getAllItems[getId];
  
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

      <div style={{ background: "#e7e7e7", padding: "10px", fontSize: "20px", margin:"10px" }}>
        {getData}
      </div>
    </>
  );
};

export default ViewPage;
