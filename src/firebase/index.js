import { initializeApp } from 'firebase/app'
import 'firebase/database'

const app = initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_PROJECT_ID + '.firebaseapp.com',
  databaseURL: 'https://' + process.env.VUE_APP_PROJECT_ID + '.firebaseio.com',
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_PROJECT_ID + '.appspot.com',
  messagingSenderId: process.env.VUE_APP_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
})

export const db = app.database()
export const usersRef = db.ref('users')
