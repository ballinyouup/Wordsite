import { useState } from "react";

interface ButtonReturn {
	buttonStates: boolean[];
	toggleButtonState: (index: number) => void;
	addNewButtonState: () => void;
}

const useButtonStates = (): ButtonReturn => {
	const [buttonStates, setButtonStates] = useState<boolean[]>([]);
	const addNewButtonState = (): void => {
		setButtonStates((prevButtonStates: boolean[]) => {
			return [...prevButtonStates, true];
		});
	};
	
	const toggleButtonState = (index: number): void => {
		setButtonStates((prevButtonStates: boolean[]) => {
			const newState = [...prevButtonStates];
			newState[index] = !newState[index];
			return newState;
		});
	};
	return { buttonStates, toggleButtonState, addNewButtonState };
};

export default useButtonStates;
