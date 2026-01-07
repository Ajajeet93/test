import React from "react";
import ajeet from "./assets/Ajeet img.jpg";
import "./style.css";
function Header(props) {
  return (
    <div className="flex justify-between px-8 py-[5px]">
      <div className="text-start space-y-2">
        <h2 className="text-lg font-semibold">Name : {props.name}</h2>
        <h2 className="text-lg font-semibold">Address : {props.address}</h2>
        <h2 className="text-lg font-semibold">Email : {props.email}</h2>
        <h2 className="text-lg font-semibold">Phone No : {props.phoneno}</h2>
      </div>

      <div className="h-[250px] w-[200px] overflow-hidden rounded-[5px] shadow-md">
        <img
          src={ajeet}
          alt="User"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}

export default Header;
