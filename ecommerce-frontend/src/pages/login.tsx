import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="login">
      <main>
        <h1 className="heading">Loging</h1>
        <div>
          <label htmlFor="">Gender</label>
          <select name="" id="" onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Date Of Birth</label>
          <input
            type="date"
            name="date"
            value={date}
            id=""
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <p>Already Signed In Once</p>
          <button>
            <FcGoogle /> <span>Sign In With Google</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
