import app from 'firebase/app';

const config = {
  apiKey: keys.env.REACT_APP_API_KEY,
  authDomain: keys.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: keys.env.REACT_APP_DATABASE_URL,
  projectId: keys.env.REACT_APP_PROJECT_ID,
  storageBucket: keys.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: keys.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
export default Firebase;
