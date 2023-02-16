import { FC } from "react"
import useSearch from "@/hooks/useSearch"
import styles from "@/styles/Search.module.css"
const Search: FC = ():JSX.Element => {
	const {
		query,
		handleInput,
		handleKeyDown,
		handleClick,
		matching,
		handleMatchingClick,
	} = useSearch()

	return (
		<div className={styles.searchContainer}>
			<input
				className={styles.search}
				onChange={handleInput}
				onKeyDown={handleKeyDown}
				placeholder="Enter word for definition.."
				value={query}
			/>
			<div className={styles.resultContainer}>
				{query != ""
					? matching.slice(0, 10).map((result: string, index: number) => (
							<button
								onClick={() => handleMatchingClick(result)}
								className={styles.result}
								key={index}
							>
								{result}
							</button>
					  ))
					: null}
			</div>
			<button className={styles.searchButton} onClick={handleClick}>
				<img
					className={styles.searchIcon}
					src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
				/>
			</button>
		</div>
	)
}

export default Search
