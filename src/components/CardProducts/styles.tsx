import {Dimensions, StyleSheet} from 'react-native';
const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.9,
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    padding: 15,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  image: {
    width: 90,
    height: 90,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  textTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: 'gray',
    width: screenWidth * 0.5,
  },
});
