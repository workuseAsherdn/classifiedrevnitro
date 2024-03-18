import React from "react";

export default function Header() {
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
                <img src="./images/Group 1.png" alt="" />
              </label>
              <ul>
                <li>
                  <a href="https://revnitro.com/">Home</a>
                </li>
                <li>
                  <a href="https://revnitro.com/">Blog</a>
                </li>
                <li>
                  <a href="https://revnitro.com/">Forum</a>
                </li>
                <li>
                  <a href="https://revnitro.com/">Course</a>
                </li>
                <li>
                  <a href="#">Classified</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
              </ul>
            </div>
            {/* <!------------------------------First Navbar--------------------------->
          <!------------------------------Second Navbar---------------------------> */}
            <div class="secondnavbar">
              <div class="secondnavbarflexcontents">
                <div>
                  <a class="itemsinsecond" href="">
                    About
                  </a>
                </div>
                <div>
                  <a class="itemsinsecond" href="">
                    Sell your bike
                  </a>
                </div>
                <div>
                  <a class="itemsinsecond" href="">
                    Buy used bike
                  </a>
                </div>
                <div>
                  <a class="itemsinsecond" href="">
                    My Wishlist
                  </a>
                </div>
                <div>
                  <a class="itemsinsecond" href="">
                    My Account
                  </a>
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
