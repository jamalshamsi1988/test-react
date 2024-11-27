import { useState } from "react";
// import "./NewForm.css"
import styles from "./NewForm.module.css";


const NewForm = () => {
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [gender, setGender] = useState("mail");
  // const [role, setRole] = useState("user");
  // const [rules, setRules] = useState(false);
  const [form, setForm] = useState({
    password: "",
    email: "",
    gender: "mail",
    role: "user",
    rules: false,
  });
  const changHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "rules") {
      setForm((form) => ({...form,rules : !form.rules}))
    } else {
      setForm((form) => ({ ...form, [name]: value }));
    }
    // console.log({form})
  };
  // const genderHandler = (e) => {
  //   setGender(e.target.value);
  // };

  // const selectHandler = (e) => {
  //   setRole(e.target.value);
  // };
  // const rulesHandler = () => {
  //   setRules((rules) => !rules);
  // };
  const submitHandler = (event) => {
    event.preventDefault()
    console.log( form );
  };

  

  return (
    <div className={styles.container} >
      {/* <form onChange={submitHandler}> */}
        <input
          type="text"
          value={form.email}
          name="email"
          onChange={changHandler}
        />
        <input className={styles.input}
          type="password"
          value={form.password}
          name="password"
          onChange={changHandler}
        />
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

        <select value={form.role} name="role" onChange={changHandler}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="writer">Writer</option>
        </select>
        <input
          type="checkbox"
          checked={form.rules}
          value={form.rules}
          name="rules"
          onChange={changHandler}
        />
        <button type="submit" onClick={() => setSelected((s) => !s)}>
          Submit
        </button>
      {/* </form> */}
    </div>
  );
};

export default NewForm;
