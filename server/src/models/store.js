const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Store Schema
const StoreSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    contactNumber: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    settings: {
      currency: {
        type: String,
        default: 'USD', // Default currency
      },
      taxRate: {
        type: Number,
        default: 0, // Default tax rate percentage
      },
    },
  },
  { timestamps: true }
);

// Virtual for store status
StoreSchema.virtual('status').get(function () {
  return this.isActive ? 'Active' : 'Inactive';
});

// Export the Store Model
module.exports = mongoose.model('Store', StoreSchema);
