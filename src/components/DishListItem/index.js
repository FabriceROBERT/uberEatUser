import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const DishListItem = ({ dish }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>$ {dish.price}</Text>
      </View>
      {dish.image && (
        <Image source={{ uri: dish.image }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "lightgray",
    paddingBottom: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    paddingVertical: 10,
    flexDirection: "row",
  },
  name: {
    fontWeight: "600",
    fontSize: 18,
    letterSpacing: 0.5,
  },
  description: {
    color: "gray",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    marginVertical: 5,
  },
  image: {
    height: 75,
    aspectRatio: 1,
  },
});

export default DishListItem;
