import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
// import "../css/productdetail.css";
import { Fragment, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../../actions/productActions";
import Loader from "../Loader";
import MetaData from "../MetaData";
import { addCartItem } from "../../../actions/cartActions";
import { toast } from "react-toastify";
import { WishListItem } from "../../../actions/wishListActions";

export default function ProductDetail() {
  const [activeButton, setActiveButton] = useState("button1");
  const [ImageactiveButton, setImageactiveButton] = useState("Iamgebutton1");
  const navigate = useNavigate();
  const ImagehandleButtonClick = (IamedebuttonName) => {
    setImageactiveButton(IamedebuttonName);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const { loading, product } = useSelector((state) => state.productState);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const [imagepath, setimagepath] = useState(null);

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={product.bikename} />
          <div className="widthofthebuypagelfexdiv">
            <div className="buypagedivsectionwiedrth">
              <div>
                {/* <!--------------------------------Banner-----------------------------------------> */}
                <div className="buypagebannerarea">
                  <div className="buypagimagebenersection">
                    <img
                      // src="https://i.ibb.co/rwPgKrQ/Buy-Page-Banner.png"
                      src="/images/HomeBanner.png"
                      alt="Buy-Page-Banner"
                    />
                    <div className="buypagiparagraghsection">
                      <h2>Buy</h2>
                      <span className="buypagespansectionforbanner">
                        <div>
                          Discover trusted and verified used bikes on RevNitro
                          classNameified. Explore detailed listings, filter by
                          preferences, and join a community of bike enthusiasts.
                          Find your perfect ride with confidence today!
                        </div>
                      </span>
                      <div className="buypagesearchinputboxes">
                        <div className="buypagecontainer">
                          <form>
                            <div className="formnamedivforbuypagesdivs">
                              <div>
                                <input
                                  className="buypagesearchareaforbikes"
                                  type="search"
                                  placeholder="Search here"
                                />
                              </div>

                              <div>
                                <button type="submit">Search here</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--------------------------------Banner----------------------------------------->
        <!--------------------------------Bike Info Section-----------------------------------------> */}
                <div className="buypagebikesmarginpage">
                  <div className="buypagebikesmaindiv">
                    <div className="buypagebikeinfosection">
                      {/* <div className="buypagebikemainpicture">
                        <img src={imagepath} alt="" />
                      </div>
                      <div className="buypagebikescolumns">
                        {product.images &&
                          product.images.slice(1, -1).map((image, index) => (
                            <div key={index} className="buypagebike1">
                              <img
                                onClick={() => setimagepath(image.image)}
                                className={
                                  ImageactiveButton === "Iamgebutton1"
                                    ? "active"
                                    : ""
                                }
                                src={image.image}
                                alt="productImage"
                              />
                            </div>
                          ))}
                      </div> */}

                      {product.images &&
                        product.images.slice(0, 1).map((image) => (
                          <div className="buypagebuybikeimages">
                            <div
                              className="buypagebikemainpicture"
                              key={image._id}
                            >
                              {ImageactiveButton === "Iamgebutton1" && (
                                <img src={product.images[1].image} />
                              )}

                              {ImageactiveButton === "Iamgebutton2" && (
                                <img src={product.images[2].image} alt="" />
                              )}

                              {ImageactiveButton === "Iamgebutton3" && (
                                <img src={product.images[3].image} alt="" />
                              )}

                              {ImageactiveButton === "Iamgebutton4" && (
                                <img src={product.images[4].image} alt="" />
                              )}
                            </div>

                            <div className="buypagebikescolumns">
                              <div className="buypagebike1">
                                <img
                                  onClick={() =>
                                    ImagehandleButtonClick("Iamgebutton1")
                                  }
                                  className={
                                    ImageactiveButton === "Iamgebutton1"
                                      ? "active"
                                      : ""
                                  }
                                  src={product.images[1].image}
                                  alt=""
                                />
                              </div>
                              <div className="buypagebike1">
                                <img
                                  onClick={() =>
                                    ImagehandleButtonClick("Iamgebutton2")
                                  }
                                  className={
                                    ImageactiveButton === "Iamgebutton2"
                                      ? "active"
                                      : ""
                                  }
                                  src={product.images[2].image}
                                  alt=""
                                />
                              </div>
                              <div className="buypagebike1">
                                <img
                                  onClick={() =>
                                    ImagehandleButtonClick("Iamgebutton3")
                                  }
                                  className={
                                    ImageactiveButton === "Iamgebutton3"
                                      ? "active"
                                      : ""
                                  }
                                  src={product.images[3].image}
                                  alt=""
                                />
                              </div>
                              <div
                                className="buypagebike1"
                                id="buypageseemoreoption"
                              >
                                <img
                                  id="buypagesebackgroundimageblur"
                                  onClick={() =>
                                    ImagehandleButtonClick("Iamgebutton4")
                                  }
                                  className={
                                    ImageactiveButton === "Iamgebutton4"
                                      ? "active"
                                      : ""
                                  }
                                  src={product.images[4].image}
                                  alt=""
                                />
                              </div>
                            </div>

                            <div className="buypagebikesvideos">
                              <video
                                width="500"
                                height="240"
                                controls
                                autoPlay
                                muted
                              >
                                <source
                                  // src={product.images[5].image.mp4}
                                  type="video/mp4"
                                />
                                <source
                                  // src={product.images[5].image.mp4}
                                  type="video/ogg"
                                />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          </div>
                        ))}
                    </div>
                    {/* <!--------------------------------Bike images-----------------------------------------> */}

                    {/* <!--------------------------------Bike images-----------------------------------------> */}

                    {/* <!--------------------------------Bike buypageDescription-----------------------------------------> */}
                    <div className="buypagebikedescription">
                      <div className="buypagebikenameandshare">
                        <div className="bikesnametop">
                          <h3 className="bikeNameoftheProduct">
                            {product.bikename}
                          </h3>
                        </div>
                        <div>
                          <Link to="/mywishlists">
                            <img
                              // onClick={addtowishlist}
                              onClick={() => {
                                dispatch(WishListItem(product._id, quantity));
                                toast("Added to Wishlist", {
                                  type: "success",
                                  position: toast.POSITION.BOTTOM_CENTER,
                                });
                              }}
                              className="cursorpointer"
                              src="/images/VectorLikeImage.png"
                              alt=""
                            />
                          </Link>
                          &nbsp;
                          <img
                            onClick={sharebikedetails}
                            className="cursorpointer"
                            src="/images/material-symbols_share.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="buypagbikepricesection">
                        &#x20b9; <span>{product.price}</span>
                      </div>
                      <div className="buypagloactionofuser">
                        {product.bikelocation}
                      </div>
                      <div className="buypagebikespecifications">
                        <div>
                          <button
                            onClick={() => handleButtonClick("button1")}
                            className={
                              activeButton === "button1" ? "active" : ""
                            }
                          >
                            Bike Details
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => handleButtonClick("button2")}
                            className={
                              activeButton === "button2" ? "active" : ""
                            }
                          >
                            Inspection Details
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => handleButtonClick("button3")}
                            className={
                              activeButton === "button3" ? "active" : ""
                            }
                          >
                            Other Details
                          </button>
                        </div>
                      </div>

                      <div className="buypagelinediv">
                        <hr />
                      </div>
                      {activeButton === "button1" && (
                        <div>
                          <div className="buypageDescription">
                            <h2>Description</h2>
                          </div>
                          <div className="buypagebikecontent">
                            {product.bikedescription}
                          </div>

                          <div className="aboutbikedetails">
                            <div className="defaultbikename">
                              <div>Brand</div>
                              <div>Model</div>
                              <div>Engine Capacity</div>
                              <div>Kilometer</div>
                              <div>Insurance</div>
                              <div>Year</div>
                              <div>Ownership</div>
                            </div>
                            <div className="dynamicdata">
                              <div>
                                :&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{product.bikebrand}</span>
                              </div>
                              <div>
                                :&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{product.bikemodel}</span>
                              </div>

                              <div>
                                :&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{product.bikeCCtypecategories}</span>
                              </div>

                              <div>
                                :&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{product.bikekm}</span>
                              </div>
                              <div>
                                :&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{product.bikeinsurance}</span>
                              </div>
                              <div>
                                :&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{product.bikeyear}</span>
                              </div>
                              <div>
                                :&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>{product.bikeownership}</span>
                              </div>
                            </div>
                          </div>
                          <div className="finalpricediv">
                            Price ₹ <span>{product.price}</span>
                          </div>
                          <div className="finalbuyprice">
                            <span>
                              <button
                                // onClick={checkoutHandler}
                                onClick={() => {
                                  dispatch(addCartItem(product._id, quantity));
                                  toast("Added to Booking", {
                                    type: "success",
                                    position: toast.POSITION.BOTTOM_CENTER,
                                  });
                                  navigate("/login?redirect=shipping");
                                }}
                                className="bookatestride"
                              >
                                Book a Test Ride
                              </button>
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>
                              <button
                                // onClick={checkoutHandler}
                                onClick={() => {
                                  dispatch(addCartItem(product._id, quantity));
                                  toast("Added to Booking", {
                                    type: "success",
                                    position: toast.POSITION.BOTTOM_CENTER,
                                  });
                                  navigate("/login?redirect=shipping");
                                }}
                                className="booknowbutton"
                              >
                                Book now
                              </button>
                            </span>
                          </div>
                        </div>
                      )}

                      {activeButton === "button2" && (
                        <div>
                          <div className="buypageDescription">
                            <h2>Inspection Deatils</h2>
                          </div>
                          {/* <!------------------Engine Health--------------------> */}
                          <div className="buypagebikecontent">
                            <div className="buypagebikeconditionshow">
                              <div className="buypagebikeconditionshow1">
                                <div>Engine Health</div>
                                <div className="buypageratingofbikecondition">
                                  <div className="buypageratingsflex">
                                    <div className="buypageratingnumbers">
                                      {product.enginehealth}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="engineHealthdivsforthedynamicssd">
                                {/* {product.enginehealth} */}
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s
                              </div>
                            </div>
                          </div>
                          {/* <!------------------Engine Health-------------------->
                <!------------------Electrical Health--------------------> */}
                          <div className="buypagebikecontent">
                            <div className="buypagebikeconditionshow">
                              <div className="buypagebikeconditionshow1">
                                <div>Electrical Health</div>
                                <div className="buypageratingofbikecondition">
                                  <div className="buypageratingsflex">
                                    <div className="buypageratingnumbers">
                                      {product.electricalhealth}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="engineHealthdivsforthedynamicssd">
                                {/* {product.enginehealth} */}
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s
                              </div>
                            </div>
                          </div>
                          {/* <!------------------Electrical Health-------------------->
                <!------------------Mechanical and chasssis Health--------------------> */}
                          <div className="buypagebikecontent">
                            <div className="buypagebikeconditionshow">
                              <div className="buypagebikeconditionshow1">
                                <div>Mechanical and Chassis Health</div>
                                <div className="buypageratingofbikecondition">
                                  <div className="buypageratingsflex">
                                    <div className="buypageratingnumbers">
                                      {product.mechanicalchasishealth}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="engineHealthdivsforthedynamicssd">
                                {/* {product.enginehealth} */}
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s
                              </div>
                            </div>
                          </div>
                          {/* <!------------------Mechanical and chasssis Health-------------------->
                <!------------------paint and faring Health--------------------> */}

                          <div className="buypagebikecontent">
                            <div className="buypagebikeconditionshow">
                              <div className="buypagebikeconditionshow1">
                                <div>Paint and Fairing Health</div>
                                <div className="buypageratingofbikecondition">
                                  <div className="buypageratingsflex">
                                    <div className="buypageratingnumbers">
                                      {product.paintfaringhealth}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="engineHealthdivsforthedynamicssd">
                                {/* {product.enginehealth} */}
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s
                              </div>
                            </div>
                          </div>

                          {/* <!------------------paint and faring Health-------------------->
                <!------------------Tyre Health--------------------> */}

                          <div className="buypagebikecontent">
                            <div className="buypagebikeconditionshow">
                              <div className="buypagebikeconditionshow1">
                                <div>Tyre</div>
                                <div className="buypageratingofbikecondition">
                                  <div className="buypageratingsflex">
                                    <div className="buypageratingnumbers">
                                      {product.tyre}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="engineHealthdivsforthedynamicssd">
                                {/* {product.enginehealth} */}
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s
                              </div>
                            </div>
                          </div>

                          {/* <!------------------Tyre Health--------------------> */}

                          <div className="finalpricediv">
                            Price ₹ <span>{product.price}</span>
                          </div>
                          <div className="finalbuyprice">
                            <span>
                              <button
                                // onClick={checkoutHandler}
                                onClick={() => {
                                  dispatch(addCartItem(product._id, quantity));
                                  toast("Added to Booking", {
                                    type: "success",
                                    position: toast.POSITION.BOTTOM_CENTER,
                                  });
                                  navigate("/login?redirect=shipping");
                                }}
                                className="bookatestride"
                              >
                                Book a Test Ride
                              </button>
                            </span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>
                              <button
                                // onClick={checkoutHandler}
                                onClick={() => {
                                  dispatch(addCartItem(product._id, quantity));
                                  toast("Added to Booking", {
                                    type: "success",
                                    position: toast.POSITION.BOTTOM_CENTER,
                                  });
                                  navigate("/login?redirect=shipping");
                                }}
                                className="booknowbutton"
                              >
                                Book now
                              </button>
                            </span>
                          </div>
                        </div>
                      )}

                      {activeButton === "button3" && (
                        <div>
                          <div className="buypageDescription">
                            <h2>Other Deatils</h2>
                          </div>
                          <div className="buypagebikecontent">
                            <div>
                              <div className="otherDetailsofbike">
                                <h2>Power :</h2>
                              </div>
                              <div className="bikeotherdetailsContent">
                                {product.power}
                              </div>
                              <div className="otherDetailsofbike">
                                <h2>Torque :</h2>
                              </div>
                              <div className="bikeotherdetailsContent">
                                {product.torque}
                              </div>
                              <div className="otherDetailsofbike">
                                <h2>Mileage :</h2>
                              </div>
                              <div className="bikeotherdetailsContent">
                                {product.mileage}
                              </div>
                              <div className="finalpricediv">
                                Price ₹ <span>{product.price}</span>
                              </div>
                              <div className="finalbuyprice">
                                <span>
                                  <button
                                    // onClick={checkoutHandler}
                                    onClick={() => {
                                      dispatch(
                                        addCartItem(product._id, quantity)
                                      );
                                      toast("Added to Booking", {
                                        type: "success",
                                        position: toast.POSITION.BOTTOM_CENTER,
                                      });
                                      navigate("/login?redirect=shipping");
                                    }}
                                    className="bookatestride"
                                  >
                                    Book a Test Ride
                                  </button>
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                  <button
                                    // onClick={checkoutHandler}

                                    onClick={() => {
                                      dispatch(
                                        addCartItem(product._id, quantity)
                                      );
                                      toast("Added to Booking", {
                                        type: "success",
                                        position: toast.POSITION.BOTTOM_CENTER,
                                      });
                                      navigate("/login?redirect=shipping");
                                    }}
                                    className="booknowbutton"
                                  >
                                    Book now
                                  </button>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

function addtowishlist() {
  alert("Add to Wishlist");
}

function addlistclick() {
  alert("Hii");
}
function sharebikedetails() {
  alert("Share Button");
}
