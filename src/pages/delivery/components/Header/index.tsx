/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useAuth } from '../../../../hooks/auth';
import { SearchInput } from '../SearchInput';

import { styles } from './styles';

interface HeaderProps {
  headerStyle: any;
  profileStyle: any;
}

const Header: React.FC<HeaderProps> = ({ headerStyle, profileStyle }) => {
  const { signOut, user } = useAuth();
  return (
    <Animated.View style={[styles.container, headerStyle]}>
      <Animated.View style={[styles.profileContent, profileStyle]}>
        <Text style={styles.profileText}>{`Bem vindo, \n${user.name}`}</Text>
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.6}
          onPress={() => signOut()}
        >
          <Icon name="logout" size={24} color="#ffc042" />
        </TouchableOpacity>
      </Animated.View>

      <View style={styles.headerContent}>
        <Text style={styles.headerTitle}>Entregas</Text>

        <View style={styles.placeContent}>
          <Icon name="place" size={24} color="#ffc042" />
          <Text style={styles.placeText}>São Paulo</Text>
        </View>
      </View>

      <SearchInput />
    </Animated.View>
  );
};

export { Header };
