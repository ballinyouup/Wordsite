import { useState } from "react";

interface IButtonReturn {
	buttonStates: boolean[];
	toggleButtonState: (index: number) => void;
	addNewButtonState: () => void;
}

const useButtonStates = (): IButtonReturn => {
	const [buttonStates, setButtonStates] = useState<boolean[]>([]);
	const addNewButtonState = (): void => {
		setButtonStates((prevButtonStates: boolean[]) => {
			return [...prevButtonStates, true];
		});
	};

	const toggleButtonState = (index: number) => {
		setButtonStates((prevButtonStates: boolean[]) => {
			const newState = [...prevButtonStates];
			newState[index] = !newState[index];
			return newState;
		});
	};
	return { buttonStates, toggleButtonState, addNewButtonState };
};

export default useButtonStates;
