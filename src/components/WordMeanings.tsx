import { FC } from "react"
import useFetch from "../hooks/useFetch"
import useButtonStates from "../hooks/useButtonStates"
import { Meanings, Definition } from "../types/FetchTypes"
import styles from "../styles/WordMeanings.module.css"

const WordPhonetics: FC = () => {
	const { data } = useFetch()
	const { addNewButtonState, buttonStates, toggleButtonState } =
		useButtonStates()
	return (
		<div>
			{data
				? data.meanings.map((meaning: Meanings, index: number) => {
						addNewButtonState
						return (
							<div key={index}>
								<div className={styles.container}>
									<h3>{meaning.partOfSpeech}</h3>
									<button
										className={styles.button}
										onClick={() => toggleButtonState(index)}
									>
										{!buttonStates[index] ? (
											<img
												className={styles.buttonImage}
												src="https://cdn-icons-png.flaticon.com/512/565/565655.png"
											/>
										) : (
											<img
												className={styles.buttonImage}
												src="https://cdn-icons-png.flaticon.com/512/4298/4298899.png"
											/>
										)}
									</button>
								</div>
								{!buttonStates[index]
									? meaning.definitions.map((defn: Definition, idx: number) => {
											return (
												<div key={idx}>
													<strong>{idx + 1}:</strong> {defn.definition}
												</div>
											)
									  })
									: null}
							</div>
						)
				  })
				: null}
		</div>
	)
}

export default WordPhonetics
