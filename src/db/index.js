import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log(`\n monogoDB connected !! DB HOST: ${connection.connection.host} \n `); // insetad of production anywhere else if i am connnected then help me with that
    } catch (error) {
        console.error("ERROR: ", error);
        process.exit(1); // Exit the process with an error code
    }
};

export default connectDB;