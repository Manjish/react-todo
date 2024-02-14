import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";

const MainPage = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // console.log("Navigate:", location.state?.shouldReload);
  // if (location.state?.shouldReload) {
  //   console.log("Reloading");
  //   window.location.reload();
  // }
  const getAllTodo = JSON.parse(localStorage.getItem("todo")) || [];

  return (
    <>
      <NavBar />

      <div className="todo-container">
        <h3>Your to-do:</h3>

        {getAllTodo.length > 0 ? (
          getAllTodo.map((elem, index) => (
            <>
              <div className="single-todo">
                {elem}
                <Link to={`/view/${index}`}>
                  <FaEye size={20} style={{ cursor: "pointer" }} />
                </Link>
              </div>
            </>
          ))
        ) : (
          <center>
            You have caught up with all your todos.{" "}
            <Link to="/add">Add more</Link>
          </center>
        )}
      </div>
    </>
  );
};

export default MainPage;
