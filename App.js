import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import InshortTabs from "./components/InshortTabs";

export default function App() {
	return (
		<View style={styles.container}>
			<InshortTabs />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
});
