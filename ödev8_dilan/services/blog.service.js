const Blog = require("../models/blog.model");
const Admin = require("../models/admin.model");

exports.createBlog = async (req) => {
  try {
    const { title, content, author, tags } = req.body;
    const existBlog = await Blog.findOne({ title }); 
    if (existBlog) {
      throw new Error("Bu isimde blog zaten mevcut");
    }
    const admin = await Admin.findById(author);
    if (!admin) {
      throw new Error("Admin bulunamadı");
    }
    const blog = new Blog({
      title,
      content,
      tags,
      author,
    });
    admin.blogs.push({ blogId: blog._id });
    await admin.save(); 
    await blog.save();
    return blog;
  } catch (error) {
    throw new Error(error);
  }
};

exports.deleteBlog = async (req) => {
  try {
    const { id } = req.params;

    const existBlog = await Blog.findById(id);
    if (!existBlog) {
      throw new Error("Blog bulunamadı");
    }

    const admin = await Admin.findById(existBlog.author);
    if (!admin) {
      throw new Error("Admin bulunamadı");
    }

    admin.blogs = admin.blogs.filter(
      (blogItem) => blogItem.blogId.toString() !== id
    );
    await admin.save();

    await Blog.findByIdAndDelete(id);

    return "Blog silindi";
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllBlogs = async () => {
  try {
    const blogs = await Blog.find();
    return blogs;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getBlogById = async (req) => {
  try {
    const { id } = req.params;
    const existBlog = await Blog.findById(id);
    if (!existBlog) {
      throw new Error("Blog bulunamadı");
    }
    const blog = await Blog.findById(id);
    return blog;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getBlogByTitle = async (req) => {
  try {
    const { title } = req.params;

    const blog = await Blog.find({ title });
    if (blog.length === 0) {
      throw new Error("Blog bulunamadı");
    }
    return blog;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getBlogsByAuthor = async (req) => {
  try {
    const { author } = req.params;
    const admin = await Admin.findById(author);
    if (!admin) {
      throw new Error("Yazar bulunamadı");
    }
    const blogs = await Blog.find({ author });
    return blogs;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getBlogsByStatus = async (req) => {
  try {
    const { status } = req.params;

    const blogs = await Blog.find({status});
    if (blogs.length === 0) {
      throw new Error("Blog bulunamadı");
    }
    return blogs;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateBlogStatus = async (req) => {
  try {
    const { id, status } = req.params;
    const existBlog = await Blog.findById(id);
    if (!existBlog) {
      throw new Error("Blog bulunamadı");
    }
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { status: status },
      { new: true }
    );
    return updatedBlog;
  } catch (error) {
    throw new Error(error);
  }
};