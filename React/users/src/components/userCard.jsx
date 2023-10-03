import React from "react";

export default function UserCard({ props }) {
  console.log(props);
  return (
    <div key={props.id} className="main">
      <img src={props.avatar} alt={props.id} />
      <p> ID : {props.id}</p>
      <h4>
        NAME : {props.first_name} {props.last_name}
      </h4>
      <p> EMAIL : {props.email}</p>
    </div>
  );
}
