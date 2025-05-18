const Blog = require("../models/blog.model");
const User = require("../models/user.model");

exports.createBlog = async (req) => {
  try {
    const { title, text, author } = req.body;

    const existBlog = await Blog.findOne({ title });
    if (existBlog) {
      throw new Error("Bu isimde blog zaten mevcut");
    }
    const user = await User.findById(author);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }

    const blog = new Blog({
      title,
      text,
      author,
    });

    user.blogs.push({ blogId: blog._id });
    await user.save();

    await blog.save();

    return blog;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteBlog = async (req) => {
  try {
    const { blogId } = req.params;

    const existBlog = await Blog.findById(blogId);
    if (!existBlog) {
      throw new Error("Blog bulunamadı");
    }

    const user = await User.findById(existBlog.author);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }

    user.blogs = user.blogs.filter(
      (blogItem) => blogItem.blogId.toString() !== blogId
    );
    await user.save();

    await Blog.findByIdAndDelete(blogId);

    return "Blog silindi";
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllBlogs = async () => {
  try {
    return await Blog.find();
  } catch (error) {
    throw new Error(error);
  }
};

exports.likeBlog = async (req) => {
  try {
    const { blogId, userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Kullanıcı bulunamadı");
    }
    const blog = await Blog.findById(blogId);
    if (!blog) {
      throw new Error("Blog bulunamadı");
    }
    const isLiked = user.likedBlogs.some((id) => id.toString() === blogId);
    if (isLiked) {
      throw new Error("Bu blog zaten beğenilmiş");
    }
    const updated = await User.findByIdAndUpdate(
      userId,
      { $push: { likedBlogs: blogId } },
      { new: true }
    );
    return "Blog beğenildi";
  } catch (error) {
    throw new Error(error);
  }
};