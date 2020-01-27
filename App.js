import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Loading from "./Lodading";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Componente montadoo: " + isLoading);
  }, [isLoading]);
  return (
    <View style={styles.container}>
      <Text>Open up Appp.js to start working on your app!</Text>

      {isLoading === true && <Loading />}
      <Button
        title="Actualizar estado"
        onPress={() => setIsLoading(true)}
      ></Button>
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
