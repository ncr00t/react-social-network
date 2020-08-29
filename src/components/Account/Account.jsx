import React from 'react';
import account from './Account.module.css'
console.log(account)
function Account() {
    return (
      <main className={account.content}>
        <div>
          <figure>
            <img src='https://avatarko.ru/img/kartinka/28/multfilm_Futurama_Bender_27624.jpg' className={account.avatar}/>
            <figcaption>John Smith</figcaption>
          </figure>
          <p>
            content
          </p>
        </div>
        <div>
          Posts
          <div>
            New post
          </div>
          <div className={account.posts}>
            <div className={account.post}>Post1</div>
            <div className={account.post}>Post2</div>
          </div>
        </div>
      </main>
    );
}

export default Account;