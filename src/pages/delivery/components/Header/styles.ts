import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 184,
    backgroundColor: '#4c33cc',
    justifyContent: 'flex-end',
    position: 'absolute',
    elevation: 1,
  },
  profileContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    height: 76,
    position: 'absolute',
    top: 0,
  },
  profileText: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#d5ccff',
    marginLeft: 24,
  },
  logoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 24,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    width: '100%',
    position: 'absolute',
    bottom: 60,
  },
  headerTitle: {
    fontFamily: 'RobotoCondensed-Bold',
    fontSize: 32,
    color: '#fff',
    marginRight: 24,
  },

  placeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: 'auto',
  },
  placeText: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#d5ccff',
    marginLeft: 8,
  },
});
