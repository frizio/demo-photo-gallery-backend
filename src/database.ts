import { connect } from "mongoose";

const DB_URL = 'mongodb://app_user:password@localhost:27017/demo-photo-gallery';

 export async function startConnectionToMongoDb() {
    await connect(
        'mongodb://app_user:password@localhost:27017/demo',
        { 
            useNewUrlParser: true,
            useFindAndModify: false 
        }
    );
    console.log('Successfully connection to Mongodb');    
 }
