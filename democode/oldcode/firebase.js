import admin from 'firebase-admin'
import serviceAccount from '../serviceAccountKey.json'

export default () => {

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://macro-duality-160006.firebaseio.com"
    });
    return admin;

}
//console.log(admin)


