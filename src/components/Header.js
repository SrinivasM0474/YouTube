import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearhcQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setselectedSuggestion] = useState("");
  const dispatch = useDispatch();
  const searchCache = useSelector((state) => state.search);

  /***
   *
   *
   * searchCache = {
   *  "iphone": ["iphon 11", "iphone 14"]
   * }
   * searchQuery = iphone
   *
   *  */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   *
   * key = i
   * redner the component
   * useEffect();
   * start Timer => make api call after 200ms
   *
   * key = ip
   * destory the component (useEffect return method)
   * redner the component
   * useEffect();
   * start Timer => make api call after 200ms
   *
   */

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      }),
    );
    // console.log(json[1]);
  };
  const handleToggle = () => {
    dispatch(toggleMenu());
  };

  const handleSelectedSuggestion = (s) => {
    console.log(s);
  };
  return (
    <div className="grid grid-flow-col shadow-lg justify-between items-center p-4">
      <div className="flex col-span-1">
        <img
          alt="menu"
          src="https://i.pinimg.com/736x/3d/e3/02/3de30202b3bd70e94927841c72c56c00.jpg"
          className="w-8 h-8 cursor-pointer"
          onClick={handleToggle}
        />
        <img
          alt="youtube-logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
          className="h-10"
        />
      </div>
      <div className="flex col-span-6 relative flex-col">
        <div className="flex w-[100%]">
          <input
            type="text"
            className="border border-black rounded-l-full w-10/12 outline-none pl-[20px]"
            value={searchQuery}
            onChange={(e) => {
              setSearhcQuery(e.target.value);
            }}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            // onBlur={() => {
            //   setShowSuggestions(false);
            // }}
          />
          <button className="border border-black p-2 bg-black text-white font-bold rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute w-[96%] top-[100%] bg-white rounded-bl-md rounded-br-md shadow-xl border-gray-100">
            <ul>
              {suggestions.map((s) => {
                return (
                  <li
                    key={s}
                    className="p-2 font-bold hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => {
                      handleSelectedSuggestion(s);
                      setShowSuggestions(false);
                    }}
                  >
                    {s}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          alt="user"
          src="https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg"
          className="w-8 h-8"
        />
      </div>
    </div>
  );
};

export default Header;
