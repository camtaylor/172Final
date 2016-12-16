var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Scheme for the post
var PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  text: {
    type: String,
    required: true
  },
  author: 
        {type: Schema.Types.ObjectId,
         ref: 'user',
         required:true
        },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'category',
      required: true
    }
  ]
});

module.exports = mongoose.model('post', PostSchema);
