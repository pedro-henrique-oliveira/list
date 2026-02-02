import dados from "@/assets/constants/mock";
import { Item } from "@/components/item";
import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function voltar() {
  return (
    <SafeAreaView style={s.wrap}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={s.camisa}></View>
        <FlatList
          data={dados}
          renderItem={({ item }) => (
            <Item name={item.nome} image={item.image}></Item>
          )}
        ></FlatList>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  camisa: {
    alignItems: "center",
    justifyContent: "center",
  },
});
