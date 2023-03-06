import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {FontAwesome5, Entypo, AntDesign, EvilIcons} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
    {/* 1 primeira família */}
      <View style={styles.familia_icones}>
      <Text style={styles.familia_titulo}>Entypo</Text>
        <View style={styles.lista_icones}>
          <Entypo style={styles.espaco_icones} name="500px" size={24} color="black" />
          <Entypo style={styles.espaco_icones} name="add-to-list" size={24} color="black" />
          <Entypo style={styles.espaco_icones} name="emoji-neutral" size={24} color="black" />
          <Entypo style={styles.espaco_icones} name="emoji-sad" size={24} color="black" />
          <Entypo style={styles.espaco_icones} name="emoji-happy" size={24} color="black" />
        </View>
        </View>

      {/* 2 segunda família */}
      <View style={styles.familia_icones}>
      <Text style={styles.familia_titulo}>Entypo</Text>
      <View style={styles.lista_icones}>
      <FontAwesome5 style={styles.espaco_icones} name="gamepad" size={24} color="black" />
      <FontAwesome5 style={styles.espaco_icones} name="tachometer-alt" size={24} color="black" />
      <FontAwesome5 style={styles.espaco_icones} name="angry" size={24} color="black" />
      <FontAwesome5 style={styles.espaco_icones} name="angellist" size={24} color="black" />
      <FontAwesome5 style={styles.espaco_icones} name="atom" size={24} color="black" />
      </View>
    </View>

      {/* 3 terceira família */}
      <View style={styles.familia_icones}>
        <Text style={styles.familia_titulo}>Entypo</Text>
        <View style={styles.lista_icones}>
          <AntDesign style={styles.espaco_icones} name="frowno" size={24} color="black" />
          <AntDesign style={styles.espaco_icones} name="exclamationcircle" size={24} color="black" />
          <AntDesign style={styles.espaco_icones} name="star" size={24} color="black" />
          <AntDesign style={styles.espaco_icones} name="camerao" size={24} color="black" />
          <AntDesign style={styles.espaco_icones} name="carryout" size={24} color="black" />
        </View>
    </View>

      {/* 4 quarta família */}
      <View style={styles.familia_icones}>
        <Text style={styles.familia_titulo}>Entypo</Text>
        <View style={styles.lista_icones}>
        <EvilIcons style={styles.espaco_icones} name="star" size={24} color="black" />
        <EvilIcons style={styles.espaco_icones} name="trash" size={24} color="black" />
        <EvilIcons style={styles.espaco_icones} name="tag" size={24} color="black" />
        <EvilIcons style={styles.espaco_icones} name="share-google" size={24} color="black" />
        <EvilIcons style={styles.espaco_icones} name="sc-odnoklassniki" size={24} color="black" />
        </View>
    </View>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  familia_icones: {
     backgroundColor: '#ccc',
     borderRadius: 5,
     width: '90%',
     padding: 25,
     marginBottom: 20,
},
  lista_icones:{
    flexDirection: "row",
    marginTop: 20
},
familia_titulo:{
   fontSize: 30,
   borderStyle: 'solid',
   borderColor: '#222',
   borderBottomWidth: 2
},
espaco_icones:{
  margin: 5
}
});
