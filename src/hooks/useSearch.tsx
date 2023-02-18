import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import words from "words.json";

interface ISearchReturn {
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
	handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	handleClick: () => void;
	matching: string[];
	handleMatchingClick: (result: string) => void;
}

const useSearch = (): ISearchReturn => {
	//Creates new query state for search string.
	const [query, setQuery] = useState<string>("");
	const [matching, setMatching] = useState<string[]>([]);
	//Creates a new router from next's useRouter hook.
	const router = useRouter();

	let timeout: NodeJS.Timeout;
	//Sets query to the value of the input with a timeout to display results
	const handleInput = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const input: string = event.target.value;
			setQuery(input);

			if (input.length >= 2) {
				clearTimeout(timeout);
				timeout = setTimeout(() => {
					const keys = Object.keys(words);
					const matchingWords = keys.filter((key: string) => {
						const regex = new RegExp(`^${input}`, "i");
						return regex.test(key);
					});
					setMatching(matchingWords);
				}, 300);
			} else {
				setMatching([]);
			}
		},
		[]
	);

	//Runs handleSearch on Enter
	function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === "Enter") {
			handleSearch();
		}
	}
	//Runs handleSearch on click of search icon button.
	function handleClick() {
		handleSearch();
	}

	/*
  The handleSearch function stored the trimmed query inside trimmedQuery.
  If trimmedQuery has a value, it moves you to the location. 
  Resets query, and value of input.
  */
	function handleSearch() {
		router.push(`/${query}`);
		setQuery("");
	}

	function handleMatchingClick(result: string) {
		router.push(`/${result}`);
		setQuery("");
	}

	//Returns the objects below to be used in components.
	return {
		query,
		setQuery,
		handleInput,
		handleKeyDown,
		handleClick,
		matching,
		handleMatchingClick,
	};
};

export default useSearch;
