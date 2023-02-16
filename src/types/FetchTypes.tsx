export type Phonetics = {
  text: string;
};
export type Definition = {
  definition: string;
};
export type Meanings = {
  definitions: Definition[];
  partOfSpeech: string;
};
export interface IData {
  word: string;
  phonetics: Phonetics[];
  meanings: Meanings[];
}


