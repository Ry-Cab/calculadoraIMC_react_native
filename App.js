import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/title';
import Main from './src/components/Main';

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Title></Title>  
        <View>
        <Main></Main>

          </View>    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 15,
    paddingTop: 80
  },
});
