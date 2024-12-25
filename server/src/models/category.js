const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Category Schema
const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Virtual for category status
CategorySchema.virtual('status').get(function () {
  return this.isActive ? 'Active' : 'Inactive';
});

// Export the Category Model
module.exports = mongoose.model('Category', CategorySchema);
