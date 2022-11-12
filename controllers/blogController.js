const Blog = require('../models/blog');

//blog_index (home page)
const blog_index = (req,res)=>{
    Blog.find().sort({ createdAt: -1 })
      .then(result => {
        res.render('blogs/index', { blogs: result, title: 'All blogs' });
      })
      .catch(err => {
        console.log(err);
      });
}

//blog_create_get the blog details
const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create a new blog' });
}

//blog_create-post to the home
const blog_create_post = (req, res) => {
    // console.log(req.body);
    const blog = new Blog(req.body);
  
    blog.save()
      .then(result => {
        res.redirect('/blogs');
      })
      .catch(err => {
        console.log(err);
      });
  }

//blog_details of the single blog
const blog_details = (req, res) => {
    Blog.findById(req.params.id)
      .then((result) => {
        if (!result){
          console.log(result)
        }else{
        res.render('blogs/details', { blog: result, title: 'Blog Details' });
        }
      })
      .catch((err) => {
        // 404 page rendering
        res.status(404).render('404',{title:'Blog Not Found'});
      });
  }

//blog_delete request
const blog_delete = (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  }

module.exports = {blog_index,blog_create_get,blog_create_post,blog_details,blog_delete}