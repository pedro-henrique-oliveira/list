import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export const Item = ({ name, image }: { name: string; image: string }) => {
  return (
    <View style={s.itemList}>
      <Image style={s.imageStyle} source={image} />
      <Text style={s.name}>{name}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  itemList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#C0C0C0",
    margin: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  imageStyle: {
    width: 120,
    height: 150,
    borderRadius: 25,
  },
  name: {
    fontSize: 16,
  },
});
