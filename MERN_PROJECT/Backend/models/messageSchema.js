import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name required"],
        minlenght:[3,"name must contain at least 3 characters!"],
    },
    email:{
        type:String,
        required:[true,"email required"],
        validate:[validator.isEmail,"please provide valid email"],
    },
    subject:{
        type:String,
        required:[true,"subject required"],
        minlenght:[5,"subject must contain at least 5 characters!"],
    },
    message:{
        type:String,
        required:[true,"message required"],
        minlenght:[10,"message must contain at least 10 characters!"],
    },

});

export const Message= mongoose.model("Message",messageSchema);

/*

import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Required!"],
    minLength: [3, "Name must contain at least 3 characters!"],
  },
  email: {
    type: String,
    required: [true, "Email Required!"],
    validate: [validator.isEmail, "Please provide valid email!"],
  },
  subject: {
    type: String,
    required: [true, "Subject Required!"],
    minLength: [5, "Subject must contain at least 5 characters!"],
  },
  message: {
    type: String,
    required: [true, "Message Required!"],
    minLength: [10, "Message must contain at least 10 characters!"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
*/