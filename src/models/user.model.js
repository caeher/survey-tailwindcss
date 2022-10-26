import {Schema,  model} from "mongoose";
import bcrypt from "bcrypt";

const SALT_WORK_FACTOR = 10;

let userSchema = new Schema(
    {
        name: String,
        email: String,
        password: String
    },
    {
        timestamps: true,
        versionKey: false
    }
);
//
userSchema.pre('save',  function (next) {
    let user = this;
    if(user.password === undefined) {
        return next();
    }

    bcrypt.genSalt(SALT_WORK_FACTOR, (error, salt) => {
        if(error) {
            return next(error);
        }
        bcrypt.hash(user.password, salt, (error, hash) => {
            if(error) {
                return next(error);
            }
            user.password = hash;
            next();
        });
    });

});

userSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, (error, isMatch) => {
        if(error) {
            return cb(error);
        }
        cb(null, isMatch);
    })
};
const User = model("User", userSchema);
export default User;