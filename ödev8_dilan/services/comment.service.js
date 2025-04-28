exports.updateCommentStatus = async (req) => {
  try {
    const { id, status, adminId } = req.params;

    const existAdmin = await Admin.findById(adminId);
    if (!existAdmin) {
      throw new Error("Admin bulunamadı");
    }

    const existComment = await Comment.findById(id);
    if (!existComment) {
      throw new Error("Yorum bulunamadı");
    }

    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { status: status },
      { new: true }
    );
    return updatedComment;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateCommentFeature = async (req) => {
  try {
    const { id, status, adminId } = req.params;
    // Yorum kontrolü
    const existComment = await Comment.findById(id);
    if (!existComment) {
      throw new Error("Yorum bulunamadı");
    }

    const existAdmin = await Admin.findById(adminId);
    if (!existAdmin) {
      throw new Error("Admin bulunamadı");
    }

    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { isFeatured: status === "true" },
      { new: true }
    );
    return updatedComment;
  } catch (error) {
    throw new Error(error);
  }
};
