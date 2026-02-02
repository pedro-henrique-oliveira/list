import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const visit = () => {
    router.push("/voltar");
  };
  const visit2 = () => {
    router.push("/voltar2");
  };
  return (
    <SafeAreaView style={s.wrap}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={s.body}>
          <Text style={s.title}>Corinthians</Text>
          <Text style={s.paragraph}>1910</Text>
        </View>
        <View style={s.body2}>
          <Image source={require("@/assets/images/logo3.png")} />
        </View>
        <View style={s.logo}>
          <TouchableOpacity style={s.btn} onPress={visit}>
            <Text style={s.btnText}>Loja de camisas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.btn2} onPress={visit2}>
            <Text style={s.btnText2}>Loja de chuteiras</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  body: {
    backgroundColor: "#000000",
    gap: 20,
  },
  body2: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#ffffff",
    paddingBottom: 30,
    textAlign: "center",
    fontSize: 30,
  },
  paragraph: {
    color: "#ffffff",
    paddingBottom: 30,
    textAlign: "center",
    fontSize: 18,
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
    backgroundColor: "#206470",
    width: 200,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#090909",
    borderRadius: 999,
  },
  btn2: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
    backgroundColor: "#206470",
    width: 200,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#090909",
    borderRadius: 999,
  },
  btnText: {
    fontSize: 15,
  },
  btnText2: {},
});
