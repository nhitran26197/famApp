// const express = require("express");
// const router = express.Router();
// const AWS = require("aws-sdk");
// const multer = require("multer");
// const multerS3 = require("multer-s3");

// const s3 = new AWS.S3({
//   accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
// });
// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: process.env.AWS_S3_BUCKET_NAME,
//     metadata: (req, file, cb) => {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: (req, file, cb) => {
//       cb(null, Date.now().toString());
//     },
//   }),
// });

// router.post("/upload", upload.single("image"), (req, res) => {
//   console.log(req.file);
//   res.json({ file: req.file.location });
// });

// module.exports = router;
