/**
 * @author Man Nok PUN (301269138)
 */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch } from 'react-native';
import React from 'react';

export default function App() {
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [isImperialUnit, setIsImperialUnit] = React.useState(true);

  const onChangeUnit = () => {
    setIsImperialUnit(isImperialUnit => !isImperialUnit)
    setHeight((isImperialUnit ? height * 2.54  :height / 2.54).toString())
    setWeight((isImperialUnit ? weight /2.2 : weight * 2.2).toString())
  };

  function getBmi(){
    let _heightInMetres = isImperialUnit ? height * 0.0254 : height / 100
    let _weightInKg = isImperialUnit ? weight / 2.2 : weight
    return parseFloat(!_heightInMetres ? 0 : (_weightInKg / (_heightInMetres * _heightInMetres) )).toFixed(2)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BMI Calculator</Text>

      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>SI Unit</Text>
        <Switch
          style={styles.inputRow}
          onValueChange={onChangeUnit}
          value={isImperialUnit}
        />
        <Text style={styles.inputLabel}>Imperial Unit</Text>
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Height ({isImperialUnit ? 'in' : 'cm'}): </Text>
        <TextInput
          style={styles.input}
          onChangeText={ _height => setHeight(_height) }
          value={height}
        />
      </View>
      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Weight ({isImperialUnit ? 'lb' : 'kg'}): </Text>
        <TextInput
          style={styles.input}
          onChangeText={ _weight => setWeight(_weight)}
          value={weight}/>
      </View>
      <Text style={styles.resultRow}>Result BMI: {getBmi()}</Text>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: '30dp',
    margin: '2%',
  },
  inputRow: {
    paddingHorizontal: '10%',
    paddingVertical: '1%',
    marginVertical: '2%',
    flexDirection: "row",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 2,
    display: 'inline',
    padding: '1%',
    backgroundColor: '#aaa',
    color: '#fff'
  },
  inputLabel: {
    flex: 1,
    display: 'inline',
  },
  resultRow: {
    fontSize: '30dp',
    margin: '2%',
  }
});
