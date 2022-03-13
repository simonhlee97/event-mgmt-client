import styles from './styles.module.css'

export const Button = ({ children, restProps }) => {
  return (
    <button className={styles.button} {...restProps}>{children}</button>
  )
}