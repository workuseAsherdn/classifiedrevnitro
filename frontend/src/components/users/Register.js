import "../layouts/css/loginpage.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, clearAuthError } from "../../actions/userActions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [avatar, setAvatar] = useState("");

  const [avatartPreview, stAvatarPreview] = useState("/images/profile.jpg");

  const [otp, setOtp] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.authState
  );

  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          stAvatarPreview(reader.result);
          setAvatar(e.target.files[0]);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("avatar", avatar);

    dispatch(register(formData));

    handleShow();
  };

  const signUpButton = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/v1/verify", otp);
    if (response.data === "success") {
      alert("Account Created Sucessfully click ok to Homepage");
      navigate("/");
    } else {
      alert(response.data);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
      return;
    }

    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearAuthError);
        },
      });
      return;
    }
  }, [error, isAuthenticated, dispatch, navigate]);

  return (
    <div className="signupppageflexmainconcept">
      <div className="signupspagemaindiv">
        <div className="signupbodylast">
          <div className="backgroungimage">
            <img
              className="mobileversionhide"
              src="./images/Vector41.png"
              alt=""
            />
            <img
              className="desktopversionhide"
              src="./images/Vector42.png"
              alt=""
            />
          </div>
          <div className="signupform1">
            <div className="signupformwelcome1">Welcome</div>
            <div className="loginloremtext124">
              Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </div>
            <div className="signupformdetails1">SignUp</div>
            <form onSubmit={submitHandler} action="">
              <div className="formdivflexsigninform">
                <div className="signupforminputformbox12">
                  <input
                    type="text"
                    name="name"
                    onChange={onChange}
                    placeholder="User Name"
                  />
                </div>
                <div className="signupforminputformbox12">
                  <input
                    type="email"
                    name="email"
                    onChange={onChange}
                    placeholder="Email Id"
                  />
                </div>
                <div className="signupforminputformbox12">
                  <input
                    type="password"
                    name="password"
                    onChange={onChange}
                    placeholder="Password"
                  />
                </div>
                {/* 
                <div class="form-group">
                  <label for="avatar_upload">Avatar</label>
                  <div class="d-flex align-items-center">
                    <div>
                      <figure class="avatar mr-3 item-rtl">
                        <img
                          src={avatartPreview}
                          class="rounded-circle"
                          alt="image"
                        />
                      </figure>
                    </div>
                    <div class="custom-file">
                      <input
                        type="file"
                        name="avatar"
                        class="custom-file-input"
                        id="customFile"
                        onChange={onChange}
                      />
                      <label class="custom-file-label" for="customFile">
                        Choose Avatar
                      </label>
                    </div>
                  </div>
                </div> */}

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Please Enter OTP</Modal.Title>
                  </Modal.Header>
                  <Modal.Body
                  //  style={{ paddingLeft: "30px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: "50px",
                      }}
                    >
                      <div className="signupforminputformbox12">
                        <input
                          type="text"
                          name="emailPassword"
                          // onChange={onChange}
                          onChange={(e) => setOtp(e.target.value)}
                          placeholder="Enter OTP"
                        />
                        <button
                          onClick={signUpButton}
                          //  disabled={loading}
                        >
                          Sign up
                        </button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>

                <button disabled={loading}>Sign up</button>
                <div className="signupformdonthaveaccount12">
                  Already have an account ?
                  <Link to="/login" style={{ backgroundColor: "transparent" }}>
                    <a href="">&nbsp;Log in</a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
