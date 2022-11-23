import styles from "../styles/Menu.module.css";
import Head from "next/head";
import Image from "next/image";

import crafty_pug from "../public/crafty.pug.png";

export default function Menu() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul className={styles.ul}>
        <Image
          src={crafty_pug}
          alt="Crafty Pug"
          className={styles.crafty_pug}
        />
        <li className={styles.lia}>
          <a href="#">Dashboard</a>
        </li>
        <li className={`${styles.lia} ${styles.active}`}>
          <a href="menu">Menu</a>
        </li>
        <li className={styles.lia}>
          <a href="#">Customer</a>
        </li>
        <li className={styles.lia}>
          <a href="#">Logout</a>
        </li>
      </ul>
      <div className={`${styles.container} ${styles.grid}`}>
        <button className="p-12 mt-8 ml-2 rounded-3xl shadow-[0_0_4px_2px_rgba(0,0,0,0.25)] bg-b1">
          <h1 className="text-sm">Food</h1>
        </button>
        <button className="p-12 mt-8 rounded-3xl shadow-[0_0_4px_2px_rgba(0,0,0,0.25)] bg-b2">
          <h1 className="text-sm">Drink</h1>
        </button>
        <button className="p-12 mt-8 rounded-3xl shadow-[0_0_4px_2px_rgba(0,0,0,0.25)] bg-b1">
          <h1 className="text-sm">Biscuit</h1>
        </button>
        <button className="p-12 mt-8 mr-2 rounded-3xl shadow-[0_0_4px_2px_rgba(0,0,0,0.25)] bg-b2">
          <h1 className="text-sm">Bread</h1>
        </button>
        <button className="p-12 ml-2 mb-2 rounded-3xl shadow-[0_0_4px_2px_rgba(0,0,0,0.25)] bg-b1">
          <h1 className="text-sm">Fruit</h1>
        </button>
      </div>
    </div>
  );
}
