const firebase = require('firebase/app')
require('firebase/database')

const apis = {
  apiKey: 'AIzaSyCR_eLOIQFhDAVkjQez9fkCp0JntgYcQjY',
  authDomain: 'swp-final-ba884.firebaseapp.com',
  databaseURL: 'https://swp-final-ba884.firebaseio.com',
  projectId: 'swp-final-ba884',
  storageBucket: 'swp-final-ba884.appspot.com',
  messagingSenderId: '873554316809',
  appId: '1:873554316809:web:7b2e448521a8b664'
}

firebase.initializeApp(apis)

const push = value => {
  firebase
    .database()
    .ref('/database')
    .push(value)
}

module.exports = {
  push
}
