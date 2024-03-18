import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./css/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { DropdownButton, Dropdown, Image } from "react-bootstrap";
import { logout } from "../../actions/userActions";

export default function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.authState);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const LogoutHandler = () => {
    dispatch(logout);
  };

  return (
    <div>
      {/* <!------------------------------------------------Desktop Verison--------------------------------------------> */}
      <div class="newNavbarswidthflex">
        <div class="firstnavbarwidthdiv">
          <div class="fordesktop">
            {/* <!----------------------------------First Navbar-------------------------------> */}
            <div class="NavbARDIV">
              <input type="checkbox" id="check" />
              <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
              </label>
              <label class="NavbarLOGO">
                <Link to={"/login"}>
                  <img src="./images/Group 1.png" alt="" />
                </Link>
              </label>
              <ul>
                <li>
                  <a href="https://revnitro.com/">Blogs</a>
                </li>
                <li>
                  <a href="https://revnitro.com/">Course</a>
                </li>
                <li>
                  <a href="https://revnitro.com/">Forum</a>
                </li>
                <li>
                  <a href="https://revnitro.com/">Team</a>
                </li>
                <li>
                  <a href="#">Book Service</a>
                </li>
                <li>
                  <a href="#">Bike Resale</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>

                <li>
                  {isAuthenticated ? (
                    <Dropdown className="d-inline">
                      <Dropdown.Toggle
                        variant="default text-white pr-5"
                        id="dropdown-basic"
                      >
                        <figure className="avatar avatar-nav">
                          <Image width="50px" src={user.avatar} />
                        </figure>
                        <span>{user.name}</span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {user.role === "admin" && (
                          <Dropdown.Item
                            onClick={() => {
                              navigate("admin/dashboard");
                            }}
                            className="text-dark"
                          >
                            Dashboard
                          </Dropdown.Item>
                        )}

                        <Dropdown.Item
                          onClick={() => {
                            navigate("/myprofile");
                          }}
                          className="text-dark"
                        >
                          Profile
                        </Dropdown.Item>

                        <Dropdown.Item
                          onClick={() => {
                            navigate("/orders");
                          }}
                          className="text-dark"
                        >
                          Orders
                        </Dropdown.Item>

                        <Dropdown.Item
                          onClick={LogoutHandler}
                          className="text-danger"
                        >
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <Link to={"/login"}>Login</Link>
                  )}
                </li>
              </ul>
            </div>
            {/* <!------------------------------First Navbar--------------------------->
        <!------------------------------Second Navbar---------------------------> */}
            <div class="secondnavbar">
              <div class="secondnavbarflexcontents">
                <div>
                  <Link to="/about" class="itemsinsecond" href="">
                    About
                  </Link>
                </div>
                <div>
                  <Link to="/sellbike" class="itemsinsecond" href="">
                    Sell your bike
                  </Link>
                </div>
                <div>
                  <a class="itemsinsecond" href="">
                    Buy used bike
                  </a>
                </div>
                <div>
                  <Link to="/cart" class="itemsinsecond" href="">
                    My Wishlist
                  </Link>
                </div>
                <div>
                  <Link to="/myaccountpage" class="itemsinsecond" href="">
                    My Account
                  </Link>
                </div>
              </div>
            </div>
            {/* <!------------------------------Second Navbar---------------------------> */}
          </div>
        </div>
      </div>
      {/* <!------------------------------------------------Desktop Verison-------------------------------------------->

  <!------------------------------------------------Mobile Verison-------------------------------------------->
  <!------------------------------------------First Navbar----------------------------------------------------> */}
      <div class="mobilefelesvccdwidth">
        <div class="mobilevsesiosdnwidthhdiv">
          <div class="formobile">
            <div class="navbarDivsa">
              <div class="dropdown">
                <div class="dropdownflexconcept">
                  <div>
                    <button class="dropbtn" onclick="myFunctionsasas()">
                      <span class="namechangingsection">Home</span> &nbsp;
                      <i class="fa fa-caret-down"></i>
                    </button>
                  </div>
                  <div>
                    <img src="./images/Group 64.png" alt="" />
                  </div>
                </div>

                <div class="dropdown-content" id="myDropdown">
                  <a href="https://revnitro.com/">Blog</a>
                  <a href="https://revnitro.com/">Forum</a>
                  <a href="https://revnitro.com/">Course</a>
                  <a href="https://revnitro.com/">Classified</a>
                  <a href="https://revnitro.com/">Shop</a>
                  <a href="https://revnitro.com/">Team</a>
                </div>
              </div>
            </div>

            {/* <!------------------------------------------First Navbar----------------------------------------------------> */}

            {/* <!------------------------------------------Second Navbar----------------------------------------------------> */}
            {/* <!-- Simulate a smartphone / tablet --> */}
            <div class="mobile-container">
              {/* <!-- Top Navigation Menu --> */}
              <div class="topnav">
                <a href="#home" class="active">
                  &nbsp;
                </a>
                <div id="myLinks">
                  <a class="borrderbottomline" href="#news">
                    About
                  </a>
                  <a class="borrderbottomline" href="#contact">
                    Sell your bike
                  </a>
                  <a class="borrderbottomline" href="#about">
                    Buy used bike
                  </a>
                  <a class="borrderbottomline" href="#news">
                    My Wishlist
                  </a>
                  <a class="borrderbottomline" href="#contact">
                    My Account
                  </a>
                </div>
                <a
                  href="javascript:void(0);"
                  class="icon"
                  onclick="myFunction12()"
                >
                  <i class="fa fa-bars"></i>
                </a>
              </div>

              {/* <!-- End smartphone / tablet look --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

var namechangingsection = document.getElementsByClassName(
  "namechangingsection"
);

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

function bikeresealenamechange() {
  namechangingsection[0].textContent = "Bike Resale";
}
function carresealenamechange() {
  namechangingsection[0].textContent = "Car Resale";
}
function shopsectionnamechange() {
  namechangingsection[0].textContent = "Shop";
}

function myFunction12() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
