import React from 'react';
import { 
  SafeAreaView, 
  Text, 
  Image, 
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import watering from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'} suas plantas de {'\n'} forma fácil
        </Text>
        <Image 
          source={watering} 
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>Não esqueça mais de regar 
          suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Feather 
            name="chevron-right" 
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex:1,
  },
  wrapper: {
    flex:1,
    alignItems:'center',
    justifyContent:'space-around',
    paddingHorizontal:20
  },
  title:{
    fontSize:28,
    fontWeight: 'bold',
    textAlign:'center',
    color: colors.heading,
    fontFamily: fonts.headding,
    lineHeight:34
  },
  subtitle: {
    textAlign:'center',
    fontSize:18,
    paddingHorizontal:20,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  image: {
    height:Dimensions.get('window').height*0.4,
  },
  button: {
    backgroundColor:colors.green,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 16,
    height:56,
    width:56
  },
  buttonIcon:{
    color: colors.white,
    fontSize:32
  }
});