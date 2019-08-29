import * as firebase from 'firebase'

const config = {

  apiKey: 'AIzaSyCWx_WaqibRhARo8xebQU0hN8dxqPP7s0c',
  authDomain: 'react-reduc-todo.firebaseapp.com',
  databaseURL: 'https://react-reduc-todo.firebaseio.com',
  projectId: 'react-reduc-todo',
  storageBucket: '',
  messagingSenderId: '983629865249',
  appId: '1:983629865249:web:d8eeda3f8cf1a3a7'
}

firebase.initializeApp(config)
const databaseRef = firebase.database().ref()
export const todosRef = databaseRef.child('todos')
