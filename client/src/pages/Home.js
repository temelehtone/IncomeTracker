import { View, Text, Button } from "react-native"

const Home = ({ navigation }) => {
  return (
    <View>
        <Text>Moi</Text>
        <Button title="To Test" onPress={() => navigation.navigate("Test")}></Button>
    </View>
  )
}

export default Home