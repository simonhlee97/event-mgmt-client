import styles from './styles.module.css'

export const Button = ({ children, restProps }) => {
  return (
    <button className={styles.btn} {...restProps}>{children}</button>
  )
}