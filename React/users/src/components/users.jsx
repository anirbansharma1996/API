import { useEffect, useState } from "react";
import UserCard from "./userCard";

export default function User() {
  const [user, setUser] = useState([]);
  
  const getUser = async () => {
    try {
      const res = await fetch("https://reqres.in/api/users");
      const data = await res.json();
      setUser((prev) => data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  useEffect(() => {
    getUser();
  }, []);
 
  return (
    <div>
      <h1>Users</h1>
      <div className="container">
        {user.map((el) => (
          <UserCard props={el} />
        ))}
      </div>
    </div>
  );
}
