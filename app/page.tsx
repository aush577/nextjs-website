import Image from "next/image";
import avatar from './ProfileAvatar.png';
import styles from './styles/home.module.css';

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.cnotainer}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my site!
        </h1>
        <Image src = {avatar} height = {150} alt = "Profile Avatar"/>
        <p>Aayush Patel</p>
      </main>

      <footer className={styles.footer}>
        <div><small><center>© {year} Aayush Patel | All rights reserved</center></small></div>
      </footer>
    </div>
  );
}
