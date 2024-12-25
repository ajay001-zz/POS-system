const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Product Schema
const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    sku: {
      type: String, // Stock Keeping Unit (unique product identifier)
      required: true,
      unique: true,
    },
    barcode: {
      type: String,
      unique: true,
      sparse: true, // Allows some barcodes to be null
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category', // Reference to the Category model
      required: true,
    },
    supplier: {
      type: Schema.Types.ObjectId,
      ref: 'Supplier', // Reference to the Supplier model
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    cost: {
      type: Number,
      required: true,
      min: 0,
    },
    stockQuantity: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    minStock: {
      type: Number,
      default: 0,
    },
    expirationDate: {
      type: Date,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Virtual for stock status
ProductSchema.virtual('stockStatus').get(function () {
  if (this.stockQuantity <= this.minStock) return 'Low Stock';
  return 'In Stock';
});

// Export the Product Model
module.exports = mongoose.model('Product', ProductSchema);
