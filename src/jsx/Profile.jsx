import React from 'react';
import "./../css/Profile.css";

const Article = () => {
  return (
    <section className="article">
      <div>
        <img
          src="https://cdn.pixabay.com/index/2022/05/30/18-33-23-872_1440x550.jpg"
          className="first-img"
          alt="background_article"
        />
      </div>
      <div className="about">
        <img
          src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="second-img"
          alt="avatar"
        />
        <div className="about-me">
          <p className="About-me_name">Name: Sergey Barzakouski</p>
          <p className="About-me_date">Date of birth: 18.08.1990</p>
          <p className="About-me_city">City: Grodno</p>
          <p className="About-me_date">Education: Grgu</p>
          <p className="About-me_date">Website: w</p>
        </div>
      </div>
      <div className="post">
          My post
          <form action="">
            <textarea name="text" id="textarea" cols="100" rows="5"></textarea>
          </form>
          <button className='btn' type='submit'><a href="#s">button</a></button>
          <div className="post-sent">
           <p>Post 1</p>
           <p>Post 2</p>
           <p>Post 3</p>
          </div>
        </div>
    </section>
  );
};

export default Article;
