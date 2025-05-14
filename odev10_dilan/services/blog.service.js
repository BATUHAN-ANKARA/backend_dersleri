const Blog = require("../models/blog.model");

/*create
delete
getall
getblogıd
getblogtitle
*/

exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const existBlog = await Blog.findOne({ title });
    if (existBlog) {
      throw new Error("Admin bulunamadı");
    }
    const blog = new Blog({
      title,
      content,
    });
    await blog.save();
    return blog;
  } catch (error) {
    throw new Error("Kayıt oluşturulamadı");
  }
};

exports.deleteBlogById= async (req) => {
  try {
    const { id } = req.param;
    const existBlog = await Blog.findById(id);
    if (!existBlog) {
      throw new Error("Blog bulunamadı");
    }
    const blog = await Blog.findByIdAndDelete(id);
    return blog;
  } catch (error) {
    throw new Error("Blog silinemedi");
  }
};

exports.getBlogByTitle = async (req) => {
  try {
    const { title } = req.params; //EMİN DEĞİLİM

    const blog = await Blog.find({ title });
    if (blog.length === 0) {
      throw new Error("Blog bulunamadı");
    }
    return blog;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllBlogs = async (req) => {
  try {
    const blog = await Blog.find();
    return blog;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getBlogById = async (req) => {
  try {
    const { id } = req.param;
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
