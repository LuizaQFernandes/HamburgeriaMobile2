import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Pressable} from 'react-native';
import {MotiView, useAnimationState} from 'moti'
import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Etiqueta() {
  const etiquetaAnimationState = useAnimationState({
    fechada:{
      height:64
    },
    aberta:{
      height: 230
    }
  })

  function mudaEtiquetaAberta(){
    etiquetaAnimationState.transitionTo('aberta')
  }
  function mudaEtiquetaFechada(){
    etiquetaAnimationState.transitionTo('fechada')
  }

  return (
    <MotiView 
      state={etiquetaAnimationState}
      style={styles.container}>

      <Pressable
        onPressIn={mudaEtiquetaAberta}
        onPressOut={mudaEtiquetaFechada}
      
      >
      <Feather
        name="tag"
        color={theme.colors.white}
        size={26}
      />
      </Pressable>

      <View style={styles.info}>
        <Text style={styles.texto}>
          Calorias
        </Text>

        <Text style={styles.valor}>
          430
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.texto}>
          Peso
        </Text>

        <Text style={styles.valor}>
          190g
        </Text>
      </View>
    </MotiView >
  );
}