import { FaEye } from "react-icons/fa";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";

const MainPage = () => {
  const getAllTodo = JSON.parse(localStorage.getItem("todo")) || [];
  return (
    <>
      <NavBar />

      <div className="todo-container">
        <h3>Your to-do:</h3>
        {getAllTodo.map((elem, index) => (
          <>
            <div className="single-todo">
              {elem}
              <Link to={`/view/${index}`}>
                <FaEye size={20} style={{ cursor: "pointer" }} />
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default MainPage;
