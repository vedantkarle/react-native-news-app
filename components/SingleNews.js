import React from "react";
import {
	Dimensions,
	Image,
	ImageBackground,
	Linking,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({ item, index }) => {
	return (
		<View
			style={{
				width: windowWidth,
				height: windowHeight,
				transform: [{ scaleY: -1 }],
			}}>
			<Image
				source={{ uri: item.urlToImage }}
				style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
			/>
			<View style={{ ...styles.description, backgroundColor: "#282C35" }}>
				<Text style={{ ...styles.title, color: "white" }}>{item.title}</Text>
				<Text style={{ ...styles.content, color: "white" }}>
					{item.description}
				</Text>
				<Text style={{ color: "white" }}>
					Short By
					<Text> {item.author ?? "unknown"}</Text>
				</Text>
				<ImageBackground
					blurRadius={30}
					style={styles.footer}
					source={{ uri: item.urlToImage }}>
					<TouchableOpacity onPress={() => Linking.openURL(item.url)}>
						<Text style={{ fontSize: 15, color: "white" }}>
							'{item?.content?.slice(0, 45)}...'
						</Text>
						<Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
							Read More
						</Text>
					</TouchableOpacity>
				</ImageBackground>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		fontWeight: "bold",
		paddingBottom: 10,
	},
	content: {
		fontSize: 18,
		paddingBottom: 10,
	},
	description: {
		padding: 15,
		flex: 1,
	},
	footer: {
		height: 80,
		width: windowWidth,
		position: "absolute",
		bottom: 0,
		backgroundColor: "#d7b369",
		justifyContent: "center",
		paddingHorizontal: 20,
	},
});

export default SingleNews;
