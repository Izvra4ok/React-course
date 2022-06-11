import React from 'react';
import mod from "./../css/Profile.module.css";

const Article = () => {
  return (
    <section className={mod.article}>
      {/* <div>
        <img
          src="https://cdn.pixabay.com/index/2022/05/30/18-33-23-872_1440x550.jpg"
          className={mod.first_img}
          alt="background_article"
        />
      </div> */}
      <div className={mod.about}>
        <img
          src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className={mod.second_img}
          alt="avatar"
        />
        <div className={mod.about__me}>
          <p className={mod.about__me_name}>Name: Sergey Barzakouski</p>
          <p className={mod.about__me_date}>Date of birth: 18.08.1990</p>
          <p className={mod.about__me_city}>Country: Republic of Belarus, Grodno</p>
          <p className={mod.about__me_date}>Education: Yanka Kupala State University of Grodno, faculty: Law'18</p>
          <p className={mod.about__me_date}>Website: https://github.com/Izvra4ok</p>
        </div>
      </div>
      <div className={mod.post}>
          <form action="#" method='get'>
            <textarea className={mod.areatext} name="text" id="textarea" cols="100" rows="5" placeholder="Введите что-нибудь"></textarea>
          </form>
          <a className={mod.button} href="#s">SEND</a>
          <div className={mod.post_sent}>
           <p>Post 1</p>
           <p>Post 2</p>
           <p>Post 3</p>
          </div>
        </div>
    </section>
  );
};

export default Article;
