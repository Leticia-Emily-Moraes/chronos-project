import styles from './Header.module.css'

type HeaderProps = {
  children: React.ReactNode;
}

function Header(props: HeaderProps) {
  const children = props.children;
  return (
    <>
      <h1 className={styles.title}>{children}</h1>
    </>
  )
}

export default Header