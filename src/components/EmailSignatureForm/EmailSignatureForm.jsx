import React, { useState, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import twitterIcon from "../../assets/icons/twitter.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import website from "../../assets/icons/website.svg";
import profile from "../../assets/icons/profile2.svg";
import template1 from "../../assets/t1.png";
import template2 from "../../assets/t2.png";
import template3 from "../../assets/t3.png";
import template4 from "../../assets/t4.png";


import "bootstrap/dist/css/bootstrap.min.css";

import Temp1 from "../Templates/temp1";
import Temp2 from "../Templates/temp2";
import Temp3 from "../Templates/temp3";
import Temp4 from "../Templates/temp4";

import EmailSignature from "./EmailSignature";

function EmailSignatureForm({ onFormSubmit }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [copySuccess, setCopySuccess] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    phone: "",
    mail: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    website: "",
    profileImage: null,
    selectedOption: "",
  });
  const containerRef = useRef();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if the file is an image and in the allowed formats
      if (!file.type.match("image/jpeg") && !file.type.match("image/png")) {
        alert("Please select an image file (jpeg, jpg, png).");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        // Set the image style based on the selected template
        const imageStyle = {
          width: "120px",
          height: "120px",
          objectFit: "cover",
          borderRadius:
            formData.selectedOption === "option1"
              ? "50%"
              : formData.selectedOption === "option2"
              ? "10%"
              : formData.selectedOption === "option3"
              ? "20%"
              : "0",
        };
        setFormData({ ...formData, profileImage: e.target.result, imageStyle });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOptionChange = (selectedOption) => {
    setFormData({ ...formData, selectedOption });
    setActiveTemplate(selectedOption);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidImage = (image) => {
    if (!image) {
      return false;
    }
    return (
      image.includes("data:image/jpeg") ||
      image.includes("data:image/jpg") ||
      image.includes("data:image/png")
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate phone number
    if (
      !formData.name ||
      !formData.designation ||
      !formData.phone ||
      !formData.mail ||
      !formData.website
    ) {
      alert("Please fill all the fields");
      return false;
    }
    if (!/^\d+$/.test(formData.phone)) {
      alert("Phone number must contain only numbers.");
      return;
    }
    if (!isValidEmail(formData.mail)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!isValidImage(formData.profileImage)) {
      alert("Please select a valid image (jpeg, jpg, png).");
      return;
    }
    // Validate if a radio option is selected
    if (!formData.selectedOption) {
      alert("Please select an option.");
      return;
    }
    copyToClipboard();
  };

  const copyToClipboard = () => {
    const html = ReactDOMServer.renderToStaticMarkup(renderTemplate());
    const tempDiv = document.createElement("div");
    tempDiv.contentEditable = true;
    tempDiv.innerHTML = html;
    document.body.appendChild(tempDiv);

    const range = document.createRange();
    range.selectNodeContents(tempDiv);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand("copy");
    document.body.removeChild(tempDiv);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000);
  };

  const renderTemplate = () => {
    switch (formData.selectedOption) {
      case "option1":
        return <Temp1 data={formData} />;
      case "option2":
        return <Temp2 data={formData} />;
      case "option3":
        return <Temp3 data={formData} />;
      case "option4":
        return <Temp4 data={formData} />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{ padding: "0px", height:'100%' }}
      className="container bootstrap snippets bootdeys pb-5 pt-3"
    >
      <div
        className="head "
        style={{
          width: "100%",
          height: "100px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom:'100px'
        }}
      >
        <h1 className="text-center m-0" style={{fontWeight:'900',fontSize:'56px'}}> <span style={{color:'#2473ff'}}> Signature</span> Generator</h1>{" "}
        {/* Header added here */}
      </div>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div
          className="row justify-content-center"
          style={{ marginTop: "0px", width:'100%', margin:'auto', height:'100%' }}
        >
          <div
            className="col-xs-8 col-sm-6 d-flex flex-column justify-content-center p-5 rounded-3 border"
            style={{ backgroundColor: "white" }}
          >
            <div className="panel panel-default">
              <div className=" d-flex justify-content-center align-items-end panel-body text-center">
                {formData.profileImage ? (
                  <img
                    src={formData.profileImage}
                    alt="User avatar"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <img src={profile} alt="User avatar" style={{width:'100px', height:'100px'}} />
                )}
                <div className="form-group text-center ms-2 pb-2">
                  <label
                    htmlFor="profileImage"
                    className="btn btn-block btn-outlined"
                    style={{backgroundColor:'#2478fe',color:'white', fontWeight:'600'}}
                  >
                    Choose Image
                  </label>
                  <input
                    id="profileImage"
                    type="file"
                    name="profileImage"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>

            <div className="panel panel-default mt-5 mb-4">
              <div
                className=" d-flex justify-content-center align-items-center rounded-3"
                style={{ height: "40px", backgroundColor:'#124391' }}
              >
                <h4
                  className="panel-title text-center m-0 fw-bold text-white "
                  style={{ fontSize: "20px" }}
                >
                  User Info
                </h4>
              </div>
              <div className="panel-body mt-1 pt-3 pb-3 ps-4 pe-4 border border-secondary rounded-3">
                <div className="row gap-3 justify-content-center">
                  <div className="form-group col-sm-6">
                    <label className="control-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label className="control-label">Your Designation</label>
                    <input
                      type="text"
                      className="form-control"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="row gap-3 justify-content-center">
                  <div className="form-group col-sm-6">
                    <label className="control-label">Your Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <label className="control-label">Your Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="mail"
                      value={formData.mail}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="panel panel-default d-flex flex-column justify-content-center mb-">
              <div
                className=" d-flex justify-content-center align-items-center rounded-3"
                style={{ height: "40px", backgroundColor:'#124391' }}
              >
                <h4
                  className="panel-title text-center m-0 fw-bold text-white "
                  style={{ fontSize: "20px" }}
                >
                  Social Links
                </h4>
              </div>
              <div className="panel-body d-flex flex-column mt-1 pt-3 pb-3 ps-4 pe-4 border border-secondary rounded-3">
                <div className="row gap-3 justify-content-center">
                  <div className="form-group col-sm-6">
                    <label className="control-label">Twitter</label>
                    <div className="input-group gap-2">
                      <span className="input-group-addon">
                        <img
                          className="social-icon"
                          src={twitterIcon}
                          alt="Twitter"
                        />
                      </span>
                      <input
                        type="url"
                        className="form-control"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleInputChange}
                        placeholder="Twitter URL"
                      />
                    </div>
                  </div>

                  <div className="form-group col-sm-6">
                    <label className="control-label">Facebook</label>
                    <div className="input-group gap-2">
                      <span className="input-group-addon">
                        <img
                          className="social-icon"
                          src={facebookIcon}
                          alt="Facebook"
                        />
                      </span>
                      <input
                        type="url"
                        className="form-control"
                        name="facebook"
                        value={formData.facebook}
                        onChange={handleInputChange}
                        placeholder="Facebook URL"
                      />
                    </div>
                  </div>
                </div>

                <div className="row gap-3 justify-content-center">
                  <div className="form-group col-sm-6">
                    <label className="control-label">LinkedIn</label>
                    <div className="input-group gap-2">
                      <span className="input-group-addon">
                        <img
                          className="social-icon"
                          src={linkedinIcon}
                          alt="Linkedin"
                        />
                      </span>
                      <input
                        type="url"
                        className="form-control"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        placeholder="LinkedIn URL"
                      />
                    </div>
                  </div>
                  <div className="form-group col-sm-6">
                    <label className="control-label">Website</label>
                    <div className="input-group gap-2">
                      <span className="input-group-addon">
                        <img
                          className="social-icon"
                          src={website}
                          alt="Linkedin"
                        />
                      </span>
                      <input
                        type="url"
                        className="form-control"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="Website URL"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-4 col-sm-6 pt-5 ps-2 bg-white rounded-3 border">
            <div
              className=" text-white d-flex align-items-center justify-content-center ps-2 rounded-3  "
              style={{ height: "40px",backgroundColor:'#124391'  }}
            >
              <h4 className="m-0">Choose a Template</h4>
            </div>
            <div
            className="rounded-3"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor:'#eaf0fe'
              }}
            >
              <Slider className="slider-div " {...settings}>
                <div
                  className="rounded card-carousel"
                  onClick={() => handleOptionChange("option1")}
                >
                  <img
                    src={template1}
                    alt="Option 1"
                    style={{ maxWidth: "100%", height: "100px" }}
                  />
                </div>

                <div
                  className="rounded card-carousel"
                  onClick={() => handleOptionChange("option2")}
                >
                  <img
                    src={template2}
                    alt="Option 2"
                    style={{ maxWidth: "100%", height: "100px" }}
                  />
                </div>

                <div
                  className="rounded card-carousel"
                  onClick={() => handleOptionChange("option3")}
                >
                  <img
                    src={template3}
                    alt="Option 3"
                    style={{ maxWidth: "100%", height: "100px" }}
                  />
                </div>

                <div
                  className="rounded card-carousel"
                  onClick={() => handleOptionChange("option4")}
                >
                  <img
                    src={template4}
                    alt="Option 4"
                    style={{ maxWidth: "100%", height: "100px" }}
                  />
                </div>
              </Slider>
            </div>
            <div
              ref={containerRef}
              className="signature-preview d-flex flex-column pt-3 pe-4 pb-3 align-items-center justify-content-center"
              style={{
                marginTop: "10px",
                height: "350px",
              }}
            >
              {renderTemplate()}
              {copySuccess && <div style={{ color: 'green', marginTop: '10px', animation:'fadeIn 0.5s' }}>Copied successfully!</div>}
              <div className="form-group copy-btn mt-3">
                <button  type="submit" className="btn " style={{backgroundColor:'#2478fe',color:'white', fontWeight:'600'}}>
                  Copy to Clipboard
                </button>
                
              </div>
              <style>
                {`
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                `}
            </style>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EmailSignatureForm;
