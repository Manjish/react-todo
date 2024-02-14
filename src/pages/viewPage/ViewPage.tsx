import { Link, useHistory, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";

const ViewPage = () => {
  const history = useHistory();
  const getParams: { id: string } = useParams();

  const getId = getParams.id;
  const getAllItems = JSON.parse(localStorage.getItem("todo")) || [];
  const getData = getAllItems[getId];

  const deleteTodo = () => {
    getAllItems.splice(getId, 1);
    localStorage.setItem("todo", JSON.stringify(getAllItems));
    history.replace("/");
  };

  return (
    <>
      <div className="todo-container">
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

        {localStorage.getItem("loggedIn") &&
        localStorage.getItem("loggedIn") === "true" ? (
          <button
            style={{ background: "red", color: "white" }}
            onClick={deleteTodo}
          >
            Delete
          </button>
        ) : (
          <p>
            Login to perform more actions. <Link to="/login">Login Now</Link>
          </p>
        )}
      </div>
    </>
  );
};

export default ViewPage;
