//TOUCHABLE COMPONENTS
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

// export default function App() {
//   const [people, setPeople] = useState([
//     { name: 'Anmol', id: '1' },
//     { name: 'Anjali', id: '2' },
//     { name: 'Abhishek', id: '3' },
//     { name: 'Shaan', id: '4' },
//     { name: 'Tushar', id: '5' },
//     { name: 'Aayush', id: '6' },
//     { name: 'Anand', id: '7' }
//   ]);

//   const pressHandler = (id) => {
//     console.log(id);
//     setPeople((prevPeople) => {
//       return prevPeople.filter(person => person.id != id)
//     })
//   }

//   return (
//     <View style={styles.container}>

//       <FlatList
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         data={people}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => pressHandler(item.id)}>
//             <Text style={styles.item}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//       />

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   item: {
//     marginTop: 24,
//     marginHorizontal: 5,
//     padding: 30,
//     backgroundColor: 'pink',
//     fontSize: 24,
//   }
// });












// //FLAT LIST COMPONENT
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, FlatList } from 'react-native';

// export default function App() {
//   const [people, setPeople] = useState([
//     { name: 'Anmol', id: '1' },
//     { name: 'Anjali', id: '2' },
//     { name: 'Abhishek', id: '3' },
//     { name: 'Shaan', id: '4' },
//     { name: 'Tushar', id: '5' },
//     { name: 'Aayush', id: '6' },
//     { name: 'Anand', id: '7' }
//   ]);

//   return (
//     <View style={styles.container}>
    
//       <FlatList
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         data={people}
//         renderItem={({ item }) => (
//           <Text style={styles.item}>{item.name}</Text>
//         )}
//       />

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   item: {
//     marginTop: 24,
//     marginHorizontal: 5,
//     padding: 30,
//     backgroundColor: 'pink',
//     fontSize: 24,
//   }
// });












// //LIST AND SCROLL VIEW
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, ScrollView} from 'react-native';

// export default function App() {
//   const [people, setPeople] = useState([
//     { name: 'Anmol', key: '1' },
//     { name: 'Anjali', key: '2' },
//     { name: 'Abhishek', key: '3' },
//     { name: 'Shaan', key: '4' },
//     { name: 'Tushar', key: '5' },
//     { name: 'Aayush', key: '6' },
//     { name: 'Anand', key: '7' }
//   ]);

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {people.map(item => (
//             <View key={item.key}>
//               <Text style={styles.item}>{item.name}</Text>
//             </View>
//           ))}
//       </ScrollView>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   item: {
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: 'pink',
//     fontSize: 24,
//   }
// });











//TEXT INPUTS
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput } from 'react-native';

// export default function App() {
//   const [name, setName] = useState('Anmol');
//   const [age, setAge] = useState('20')

//   return (
//     <View style={styles.container}>

//      <Text>Enter name</Text>
//      <TextInput
//         multiline
//         style={styles.input} 
//         placeholder='e.g. John Doe' 
//         onChangeText={(val) => setName(val)}/>

//       <Text>Enter age</Text>
//       <TextInput
//         keyboardType='numeric'
//         style={styles.input}
//         placeholder='e.g. 23'
//         onChangeText={(val) => setAge(val)} />

//      <Text>name: {name}, age: {age}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#87cefa',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input : {
//     borderWidth: 2 ,
//     borderColor: '#000',
//     padding: 5, 
//     margin: 8,
//     width: 250
//   }
// });










//USING STATE

// // import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// // import { Button } from 'react-native-web';
// // import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

// export default function App() {
//   const [name, setName] = useState('Anmol');
//   const [person, setPerson] = useState({ name: 'Anjali', age: 25 })

//   const clickHandler = () => {
//     setName('Shaan')
//     setPerson({ name: 'Vishu', age: 20 });
//   }

//   return (
//     <View style={styles.container}>
//       <Text>My name is {name}</Text>
//       <Text>My name is {person.name} and his age is {person.age}</Text>
//       <Text></Text>

//       <View style={styles.buttonContainer}>
//         <Button title='update state' onPress={clickHandler} />
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#87cefa',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20
//   }
// });