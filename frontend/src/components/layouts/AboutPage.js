export default function AboutPage() {
  let currentIndex = 0;
  function nextSlide() {
    currentIndex = (currentIndex + 1) % 6; // Adjust the number based on the number of cards
    updateSlider();
  }
  function prevSlide() {
    currentIndex = (currentIndex - 1 + 6) % 6; // Adjust the number based on the number of cards
    updateSlider();
  }
  function updateSlider() {
    const sliderContent = document.querySelector(".slider-content");
    const cardWidth = document.querySelector(".review-card").offsetWidth + 20; // Adjusted width including margin
    sliderContent.style.transform = `translateX(${
      -currentIndex * cardWidth
    }px)`;
  }
  return (
    <div>
      <div>
        <div className="aboutsectionflexdivcontetnet">
          <div className="aboutsecriondicvwidth">
            {/* <!------------------------------About Section---------------------------> */}

            <div className="aboutsection12">
              <img src="/images/AboutSectionImage.png" alt="" />
              <div className="aboutsection12content">
                <div className="aboutheading">About</div>
                <div className="aboutparagraph">
                  RevNitro is your trusted platform for motorbikes. We ensure
                  each bike's reliability through rigorous inspections,
                  transparent listings, and a user-friendly experience. Find
                  your dream ride or sell with confidence at RevNitro Resale.
                </div>
              </div>
            </div>
            {/* <!-------------------------------About Section--------------------------->
        <!-------------------------------Our Service Section---------------------------> */}
            <div className="servicesectionbackgrounColor">
              <div className="aboutsercionservicedivflex">
                <div className="ourserviccesectionphotos">
                  <div className="desktopversionhideaboutsetcionpage">
                    <img src="./images/serViceImagePhoto.png" alt="" />
                  </div>
                  <div className="mobilesversionhideaboutsetcionpage">
                    <img src="./images/serViceImagePhotoFormobile.png" alt="" />
                  </div>
                </div>
                <div className="oursefrcionaboutsectionwidth">
                  <div className="clasourSectionDiv">Our Service</div>
                  <div className="oursectonfirstdtiv">
                    RevNitro Resale is a dedicated section of the RevNitro
                    website, focused on providing a trusted platform for buying
                    and selling used motorbikes. At RevNitro Resale, we
                    prioritize the quality and reliability of every motorbike
                    listed for sale. Our comprehensive inspection process
                    ensures that each bike is thoroughly examined and verified
                    for its condition, maintenance history, and overall
                    performance.
                  </div>
                  <div className="oursectonSeconddtiv">
                    We aim to offer a hassle-free experience for both sellers
                    and buyers. Sellers can confidently list their used
                    motorbikes, knowing that they will reach a discerning
                    audience looking for quality pre-owned bikes. Buyers, on the
                    other hand, can browse a curated selection of used
                    motorbikes, complete with detailed descriptions,
                    high-resolution photos, and transparent pricing.
                  </div>
                  <div className="oursectonthreeedtiv">
                    With RevNitro Resale, we're committed to providing a secure
                    and user-friendly online marketplace that prioritizes trust,
                    quality, and customer satisfaction. Whether you're looking
                    to sell your beloved motorbike or find the perfect pre-owned
                    ride, RevNitro Resale is your destination for reliable and
                    well-inspected motorcycles.
                  </div>
                </div>
              </div>
              <div className="iconsservicesectionaboutpahe">
                <div className="servicesectioniconserctuinblue">
                  <div>
                    <img src="./images/Frame30.png" alt="" />
                  </div>
                  <div className="icosnservicedivwidthcontrol">
                    100% Inspected Vehicles
                  </div>
                </div>
                <div className="servicesectioniconserctuinblue">
                  <div>
                    <img
                      src="./images/mdi_file-document-box-search-outline.png"
                      alt=""
                    />
                  </div>
                  <div className="icosnservicedivwidthcontrol">
                    100% Document Verified
                  </div>
                </div>
                <div className="servicesectioniconserctuinblue">
                  <div>
                    <img
                      src="./images/eos-icons_trusted-organization.png"
                      alt=""
                    />
                  </div>
                  <div className="icosnservicedivwidthcontrol">
                    100% RevNitro Guarantee
                  </div>
                </div>
              </div>
            </div>

            {/* <!-------------------------------Our Service Section---------------------------> */}

            {/* <!-------------------------------Testimonal Section---------------------------> */}
            {/* <div className="testimonysection">
              <div className="slider-section">
                <div className="slider-container">
                  <div className="slider-content">
                    <div className="review-card">
                      <div className="flex-profile">
                        <div className="profile-image"></div>
                        <div className="heading-image">
                          <div className="heading">
                            <h3 className="name-cus">Ram</h3>
                          </div>
                        </div>
                      </div>
                      <p className="prop">
                        Borem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis.
                      </p>
                      <div className="reviwerimage">
                        <img src="./images/Rectangle 72 (1).png" alt="" />
                      </div>
                    </div>
                    <div className="review-card">
                      <div className="flex-profile">
                        <div className="profile-image"></div>
                        <div className="heading-image">
                          <div className="heading">
                            <h3 className="name-cus">Sheriff</h3>
                          </div>
                        </div>
                      </div>
                      <p className="prop">
                        Borem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis.
                      </p>
                      <div className="reviwerimage">
                        <img src="./images/Rectangle 75 (1).png" alt="" />
                      </div>
                    </div>
                    <div className="review-card">
                      <div className="flex-profile">
                        <div className="profile-image"></div>
                        <div className="heading-image">
                          <div className="heading">
                            <h3 className="name-cus">Jacob</h3>
                          </div>
                        </div>
                      </div>
                      <p className="prop">
                        Borem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis.
                      </p>
                      <div className="reviwerimage">
                        <img src="./images/Rectangle 74 (1).png" alt="" />
                      </div>
                    </div>
                    <div className="review-card">
                      <div className="flex-profile">
                        <div className="profile-image"></div>
                        <div className="heading-image">
                          <div className="heading">
                            <h3 className="name-cus">Ram</h3>
                          </div>
                        </div>
                      </div>
                      <p className="prop">
                        Borem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis.
                      </p>
                      <div className="reviwerimage">
                        <img src="./images/Rectangle 75 (1).png" alt="" />
                      </div>
                    </div>
                    <div className="review-card">
                      <div className="flex-profile">
                        <div className="profile-image"></div>
                        <div className="heading-image">
                          <div className="heading">
                            <h3 className="name-cus">Antony</h3>
                          </div>
                        </div>
                      </div>
                      <p className="prop">
                        Borem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis.
                      </p>
                      <div className="reviwerimage">
                        <img src="./images/Rectangle 73 (1).png" alt="" />
                      </div>
                    </div>
                    <div className="review-card">
                      <div className="flex-profile">
                        <div className="profile-image"></div>
                        <div className="heading-image">
                          <div className="heading">
                            <h3 className="name-cus">Antony</h3>
                          </div>
                        </div>
                      </div>
                      <p className="prop">
                        Borem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis.
                      </p>
                      <div className="reviwerimage">
                        <img src="./images/Rectangle 73 (1).png" alt="" />
                      </div>
                    </div>
                    <div className="review-card">
                      <div className="flex-profile">
                        <div className="profile-image"></div>
                        <div className="heading-image">
                          <div className="heading">
                            <h3 className="name-cus">Antony</h3>
                          </div>
                        </div>
                      </div>
                      <p className="prop">
                        Borem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis.
                      </p>
                      <div className="reviwerimage">
                        <img src="./images/Rectangle 73 (1).png" alt="" />
                      </div>
                    </div>
                    <div className="review-card">
                      <div className="flex-profile">
                        <div className="profile-image"></div>
                        <div className="heading-image">
                          <div className="heading">
                            <h3 className="name-cus">Antony</h3>
                          </div>
                        </div>
                      </div>
                      <p className="prop">
                        Borem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis.
                      </p>
                      <div className="reviwerimage">
                        <img src="./images/Rectangle 73 (1).png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <button className="prev" onClick={prevSlide}>
                  <img src="./images/carbon_next-filled (1).png" alt="" />
                </button>
                <button className="next" onClick={nextSlide}>
                  <img src="./images/carbon_next-filled.png" alt="" />
                </button>
                <div>
                  <h1>Testimony from our Customers</h1>
                </div>
                <div className="seemorebutton">
                  <button>See more</button>
                </div>
              </div>
            </div> */}
            {/* <!-------------------------------Testimonal Section---------------------------> */}
          </div>
        </div>
      </div>
    </div>
  );
}
