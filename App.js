import { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.frases = [
      "A vida trará coisas boas se tiver paciência",
      "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si",
      "Não compense na ira o que lhe falta na razão",
      "Defeitos e virtudes são apenas dois lados da mesma moeda",
      "A maior de todas as torres começa no solo",
      "Não há que ser forte. Há que ser flexível",
      "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração",
      "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida",
      "A juventude não é uma época da vida, é um estado de espírito",
      "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos",
    ];

    this.state = {
      textoFrase: "",
      image: require("./assets/biscoito.png"),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }

  quebraBiscoito() {
    let random = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: '"' + this.frases[random] + '"',
      image: require("./assets/biscoitoAberto.png"),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.image} style={styles.image} />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => this.quebraBiscoito()}
        >
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: "#DD7B22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#DD7B22",
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#DD7B22",
  },
});
