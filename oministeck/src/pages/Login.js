import React, { Component } from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.content}>
          <Icon name='twitter' size={64} color='#4BB0EE' />

          <TextInput
            style={styles.input}
            placeholder='Nome de usuario'
            returnKeyType='send'
          />

          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 30
  },

  button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 10,
    backgroundColor: "#4BB0EE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default Login