import React from "react";
import account from "./Account.module.css";
import Posts from "./Posts/Posts";

function Account(props) {
  return (
    <main className={account.content}>
      <div>
        <figure>
          <img
            src="https://avatarko.ru/img/kartinka/28/multfilm_Futurama_Bender_27624.jpg"
            className={account.avatar}
          />
          <figcaption>{props.username}</figcaption>
        </figure>
        <p>content</p>
      </div>
      <Posts />
    </main>
  );
}

export default Account;
