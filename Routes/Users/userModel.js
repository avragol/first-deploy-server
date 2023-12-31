const mongoose = require("mongoose");
const minAllowEmpty = require("../../services/validatorAllowEmpty");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
  },
  middleName: {
    type: String,
    maxlength: 256,
    validate: {
      validator: minAllowEmpty(2),
      message: "should be empty or minimum",
    },
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
  },
  phone: {
    type: String,
    required: true,
    minlength: 7,
    maxlength: 12,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 256,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  },
  imageUrl: {
    type: String,
    maxlength: 1024,
    validate: {
      validator: minAllowEmpty(6),
      message: "should be empty or minimum",
    },
    default:
      "https://png.pngtree.com/element_our/20190604/ourmid/pngtree-user-avatar-boy-image_1482937.jpg",
  },
  imageAlt: {
    type: String,
    maxlength: 256,
    validate: {
      validator: minAllowEmpty(6),
      message: "should be empty or minimum",
    },
    default:
      "default profile image",
  },
  state: {
    type: String,
    maxlength: 255,
    validate: {
      validator: minAllowEmpty(2),
      message: "should be empty or minimum",
    },
  },
  country: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
  },
  city: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
  },
  street: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
  },
  houseNumber: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 256,
  },
  zipCode: {
    type: Number,
    maxlength: 256,
    validate: {
      validator: minAllowEmpty(2, "number"),
      message: "should be empty or minimum",
    },
  },
  biz: {
    type: Boolean,
    default: false,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
