import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI, getSourceAPI } from "./api";

export const NewsContext = createContext();

const Context = ({ children }) => {
	const [news, setNews] = useState([]);
	const [category, setCategory] = useState("general");
	const [index, setIndex] = useState(1);
	const [source, setSource] = useState();
	const [darkTheme, setDarkTheme] = useState(true);

	const fetchNews = async (reset = category) => {
		const { data } = await axios.get(getNewsAPI(reset));

		setNews(data);
		setIndex(1);
	};

	const fetchNewsFromSource = async () => {
		try {
			const { data } = await axios.get(getSourceAPI(source));

			setNews(data);
			setIndex(1);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchNews();
	}, [category]);

	useEffect(() => {
		fetchNewsFromSource();
	}, [source]);

	return (
		<NewsContext.Provider
			value={{
				news,
				index,
				setIndex,
				fetchNews,
				category,
				setCategory,
				source,
				setSource,
				darkTheme,
				setDarkTheme,
			}}>
			{children}
		</NewsContext.Provider>
	);
};

export default Context;
