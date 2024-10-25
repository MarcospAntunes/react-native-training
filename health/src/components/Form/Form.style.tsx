import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
  },

  form: {
    width: "100%",
  },

  formLabel: {
    color: "#00000",
    fontSize: 18,
    paddingLeft: 20,
  },

  input: {
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },

  buttonCalculator: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%",
    backgroundColor: "#ff0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },

  textButtonCalculator: {
    fontSize: 20,
    color: "#ffffff",
  },

  errorMessage: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
    paddingLeft: 20,
  },

  showResultImc: {
    width: "100%",
    height: "50%",
  },

  listImcs: {
    marginTop: 20
  },

  resultImcItem: {
    fontSize: 26,
    color: "red",
    height: 50,
    width: "100%",
    paddingRight: 20
  },  

  textResultImcItem: {
    fontSize: 16
  }
});

export default styles;