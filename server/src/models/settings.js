const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Settings Schema
const SettingsSchema = new Schema(
  {
    currency: {
      type: String,
      default: 'USD', // Default currency for the POS
      trim: true,
    },
    taxRate: {
      type: Number,
      default: 0, // Default tax rate in percentage
      min: 0,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    companyLogo: {
      type: String, // URL or file path for the company logo
      default: null,
    },
    companyAddress: {
      type: String,
      required: true,
      trim: true,
    },
    receiptFooter: {
      type: String,
      default: '',
      trim: true,
    },
    activationKey: {
      type: String,
      required: true, // One-time activation key
    },
    isActivated: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Virtual to check system activation status
SettingsSchema.virtual('activationStatus').get(function () {
  return this.isActivated ? 'Activated' : 'Not Activated';
});

// Export the Settings Model
module.exports = mongoose.model('Settings', SettingsSchema);
