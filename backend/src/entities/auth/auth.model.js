import {
    Schema,
    model
} from 'mongoose'

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already in use!"],
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    salt: {
        type: String,
        required: false,
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
            delete ret.password
        }
    }
});

const User = model("User", UserSchema);

export default User;
