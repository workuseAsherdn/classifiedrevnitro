import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../layouts/css/loginpage.css";

export default function Search() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}`);
  };

  return (
    <div>
      <div className="classformobileshowinputbox">
        <form onSubmit={searchHandler}>
          <div className="formnamedivforbuypagesdivs">
            <div>
              <input
                className="buyPagesearchareaforbikessdsdsd"
                type="searchdiv"
                placeholder="Search here"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
              />
            </div>

            <div>
              <button type="buyPagessubmit1212">Search here</button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div className="buyPagssearchinputboxes">
          <div className="buyPagecontainer">
            <form onSubmit={searchHandler}>
              <div className="formnamedivforbuypagesdivs">
                <div>
                  <input
                    className="buyPagesearchareaforbikessdsdsd"
                    type="searchdiv"
                    placeholder="Search here"
                    value={keyword}
                    onChange={(e) => {
                      setKeyword(e.target.value);
                    }}
                  />
                </div>

                <div>
                  <button type="buyPagessubmit">Search here</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
