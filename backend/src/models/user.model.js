import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    clerkId: {
        required : true,
        unique: true,
    },

    email: {
        type : String,
        required : true,
        unique : true,
    },

    fullName: {
        type: String,
        required: true,
    },

    profilePic: {
        type: String,
        default: "",
    },

}, {timestamp: true} // Created at and updated at
);

const User = mongoose.model("User", userSchema);

export default User;