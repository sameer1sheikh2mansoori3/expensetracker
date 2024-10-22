import mongoose from "mongoose";



export const connectDB = async (req, res) => {
    const db ="mongodb+srv://sameersheikhmansoori:mongodb123@cluster0.wkynkce.mongodb.net/expensetracker?retryWrites=true&w=majority&appName=Cluster0" ;

    const {connection} = await mongoose.connect(db, { useNewUrlParser: true });


    console.log(`MongoDB Connected to successfully ${connection.host}`);

}