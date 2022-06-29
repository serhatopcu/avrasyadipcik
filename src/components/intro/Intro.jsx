import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import logo from '../../assets/logo.jpg';
import fab1 from '../../assets/fab1.jpg';
import fab2 from '../../assets/fab2.jpg';
import fab3 from '../../assets/fab3.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Avrasya Dipcik</h5>
      <h2>Düzce de Büyüyoruz</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={logo} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Deneyim</h5>
              <small>10 yıl dır düzce de ceviz alım satımı yapmaktayız</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Üretim</h5>
              <small>Yeni fabrikamızla üretim kapasitemizi arttırıyoruz</small>
            </article>
          </div>
          <p>Düzce kapalı 6000 m2 alana sahip yeni fabrikamız da türkiyenin bu sektörde enleri arasında yer almaya başladık.</p>
          <a href="#contact" className="btn btn-primary">Bize Ulaşın</a>
          <article className="about__item" >
            <div className="about__item-image">
              <img src={fab1} alt='fabrika' />
            </div>
            <div className="about__item-image">
              <img src={fab2} alt='fabrika' />
            </div>
            <div className="about__item-image">
              <img src={fab3} alt='fabrika' />
            </div>
          </article>
        </div>
        
      </div>
    </section>
  )
}

export default Intro