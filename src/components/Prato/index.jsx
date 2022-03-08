import React from 'react';
import { Image } from 'react-native';
import {MotiImage} from 'moti'

import { styles } from './styles';
import fotoPrato from '../../assets/catubacon.png';

export function Prato() {
  return (
    <MotiImage
      style={styles.prato}
      source={fotoPrato}
      resizeMode="contain"
      from={{
        opacity: 0,
        translateX: 200
      }}
      animate={{
        opacity: 1,
        translateX: 4
      }}
      transition={{
        type: 'spring',
        
      }}
    />
  );
}