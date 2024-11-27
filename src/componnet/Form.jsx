import { useState } from "react";

const Form = () => {
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [gender, setGender] = useState("mail");
  // const [role, setRole] = useState("user");
  // const [rules, setRules] = useState(false);

  //setp1
  const [form, setForm] = useState({
    password: "",
    email: "",
    gender: "male",
    role: "user",
    rules: false,
  });

  //setp2
  // const genderHandler = (e) => {
  //   setGender(e.target.value);
  // };

  // const selectHandler = (e) => {
  //   setRole(e.target.value);
  // };
  // const rulesHandler = () => {
  //   setRules((rules) => !rules);
  // };
  const changHandler=(event)=>{
console.log(event.target)

  }
  const submitHandler = () => {
    console.log({ form });
  };
  return (
    <div>
      <input type="text" value={email} onChange={changHandler} />
      <input type="password" value={password} onChange={changHandler} />
      <label htmlFor="male">male</label>
      <input
        type="radio"
        id="male"
        value="male"
        name="gender"
        onChange={changHandler}
        checked={form.gender === "male"}
      />
      <label htmlFor="female">Female</label>

      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        onChange={changHandler}
        checked={form.gender === "female"}
      />
      <label htmlFor="other">Other</label>
      <input
        type="radio"
        id="other"
        name="gender"
        value="other"
        onChange={changHandler}
        checked={form.gender === "other"}
      />

      <select value={role} onChange={changHandler}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="writer">Writer</option>
      </select>
      <input type="checkbox" checked={rules} onChange={changHandler} />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default Form;
