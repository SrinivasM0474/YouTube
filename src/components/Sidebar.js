import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { isMenuOpen } = useSelector((state) => state.app);
  //Early return pattern
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-xl p-4 col-span-1">
      <h1>Subscriptions</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Music</li>
        <li>Movies</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
