import { View, Text, Button } from "react-native"

const Test = ({ navigation }) => {
  return (
    <View>
        <Text>Test</Text>
        <Button title="To Home" onPress={() => navigation.navigate("Home")}></Button>
    </View>
  )
}

export default Test