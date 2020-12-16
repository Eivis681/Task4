import * as firebase from 'firebase';
import "firebase/database";


const firebaseConfig = {
    apiKey: 'AIzaSyDfjOIYrsZ1AMUtWm05qx1OYeAmjnBh4E0',
    databaseURL: 'https://qrscanner-57073-default-rtdb.firebaseio.com/',
    projectId: 'qrscanner-57073',
    appId: 'QrScanner',
  };

  export const saveData = (data, id) =>{
    firebase.initializeApp(firebaseConfig);
    firebase.database().ref('data/'+id).set({item: data, id: id});
  }

  export const updateData =(data, id)=>{
    firebase.database().ref('data/'+id).update(data);
  }

  export const deleteData=(id)=>{
    firebase.database().ref('data/'+id).remove();
  }

  export function getData(){
    var datas=[];
      firebase.database().ref('data').once('value').then(snapshot=>{
        snapshot.forEach(data=>{
            var temp ={id: data.val().id, items: data.val().item}
            datas.push(temp)
        })
      })
      return datas
      
    //   recentData.once('value').then(snapshot =>{
    //     return snapshot.val()
    //   }) 
  }

//   export function fetchUserData() {
//     database.ref('users/' + userID).once('value').then(function(snapshot) {
//        if (!snapshot) {
//           console.log('An error occured');
//        } else {
//           // Handle snapshot data here
//        }
//     })
//  }