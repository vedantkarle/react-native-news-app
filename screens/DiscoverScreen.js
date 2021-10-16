import React, { useContext } from "react";
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { categories, sources } from "../API/api";
import { NewsContext } from "../API/Context";
import Search from "../components/Search";

const DiscoverScreen = () => {
	const { category, setCategory, setSource, darkTheme } =
		useContext(NewsContext);
	const windowWidth = Dimensions.get("window").width;
	const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

	return (
		<View style={styles.discover}>
			<Search />
			<Text
				style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}>
				Categories
			</Text>
			<Carousel
				layout={"default"}
				data={categories}
				renderItem={({ item, index }) => (
					<TouchableOpacity
						style={styles.category}
						onPress={() => setCategory(item.name)}>
						<Image source={{ uri: item.pic }} style={styles.categoryImage} />
						<Text
							style={{ ...styles.name, color: darkTheme ? "white" : "black" }}>
							{item.name}
						</Text>
					</TouchableOpacity>
				)}
				sliderWidth={windowWidth}
				itemWidth={SLIDE_WIDTH}
				activeSlideAlignment={"start"}
				inactiveSlideScale={1}
				inactiveSlideOpacity={1}
			/>
			<Text
				style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}>
				Sources
			</Text>
			<View style={styles.sources}>
				{sources.map((source, index) => (
					<TouchableOpacity
						onPress={() => setSource(source.id)}
						key={index}
						style={styles.sourceContainer}>
						<Image source={{ uri: source.pic }} style={styles.sourceImage} />
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	discover: {
		padding: 10,
		alignItems: "center",
	},
	subtitle: {
		fontSize: 20,
		fontWeight: "bold",
		paddingBottom: 8,
		marginHorizontal: 5,
		borderBottomColor: "#007FFF",
		borderBottomWidth: 5,
		alignSelf: "flex-start",
		borderRadius: 10,
	},
	categoryImage: {
		height: "60%",
		width: "100%",
		resizeMode: "contain",
	},
	name: {
		fontSize: 14,
		textTransform: "capitalize",
	},
	category: {
		height: 130,
		margin: 10,
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	sources: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
		paddingVertical: 15,
	},
	sourceContainer: {
		height: 150,
		width: "40%",
		borderRadius: 10,
		margin: 15,
		backgroundColor: "#cc313d",
	},
	sourceImage: {
		height: "100%",
		borderRadius: 10,
		resizeMode: "cover",
	},
});

export default DiscoverScreen;
