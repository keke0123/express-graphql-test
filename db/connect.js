import Mongoose from "mongoose";

Mongoose.Promise = global.Promise;

const connectToDb = async () => {
    // config 는 app 에서 전역으로 잡은 값을 사용
    let dbHost = config.dbHost;
    let dbPort = config.dbPort;
    let dbName = config.dbName;
    // let dbId = config.dbId;
    // let dbPwd = config.dbPwd;
    try {
        await Mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        // await Mongoose.connect(`mongodb://${dbId}:${dbPwd}@${dbHost}:${dbPort}/${dbName}`, { useMongoClient: true });
        console.log("Connected to mongo!!!");
    } catch (err) {
        console.log("Could not connect to MongoDB");
    }
};

export default connectToDb;
