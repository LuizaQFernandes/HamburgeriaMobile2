import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { MotiView} from 'moti'
import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Cabecalho() {
  return (
    <MotiView 
     
      from={{
        opacity: 0,
        scale: 2.5
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        type: 'timing',
        duration: 3000
      }}
    
    style={styles.container}>

      <Feather
        name="arrow-left"
        color={theme.colors.brown}
        size={32}
      />

      <View>
        <Text style={styles.titulo}>
          Fatec
        </Text>

        <Text style={styles.subtitulo}>
          Hamburgueria
        </Text>
      </View>
    </MotiView>
  );
}