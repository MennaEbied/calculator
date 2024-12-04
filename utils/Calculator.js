import { useState } from "react";
import Button from "../components/Button";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Row from "../components/Row";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState("0");

  const handleTap = (type, value) => {
    switch (type) {
      case "number":
        setCurrentValue(
          currentValue === "0" ? String(value) : currentValue + value,
        );
        break;
      case "operator":
        setOperator(value);
        setPreviousValue(currentValue);
        setCurrentValue("0");
        break;
      case "clear":
        setCurrentValue("0");
        setOperator(null);
        setPreviousValue(null);
        break;
      case "sign":
        setCurrentValue((currentValue * -1).toString());
        break;
      case "percentage":
        setCurrentValue((currentValue / 100).toString());
        break;
      case "equal":
        const current = parseFloat(currentValue);
        const previous = parseFloat(previousValue);
        if (operator === "+") {
          setCurrentValue(`${previous + current}`);
        } else if (operator === "-") {
          setCurrentValue(`${previous - current}`);
        } else if (operator === "X") {
          setCurrentValue(`${previous * current}`);
        } else if (operator === "/") {
          setCurrentValue(`${previous / current}`);
        }
        setOperator(null);
        setPreviousValue(null);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.value}>{currentValue}</Text>
        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={() => handleTap("clear")}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => handleTap("sign")}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={() => handleTap("percentage")}
          />
          <Button
            text="/"
            theme="accent"
            onPress={() => handleTap("operator", "/")}
          />
        </Row>
        <Row>
          <Button text="7" onPress={() => handleTap("number", 7)} />
          <Button text="8" onPress={() => handleTap("number", 8)} />
          <Button text="9" onPress={() => handleTap("number", 9)} />
          <Button
            text="X"
            theme="accent"
            onPress={() => handleTap("operator", "X")}
          />
        </Row>
        <Row>
          <Button text="4" onPress={() => handleTap("number", 4)} />
          <Button text="5" onPress={() => handleTap("number", 5)} />
          <Button text="6" onPress={() => handleTap("number", 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => handleTap("operator", "-")}
          />
        </Row>
        <Row>
          <Button text="1" onPress={() => handleTap("number", 1)} />
          <Button text="2" onPress={() => handleTap("number", 2)} />
          <Button text="3" onPress={() => handleTap("number", 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => handleTap("operator", "+")}
          />
        </Row>
        <Row>
          <Button text="0" onPress={() => handleTap("number", 0)} />
          <Button text="." onPress={() => handleTap("number", ".")} />
          <Button text="=" theme="primary" onPress={() => handleTap("equal")} />
        </Row>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
export default Calculator;
