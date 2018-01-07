import { StyleSheet } from 'react-native'


export default StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#c9cfd8'
  },
  logo: {
    marginTop: 10,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center',
    padding: 10
  },
  profileImage: {
    width: 80,
    height: 80,
  },
  userName: {
    justifyContent:'center',
    paddingBottom: 20,
    fontSize: 30,
    fontWeight: '700',
    color: '#404956',
  },
  userInfo: {
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#404956',
  },
  icon: {
    width: 26,
    height: 26,
  },
  eventIcon: {
    flexGrow: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'row'
  },
  section: {
    margin: 10,
    padding: 10,
  },
})
