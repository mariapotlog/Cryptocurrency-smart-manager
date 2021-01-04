import { connect } from 'mongoose';
import { winston } from "@helpers"

export default async function ConnectDB() {
    try {
        await connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        winston.info("We're connected to db");
    } catch (err) {
        winston.error(err.message);
        process.exit(1);
    }
}
