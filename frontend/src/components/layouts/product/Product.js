import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { orderCompleted } from "../../../slicers/cartSlice";
import { WishListItem } from "../../../actions/wishListActions";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Product({ product }) {
  // const [color, setColor] = useState("#cdcdcd");
  const [color, setColor] = useState("#cdcdcd");
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  // const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const processPayment = () => {
    dispatch(orderCompleted());
  };

  const WishList = JSON.parse(localStorage.getItem("WishListItems"));

  async function queueData(product) {
    try {
      const response = await axios.post(`/api/v1/queue/${product}`);
      if (response.data.success === true) {
        return setQueueCount(String(response.data.length));
      } else {
        return setQueueCount("x");
      }
    } catch (e) {
      console.error(e);
    }
  }

  const [queueCounts, setQueueCount] = useState("0");

  useEffect(() => {
    queueData(product._id);
    // dispatch(getProduct(id));
  }, []);

  return (
    <div className="buyPagebikecards">
      <div className="buyPagebikebackgroundsection">
        <div className="buyPagebiimageaddlistrelative">
          <img
            className="buyPageimagesize"
            src={product.images[0].image}
            alt=""
          />
          <div className="buyPageaddlistposition">
            <Link to="/mywishlists" style={{ background: "none" }}>
              {console.log("WishList")}
              {product &&
              WishList &&
              WishList.some((prod) => prod.product === product._id) ? (
                <i
                  className="fa fa-heart"
                  id="heartcoulour"
                  style={{ color: "red" }}
                  // onClick={likebuttonclick}
                  onClick={() => {
                    dispatch(WishListItem(product._id, quantity));
                    toast("Added to Wishlist", {
                      type: "success",
                      position: toast.POSITION.BOTTOM_CENTER,
                    });
                  }}
                />
              ) : (
                <i
                  className="fa fa-heart"
                  id="heartcoulour"
                  // style={{ color: "red" }}
                  // onClick={likebuttonclick}
                  onClick={() => {
                    dispatch(WishListItem(product._id, quantity));
                    toast("Added to Wishlist", {
                      type: "success",
                      position: toast.POSITION.BOTTOM_CENTER,
                    });
                  }}
                />
              )}
            </Link>
          </div>

          <div className="buyPageaddlistposition1">
            <Link style={{ background: "none" }}>
              {/* {console.log("WishList")} */}

              <div className="queeueListDivcflex">
                <div>
                  <img src="/images/ViewBikeImagerevnitro.png" />
                </div>
                <div className="Numberofusewrsonthediv"> {queueCounts}</div>
                <div className="Numberofusewrsonthediv">Queue</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="buyPagecontentsection">
          <span className="buyPagebikename">
            <div>{product.bikename}</div>
          </span>
          <div>
            <span className="buyPagspecification">
              <span className="odoofbike">{product.bikekm}</span>
              km |<span className="typeofvechicle"> {product.biketype}</span> |
              <span className="bikeyear"> {product.bikeyear}</span> |
              <span className="emmisontype"> {product.bikeemmision}</span>
            </span>
          </div>
          <div>
            <Link to={`/product/${product._id}`}>
              <button
                onClick={processPayment}
                className="buyPagsbikeviewbutton"
              >
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
