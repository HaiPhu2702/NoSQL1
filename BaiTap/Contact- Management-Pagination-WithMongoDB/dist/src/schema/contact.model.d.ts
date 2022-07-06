import mongoose from "mongoose";
declare const contact: mongoose.Model<{
    name?: string;
    address?: string;
    email?: string;
    phone?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
    name?: string;
    address?: string;
    email?: string;
    phone?: string;
}>>;
export { contact };
