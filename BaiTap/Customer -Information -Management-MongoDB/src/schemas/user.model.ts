import {Schema,model} from "mongoose"
    interface IUser {
        name: string;
        code: number;
        email:string;
        phone:string;
    }

    const userSchema =new Schema<IUser>({
        name:String,
        code:Number,
        email:String,
        phone:String
    })

    const User=model<IUser>("User",userSchema)

    export {User}




