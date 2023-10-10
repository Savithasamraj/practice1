import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

function App() {
  const [coloredCircles, setColoredCircles] = useState([]);
  const [coloredCircles1, setColoredCircles1] = useState([]);
  const addcircle = () => {
    setColoredCircles([...coloredCircles, false]);
  };
  const click = (index) => {
    const coloredCircles1 = [...coloredCircles];
    coloredCircles1[index] = !coloredCircles[index];
    setColoredCircles(coloredCircles1);
    colouredchangedball();
  };
  const colouredchangedball = () => {
    const ball = coloredCircles.filter((item) => item === true);

    console.log("ball", ball);
    return ball.length;
  };

  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.title}>total:{coloredCircles.length}</Text>
        <Text style={styles.title}>total:{colouredchangedball()}</Text>
      </View>

      <Pressable
        onPress={() => {
          addcircle();
        }}
        style={buttonStyles.button}
      >
        <Text style={buttonStyles.text}>add button</Text>
        {coloredCircles.map((item, index) => (
          <View key={index}>
            <Text>{JSON.stringify(item)}</Text>
            <TouchableOpacity
              key={index}
              style={[
                styles.circle,
                { backgroundColor: item ? "blue" : "gray" }
              ]}
              onPress={() => click(index)}
            >
              <Text style={styles.text}>{JSON.stringify(item)}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 2
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase"
  }
});

export default App;
