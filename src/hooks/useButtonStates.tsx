import { useState } from "react"

const useButtonStates = () => {
	const [buttonStates, setButtonStates] = useState<boolean[]>([])
	const addNewButtonState = (): void => {
    setButtonStates((prevButtonStates: boolean[]) => {
      return [...prevButtonStates, true];
    });
  };
  
	const toggleButtonState = (index: number) => {
		setButtonStates((prevButtonStates: boolean[]) => {
			const newState = [...prevButtonStates]
			newState[index] = !newState[index]
			return newState
		})
	}
	return { buttonStates, toggleButtonState, addNewButtonState }
}

export default useButtonStates
