import React from 'react';
import IMG1 from '../../assets/urun1.jpg';
import IMG2 from '../../assets/urun2.jpg';
import IMG3 from '../../assets/urun3.jpg';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Kara Ceviz Dipcik',
      img: IMG1,
      link: '',
      store: '',
    },
    {
      id: 2,
      title: 'Ham Dipcik',
      img: IMG2,
      link: '',
      store: '',
    },
    {
      id: 3,
      title: 'Açık Arttırma Satış',
      img: IMG3,
      link: '',
      store: '',
    }
  ];
  

  return (
    <section id="portfolio">
      <h5>Ürünlerimizi Mağaza sitemizden alabilirsiniz</h5>
      <h2>Ürünler</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          <h3>{pro.title}</h3>
          <div className="portfolio__item-cta">
            <a href={pro.store} className="btn">store</a>
            <a href={pro.link} className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio