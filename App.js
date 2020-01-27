import React from "react";
import { Button,Icon} from 'react-native-elements';
import { StyleSheet, Text, View } from "react-native";


export default function App() {
 
  return (
    <View style={styles.container}>
      <Text>5 Tenedoress</Text>
      <Button
       icon={
    <Icon
      type="font-awesome"
      name="arrow-right"
      size={15}
      color="white"
    />
  }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
