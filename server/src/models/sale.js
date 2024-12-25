const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Sale Schema
const SaleSchema = new Schema(
  {
    invoiceNumber: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    cashier: {
      type: Schema.Types.ObjectId,
      ref: 'User', // References the User model for the cashier
      required: true,
    },
    store: {
      type: Schema.Types.ObjectId,
      ref: 'Store', // References the Store model
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product', // References the Product model
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
    },
    tax: {
      type: Number,
      default: 0,
      min: 0,
    },
    paymentMethod: {
      type: String,
      enum: ['cash', 'card', 'mobile', 'other'],
      required: true,
    },
    customerDetails: {
      name: {
        type: String,
        trim: true,
      },
      contact: {
        type: String,
        trim: true,
      },
    },
    status: {
      type: String,
      enum: ['completed', 'refunded', 'pending'],
      default: 'completed',
    },
  },
  { timestamps: true }
);

// Virtual for net total (total after discount and tax)
SaleSchema.virtual('netTotal').get(function () {
  return this.totalAmount - this.discount + this.tax;
});

// Export the Sale Model
module.exports = mongoose.model('Sale', SaleSchema);
