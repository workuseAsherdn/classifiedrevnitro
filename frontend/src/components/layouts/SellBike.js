import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
export default function SellBike() {
  const [formdata, setFormdata] = useState({
    Sellbrand: "",
    Sellmodel: "",
    Sellyear: "",
    Sellkm: "",
    SellImage1: "",
    SellImage2: "",
    SellImage3: "",
    SellImage4: "",
    SellImage5: "",
    SellImage6: "",
    SellImage7: "",
    SellImage8: "",
    SellImage9: "",
    SellImage10: "",
    OwnerORSeller: "",
    SellName: "",
    Email: "",
    Mobile: "",
    Location: "",
  });

  const [imageLink, setImageLink] = useState("");

  const [loading, setLoading] = useState(false); // State for loading indicator
  const handleFileInputChange = async (e, index) => {
    const file = e.target.files[0];
    if (!file) {
      alert("Please select an image to upload.");
      return;
    }
    const formData = new FormData();
    formData.append("sampleFile", file);
    try {
      setLoading(true); // Set loading to true when upload starts
      const response = await axios.post(`/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const imageUrl = response.data.link;

      setFormdata({
        ...formdata,
        [`SellImage${index}`]: imageUrl,
      });

      // alert("File Successfully Uploaded");
      toast("Image Upload Succesfully", {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
      });

      setLoading(false); // Set loading to false after successful upload
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Profile Picture Upload Failed. Please try again.");
      setLoading(false); // Set loading to false if upload fails
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/mail", formdata);
      if (response.data === "Success") {
        alert("Successfully Uploaded");
        navigate("/");
      } else {
        alert("Failed");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div>
        <div>
          <div className="sellpagedivflexcontenet">
            <div className="sellpagedivwidthmaindiv">
              {/* <!------------------------------About Section---------------------------> */}
              <div className="sellourBikeaboutsection">
                <img src="/images/SellPageImage.png" alt="" />
                <div className="sellourBikeaboutsectioncontent">
                  <div className="sellourBikeaboutheading">Sell your Bike</div>
                  <div className="sellourBikeaboutparagraph">
                    " RevNitro classified is your trusted destination for
                    selling pre-owned motorbikes. With our secure and
                    user-friendly platform, we make it easy to find the right
                    buyer for your bike. Simply leave your bike with us at Pro
                    Street, where our expert team conducts thorough inspections
                    and facilitates the sale based on the vehicle's condition.
                    We prioritize transparency and reliability, ensuring a
                    seamless experience for both sellers and buyers."
                  </div>
                </div>
              </div>
              {/* <!-------------------------------About Section--------------------------->
          <!------------------------------------Upload Section---------------------------------> */}

              <div className="sellourBikesellerbikeuploadsection">
                <div className="sellourheadingforbikeselling">
                  Give details of your bike
                </div>
                <div className="sellourinputformsellerbike">
                  <div className="sellourinbackgroundwhitediv">
                    <div className="sellourisellerbikedeatils">
                      Bike Details
                    </div>

                    <form onSubmit={handleSubmit}>
                      {/* <!----------------------DropDown--------------------------> */}
                      <div className="selectdropdownflex">
                        <div>
                          <input
                            className="Brandname"
                            type="text"
                            placeholder="Brand"
                            value={formdata.Sellbrand}
                            onChange={(e) => {
                              setFormdata({
                                ...formdata,
                                Sellbrand: e.target.value,
                              });
                            }}
                          />
                        </div>

                        <div>
                          <input
                            className="bikemodel"
                            type="text"
                            placeholder="Model"
                            value={formdata.Sellmodel}
                            onChange={(e) => {
                              setFormdata({
                                ...formdata,
                                Sellmodel: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div>
                          <input
                            className="bikeyearsaz"
                            type="text"
                            placeholder="Year"
                            value={formdata.Sellyear}
                            onChange={(e) => {
                              setFormdata({
                                ...formdata,
                                Sellyear: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div>
                          <input
                            className="kilometerinput"
                            placeholder="Kilometre"
                            type="text"
                            name="kilometer"
                            value={formdata.Sellkm}
                            onChange={(e) => {
                              setFormdata({
                                ...formdata,
                                Sellkm: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      {/* <!----------------------DropDown -------------------------->

                  <!-----------------------Bike Document------------------------> */}
                      <div className="sellourisellerbikedeatils">
                        Bike Document
                      </div>

                      {/* <!----------------------------RC Deatils----------------------------> */}

                      <div className="sellouruploadrcbook">
                        Upload RC Book Photocopies
                      </div>

                      <div className="sellourrcbookflex">
                        <div className="sellouraddphotosupload">
                          <div className="file-input">
                            <input
                              type="file"
                              name="file-input"
                              id="file-input1"
                              className="file-input__input"
                              onChange={(e) => {
                                handleFileInputChange(e, 1);
                              }}
                            />
                            <label
                              className="file-input__label"
                              htmlFor="file-input1"
                            >
                              <img
                                src="./images/SelllnfUploadiMage.png"
                                alt=""
                              />
                              <span className="uploadimagecreatepost"></span>
                            </label>
                          </div>
                          {formdata.SellImage1 && (
                            <div>Uploaded Successfully</div>
                          )}
                        </div>
                        <div className="sellouraddphotosupload">
                          <div className="file-input">
                            <input
                              type="file"
                              name="file-input"
                              id="file-input2"
                              className="file-input__input"
                              onChange={(e) => {
                                handleFileInputChange(e, 2);
                              }}
                            />
                            <label
                              className="file-input__label"
                              htmlFor="file-input2"
                            >
                              <img
                                src="./images/SelllnfUploadiMage.png"
                                alt=""
                              />
                              <span className="uploadimagecreatepost"></span>
                            </label>
                          </div>
                          {formdata.SellImage2 && (
                            <div>Uploaded Successfully</div>
                          )}
                        </div>
                        <div className="sellouraddphotosupload">
                          <div className="file-input">
                            <input
                              type="file"
                              name="file-input"
                              id="file-input3"
                              className="file-input__input"
                              onChange={(e) => {
                                handleFileInputChange(e, 3);
                              }}
                            />
                            <label
                              className="file-input__label"
                              htmlFor="file-input3"
                            >
                              <img
                                src="./images/SelllnfUploadiMage.png"
                                alt=""
                              />
                              <span className="uploadimagecreatepost"></span>
                            </label>
                          </div>
                          {formdata.SellImage3 && (
                            <div>Uploaded Successfully</div>
                          )}
                        </div>
                      </div>
                      {/* <!----------------------------RC Deatils---------------------------->

                  <!----------------------------Insurance Deatils----------------------------> */}
                      <div className="sellouruploadrcbook">
                        Upload Bike Insurance Photocopies
                      </div>

                      <div className="sellourrcbookflex">
                        <div className="sellouraddphotosupload">
                          <div className="file-input">
                            <input
                              type="file"
                              name="file-input"
                              id="file-input4"
                              className="file-input__input"
                              onChange={(e) => {
                                handleFileInputChange(e, 4);
                              }}
                            />
                            <label
                              className="file-input__label"
                              htmlFor="file-input4"
                            >
                              <img
                                src="./images/SelllnfUploadiMage.png"
                                alt=""
                              />
                              <span className="uploadimagecreatepost"></span>
                            </label>
                          </div>
                          {formdata.SellImage4 && (
                            <div>Uploaded Successfully</div>
                          )}
                        </div>
                        <div className="sellouraddphotosupload">
                          <div className="file-input">
                            <input
                              type="file"
                              name="file-input5"
                              id="file-input5"
                              className="file-input__input"
                              onChange={(e) => {
                                handleFileInputChange(e, 5);
                              }}
                            />
                            <label
                              className="file-input__label"
                              htmlFor="file-input5"
                            >
                              <img
                                src="./images/SelllnfUploadiMage.png"
                                alt=""
                              />
                              <span className="uploadimagecreatepost"></span>
                            </label>
                          </div>
                          {formdata.SellImage5 && (
                            <div>Uploaded Successfully</div>
                          )}
                        </div>
                        <div className="sellouraddphotosupload">
                          <div className="file-input">
                            <input
                              type="file"
                              name="file-input6"
                              id="file-input6"
                              className="file-input__input"
                              onChange={(e) => {
                                handleFileInputChange(e, 6);
                              }}
                            />
                            <label
                              className="file-input__label"
                              htmlFor="file-input6"
                            >
                              <img
                                src="./images/SelllnfUploadiMage.png"
                                alt=""
                              />
                              <span className="uploadimagecreatepost"></span>
                            </label>
                          </div>
                          {formdata.SellImage6 && (
                            <div>Uploaded Successfully</div>
                          )}
                        </div>
                      </div>

                      {/* <!----------------------------Insurance Deatils---------------------------->
                  <!----------------------------Video Deatils----------------------------> */}
                      <div className="sellouruploadrcbook">
                        Upload Bike Photo with Owner
                      </div>

                      <div className="sellourrcbookflex">
                        <div className="sellouraddphotosupload">
                          <div className="file-input">
                            <input
                              type="file"
                              name="file-input7"
                              id="file-input7"
                              className="file-input__input"
                              onChange={(e) => {
                                handleFileInputChange(e, 7);
                              }}
                            />
                            <label
                              className="file-input__label"
                              htmlFor="file-input7"
                            >
                              <img
                                src="./images/SelllnfUploadiMage.png"
                                alt=""
                              />
                              <span className="uploadimagecreatepost"></span>
                            </label>
                          </div>
                          {formdata.SellImage7 && (
                            <div>Uploaded Successfully</div>
                          )}
                        </div>
                        <div className="sellouraddphotosupload">
                          <div className="file-input">
                            <input
                              type="file"
                              name="file-input8"
                              id="file-input8"
                              className="file-input__input"
                              onChange={(e) => {
                                handleFileInputChange(e, 8);
                              }}
                            />
                            <label
                              className="file-input__label"
                              htmlFor="file-input8"
                            >
                              <img
                                src="./images/SelllnfUploadiMage.png"
                                alt=""
                              />
                              <span className="uploadimagecreatepost"></span>
                            </label>
                          </div>
                          {formdata.SellImage8 && (
                            <div>Uploaded Successfully</div>
                          )}
                        </div>
                      </div>

                      {/* <!----------------------------Video Deatils---------------------------->

                  <!----------------------------Bike Images Deatils----------------------------> */}
                      <div className="sellouruploadrcbook">
                        Upload Bike Images
                      </div>

                      <div className="sellourrcbookflex">
                        <div className="sellouraddphotosupload">
                          <div className="file-input">
                            <input
                              type="file"
                              name="file-input9"
                              id="file-input9"
                              className="file-input__input"
                              onChange={(e) => {
                                handleFileInputChange(e, 9);
                              }}
                            />
                            <label
                              className="file-input__label"
                              htmlFor="file-input9"
                            >
                              <img
                                src="./images/SelllnfUploadiMage.png"
                                alt=""
                              />
                              <span className="uploadimagecreatepost"></span>
                            </label>
                          </div>
                          {formdata.SellImage9 && (
                            <div>Uploaded Successfully</div>
                          )}
                        </div>
                        <div className="sellouraddphotosupload">
                          <div className="file-input">
                            <input
                              type="file"
                              name="file-input10"
                              id="file-input10"
                              className="file-input__input"
                              onChange={(e) => {
                                handleFileInputChange(e, 10);
                              }}
                            />
                            <label
                              className="file-input__label"
                              htmlFor="file-input10"
                            >
                              <img
                                src="./images/SelllnfUploadiMage.png"
                                alt=""
                              />
                              <span className="uploadimagecreatepost"></span>
                            </label>
                          </div>
                          {formdata.SellImage10 && (
                            <div>Uploaded Successfully</div>
                          )}
                        </div>
                      </div>
                      {/* <!----------------------------Bike Images Deatils---------------------------->

                  <!-----------------------Bike Document------------------------>

                  <!--------------------------Owner Deatils-----------------------------------------> */}
                      <div className="sellourisellerbikedeatils1">
                        Owner Details
                      </div>
                      <div className="sellourOwnerDeatils">
                        Ownership &nbsp;or&nbsp; Seller
                      </div>

                      <div className="sellourownerdeatilsflex">
                        <div>
                          <input
                            type="text"
                            className="sellourowneBrandname1"
                            placeholder="OwnerShip"
                            value={formdata.OwnerORSeller}
                            onChange={(e) => {
                              setFormdata({
                                ...formdata,
                                OwnerORSeller: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div>
                          <input
                            className="sellourNameoftheOwner"
                            placeholder="Name*"
                            type="text"
                            name="Name*"
                            value={formdata.SellName}
                            onChange={(e) => {
                              setFormdata({
                                ...formdata,
                                SellName: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div>
                          <input
                            className="sellourNameoftheOwner"
                            placeholder="Email Id*"
                            type="email"
                            name="Email"
                            value={formdata.Email}
                            onChange={(e) => {
                              setFormdata({
                                ...formdata,
                                Email: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div>
                          <input
                            className="sellourNameoftheOwner"
                            placeholder="Mobile No*"
                            type="text"
                            name="Mobile"
                            value={formdata.Mobile}
                            onChange={(e) => {
                              setFormdata({
                                ...formdata,
                                Mobile: e.target.value,
                              });
                            }}
                          />
                        </div>
                        <div>
                          <input
                            className="sellourNameoftheOwner"
                            placeholder="Location*"
                            type="text"
                            name="Location"
                            value={formdata.Location}
                            onChange={(e) => {
                              setFormdata({
                                ...formdata,
                                Location: e.target.value,
                              });
                            }}
                          />
                        </div>

                        <div className="sellourownwersubmit">
                          <button>Submit</button>
                        </div>
                      </div>
                    </form>

                    {/* <!--------------------------Owner Deatils-----------------------------------------> */}
                  </div>
                </div>
              </div>
              {/* <!------------------------------------Upload Section---------------------------------> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
