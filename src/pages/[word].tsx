import styles from '../styles/Word.module.css';
import useFetch from '../hooks/useFetch';
import WordPhonetics from '../components/WordPhonetics';
import WordMeanings from '../components/WordMeanings';
import LoadingWord from '../components/LoadingWord';

const Word = () => {
  const { word, isLoading } = useFetch();

  return (
    <div className={styles.content}>
      {isLoading ? (
        <LoadingWord />
      ) : (
        <>
          <h1 className={styles.word}>{word}</h1>
          <WordPhonetics />
          <WordMeanings />
        </>
      )}
    </div>
  );
};

export default Word;
