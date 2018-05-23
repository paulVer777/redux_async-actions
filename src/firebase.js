const config = {
    apiKey: "AIzaSyBuIG6mOFl9eff1HN9QGQDg7IPQB78hd2M",
    authDomain: "chatdlaisa-c0600.firebaseapp.com",
    databaseURL: "https://chatdlaisa-c0600.firebaseio.com",
    projectId: "chatdlaisa-c0600",
    storageBucket: "chatdlaisa-c0600.appspot.com",
    messagingSenderId: "249122014584"
};

firebase.initializeApp(config);

export const database = firebase.database()