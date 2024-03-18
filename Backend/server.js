const app = require("./app");
const path = require("path");
const connectDatabase = require("./config/database");
const cors = require("cors");
const express = require("express");
const imgur = require("imgur");
const fs = require("fs");
const fileUpload = require("express-fileupload");
const { sendMail } = require("./controllers/SendMail");

const bodyparser = require("body-parser");

app.use(fileUpload());
app.use(
  bodyparser.json({
    limit: "20mb",
  })
);
app.use(cors({ orgin: ["http://localhost:3000"], credentials: true }));
app.use(express.static("../frontend/public"));
app.use(express.static("../frontend/public/images"));

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    ` My server listening to the port: ${process.env.PORT} in ${process.env.NODE_ENV}  `
  );
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled rejection error");
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to uncaught exception error");
  server.close(() => {
    process.exit(1);
  });
});

app.use("/uploads", express.static("uploads"));
// console.log(a);  part 2 la last la paattha theriyum

const uploadDir = __dirname + "/uploads";
app.use("uploads", express.static("uploads"));
// app.post("/upload", (req, res) => {
//   if (!req.files) {
//     return res.status(400).send("No files were uploaded.");
//   }
//   let sampleFile = req.files.sampleFile;
//   let uploadPath = __dirname + "/uploads/" + sampleFile.name;
//   fs.writeFileSync(uploadPath, sampleFile.data);
//   imgur.uploadFile(uploadPath).then((urlObject) => {
//     fs.unlinkSync(uploadPath);
//     return res.status(200).json({ link: urlObject.data.link });
//   });
// });
app.post("/upload", async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).send("No files were uploaded.");
    }
    let sampleFile = req.files.sampleFile;
    let uploadPath = __dirname + "/uploads/" + sampleFile.name;
    // Write file to the upload path
    fs.writeFileSync(uploadPath, sampleFile.data);
    // Upload file to Imgur
    const urlObject = await imgur.uploadFile(uploadPath);
    // Remove the uploaded file after uploading to Imgur
    fs.unlinkSync(uploadPath);
    // Send the Imgur URL in the response
    return res.status(200).json({ link: urlObject.data.link });
  } catch (error) {
    console.error("Error occurred during file upload:", error);
    return res.status(500).send("Internal server error occurred.");
  }
});

app.post("/mail", (req, res) => {
  let bodyData = req.body;
  let content = `
  <div>
  Brand: ${bodyData.Sellbrand}
  </br>,
  Model: ${bodyData.Sellmodel} ,
  </br>,
  Year: ${bodyData.Sellyear} ,
  </br>,
  Sellkm:${bodyData.Sellkm} ,
  </br>,
  SellImage1: 
  <img style="width: 100px; height: 100px" src=${bodyData.SellImage1} alt=${bodyData.SellImage1} /> 
  </br>,
  SellImage2: ,
  <img style="width: 100px; height: 100px" src=${bodyData.SellImage2} alt=${bodyData.SellImage2} /> 
  </br>,
  SellImage3: ,
  <img style="width: 100px; height: 100px" src=${bodyData.SellImage3} alt=${bodyData.SellImage3} /> 
  </br>,
  SellImage4: ,
  <img  style="width: 100px; height: 100px" src=${bodyData.SellImage4} alt=${bodyData.SellImage4} /> 
  </br>,
  SellImage5: ,
  <img style="width: 100px; height: 100px" src=${bodyData.SellImage5} alt=${bodyData.SellImage5} /> 
  </br>,
  SellImage6: ,
  <img style="width: 100px; height: 100px" src=${bodyData.SellImage6} alt=${bodyData.SellImage6} /> 
  </br>
  <h2>Upload Bike Photo with Owner</h2>
  SellImage7: ,
  <img style="width: 100px; height: 100px" src=${bodyData.SellImage7} alt=${bodyData.SellImage7} /> 
  </br>,
  SellImage8: ,
  <img style="width: 100px; height: 100px" src=${bodyData.SellImage8} alt=${bodyData.SellImage8} /> 
  </br>
  SellImage9: ,
  <img  style="width: 100px; height: 100px" src=${bodyData.SellImage9} alt=${bodyData.SellImage9} /> 
  </br>,
  SellImage10: ,
  <img style="width: 100px; height: 100px" src=${bodyData.SellImage10} alt=${bodyData.SellImage10} /> 
  </br>,

  
 
  OwnerORSeller:${bodyData.OwnerORSeller} ,
  </br>,
  SellName: ${bodyData.SellName} ,
  </br>,
  Email: ${bodyData.Email} ,
  </br>,
  Mobile: ${bodyData.Mobile} ,
  </br>,
  Location: ${bodyData.Location} ,
  </br>,
  </div>
  `;

  sendMail("asherdntesting@gmail.com", "Sell Bike Request", content);
  res.status(200).send("Success");
});
