const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    poster: String,
    // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    // tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
    slug: String,  // URL-friendly version of the post title
    // meta_title: String,  // SEO meta title
    meta_description: String,  // SEO meta description
    pub_date: Date
});

module.exports = mongoose.model('Post', postSchema);


const categorySchema = new mongoose.Schema({
    name: String,
    slug: String,  // URL-friendly version of the category name
    description: String
});

module.exports = mongoose.model('Category', categorySchema);


// const commentSchema = new mongoose.Schema({
//     content: String,
//     author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
//     timestamp: Date
// });
const commentSchema = new mongoose.Schema({
    content: String,
    author: String,
    email: String,
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    timestamp: Date
});

module.exports = mongoose.model('Comment', commentSchema);


const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    profile: {
        first_name: String,
        last_name: String,
        bio: String
    }
});
module.exports = mongoose.model('User', userSchema);


const tagSchema = new mongoose.Schema({
    name: String,
    slug: String  // URL-friendly version of the tag name
});