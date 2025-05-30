const multer = require("multer");
const mimeTypes = require("../consts/general.consts");

// storage ayarı
exports.storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const filename = `${uniqueSuffix}_${file.fieldname}_${file.originalname}`;
    cb(null, filename);
  },
});

// dosya filtresi
exports.fileFilter = (req, file, cb) => {
  if (mimeTypes.IMAGE_MIME_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Geçersiz dosya tipi"), false);
  }
};

// upload middleware'ı
exports.upload = multer({
  storage: exports.storage,
  fileFilter: exports.fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
}).single("image");
