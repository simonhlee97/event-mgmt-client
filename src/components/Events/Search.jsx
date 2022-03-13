import styles from './styles.module.css'

export const Search = () => {
  return (
    <div className={ styles.search}>
      <input type="text" placeholder='Search Events' />
    </div>
  );
}