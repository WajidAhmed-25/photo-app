const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.addComment = async (req, res) => {
  const { photoId, text } = req.body;

  try {
    const comment = await prisma.comment.create({
      data: { text, photoId: parseInt(photoId), userId: req.userId },
    });
    res.status(201).json({ message: "Comment added", comment });
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error });
  }
};
