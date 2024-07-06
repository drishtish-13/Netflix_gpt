import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlics";
import { LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img
        className="w-44 mx-auto md:mx-0"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch&&(<select className=" px-4 m-2 rounded-lg  bg-gray-700 text-white" onChange={handleLanguageChange}>
            {LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>)}
          <button
            className="py-2 px-4 mx-2 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch? "HomePage":"GPT Search"}
          </button>
          <img
            className=" hidden md:block w-12 h-12 "
            alt="usericon"
            src="https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQvPDU2yMG12eBsG_K_6UY5X-56J7e9rsNUftrHyYxHcRREu9YtgxK7T3xAe9x_nlW7IFwcHMwW0TlVARAOF1GjZ7Y6qAbA.png?r=758"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
