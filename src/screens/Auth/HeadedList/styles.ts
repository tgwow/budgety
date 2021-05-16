import { ScaledSheet } from 'react-native-size-matters';
import { StatusBar } from 'react-native';

export const styles = ScaledSheet.create({
  container: {
    // justifyContent: 'space-evenly',
  },
  header: {
    backgroundColor: 'green',
    paddingTop: 40,
  },
  body: {
    backgroundColor: 'blue',
    paddingBottom: 60,
  },
  footer: {
    backgroundColor: 'yellow',
  },
  item: {
    padding: '35@vs',
    backgroundColor: 'pink',
    marginBottom: '20@vs',
  },
  image: {
    height: 150,
  },
  name: {
    fontSize: '22@vs',
    color: '#333',
    fontWeight: 'bold',
    paddingBottom: 21,
  },
  title: {
    fontSize: '46@vs',
    marginTop: StatusBar.currentHeight || 0,
    textAlign: 'center',
    paddingVertical: '20@vs',
  },
  listHeader: {
    padding: 20,
  },
  tabs: {
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  tab: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  pullToRefresh: {
    alignItems: 'center',
  },
});
