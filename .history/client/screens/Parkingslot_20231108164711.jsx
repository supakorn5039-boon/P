import React, { useEffect } from "react";
import { Text, TouchableOpacity, Image, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import placeholderImage from "../assets/Icons/car-icon.png"; // Import a placeholder image

const ParkingSlot = ({ slotName, isSelected, onSelectSlot }) => {
  const toggleSelection = () => {
    onSelectSlot(slotName, !isSelected);
  };

  useEffect(() => {
    loadState();
  }, []);

  const loadState = async () => {
    try {
      const selectedState = await AsyncStorage.getItem(
        `parkingSlot_${slotName}`
      );
      if (selectedState !== null) {
        onSelectSlot(slotName, JSON.parse(selectedState));
      }
    } catch (error) {
      console.error("Error loading state:", error);
    }
  };

  return (
    <TouchableOpacity onPress={toggleSelection} style={styles.parkingSlot}>
      {isSelected && (
        <Image source={placeholderImage} style={styles.carImage} />
      )}
      <Text style={styles.text}>{slotName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  parkingSlot: {
    width: 150,
    height: 100,
    borderWidth: 1,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    position: "relative",
  },
  carImage: {
    width: 140,
    height: 90,
    position: "absolute",
    top: 5,
    right: 0,
  },
  text: {
    color: "#333",
  },
});

export default ParkingSlot;
