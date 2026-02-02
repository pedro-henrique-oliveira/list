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
        <View style={s.logo}>
          <TouchableOpacity style={s.btn} onPress={visit}>
            <Text style={s.btnText}>
              <Image source={require("@/assets/images/logo3.png")} />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.btn} onPress={visit2}>
            <Text style={s.btnText}>
              <Image source={require("@/assets/images/logo3.png")} />
            </Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#ffffff",
    fontSize: 15,
  },
});
