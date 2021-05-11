import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import logotipoImg from '../../assets/Logotipo.png';
import logoImg from '../../assets/Logo.png';

interface LogoProps {
  style: any;
}

const Logo: React.FC<LogoProps> = ({ style }) => {
  return (
    <Animated.View style={[styles.container, style]}>
      <Image style={styles.logotipo} source={logotipoImg} />
      <Image source={logoImg} style={styles.logo} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logotipo: {
    alignSelf: 'center',
  },
  logo: {
    alignSelf: 'center',
    marginLeft: 'auto',
  },
});

export { Logo };
