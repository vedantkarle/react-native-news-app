import React, { useContext, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { NewsContext } from "../API/Context";
import SingleNews from "../components/SingleNews";

const NewsScreen = () => {
	const {
		news: { articles },
	} = useContext(NewsContext);

	const windowHeight = Dimensions.get("window").height;

	const [activeIndex, setActiveIndex] = useState();

	return (
		<View style={styles.carousel}>
			{articles && (
				<Carousel
					layout={"stack"}
					data={articles.slice(0, 10)}
					sliderHeight={300}
					itemHeight={windowHeight}
					vertical={true}
					renderItem={({ item, index }) => (
						<SingleNews item={item} index={index} />
					)}
					onSnapToItem={index => setActiveIndex(index)}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	carousel: {
		flex: 1,
		backgroundColor: "black",
		transform: [{ scaleY: -1 }],
	},
});

export default NewsScreen;
