const { PrismaClient } = require("@prisma/client");
const multer = require("multer");

const prisma = new PrismaClient();
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

exports.uploadPhoto = [upload.single("photo"), async (req, res) => {
  const { path } = req.file;

  try {
    const photo = await prisma.photo.create({
      data: { url: path, userId: req.userId },
    });
    res.status(201).json({ message: "Photo uploaded successfully", photo });
  } catch (error) {
    res.status(500).json({ message: "Error uploading photo", error });
  }
}];

exports.getPhotos = async (req, res) => {
  try {
    const photos = await prisma.photo.findMany({
      include: { comments: true },
    });
    res.json(photos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching photos", error });
  }
};
