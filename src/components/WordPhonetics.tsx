import { FC } from "react";
import useFetch from "@/hooks/useFetch";
import { Phonetics } from "@/types/FetchTypes";

const WordPhonetics: FC = (): JSX.Element => {
	const { data } = useFetch();
	return (
		<strong>
			{data
				? data.phonetics.map((phtc: Phonetics, index) => {
						return (
							<div key={index}>
								<span>{phtc.text}</span>
								<br />
							</div>
						);
				  })
				: null}
		</strong>
	);
};

export default WordPhonetics;
