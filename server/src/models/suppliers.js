const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Supplier Schema
const SupplierSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    contactPerson: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product', // References the Product model
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Virtual for supplier status
SupplierSchema.virtual('status').get(function () {
  return this.isActive ? 'Active' : 'Inactive';
});

// Export the Supplier Model
module.exports = mongoose.model('Supplier', SupplierSchema);
