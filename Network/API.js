// import Parse from 'parse/react-native'
// import AsyncStorage from '@react-native-async-storage/async-storage'

// // Initialize the SDK for Parse
// Parse.setAsyncStorage(AsyncStorage)
// const app_id = '0kEMdS16SXoAhP2Sp2bl5DBQ7jpfIEhsM2qNFtKR'
// const js_key = 'vA7F7nuFObXfc13sRscjKiw5041BPkNTZm4uW50h'
// Parse.initialize(app_id, js_key)
// Parse.serverURL = 'https://parseapi.back4app.com';

// class API {
//     fetchData = async () => {
//         const query = new Parse.Query('Leaderboard');
//         await query.findAll()
//         .then(response => sortData(response))
//         .then((response) => {
//           return response
//         })
//         .catch(error => {
//           console.log(error)
//         })
//     }
// }

// const data = new API();
// export default data;

// // Sorts the ParseObject Data in ascending order based on rank
// function sortData(queryResult) {
//   for (let i = 0; i < queryResult.length; i++) {
//     for (let j = i+1; j < queryResult.length; j++) {
//       if(parseInt(queryResult[i].get('rank')) > parseInt(queryResult[j].get('rank'))) {
//         temp = queryResult[i]
//         queryResult[i] = queryResult[j]
//         queryResult[j] = temp
//       }
//     }
//   }
//   return queryResult
// }

