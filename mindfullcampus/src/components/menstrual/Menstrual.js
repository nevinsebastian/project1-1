import React from 'react';
import './menstrual.css';
import image1 from '../images/image1.jpg'
import menscap from '../images/menscap.jpg'


const MenstrualPage = () => {
  return (
    <div className="menstrual-page">
      <header>
        <h1>Menstrual Tips and Information</h1>
      </header>

      <section className='toppart'>
        <h2 className='toppart-heading'>About Menstruation</h2>
        <p className='toppart-para'>Menstruation, also commonly known as a period, is a natural physiological process that occurs in the female reproductive system. It is a recurring cycle in which the lining of the uterus, known as the endometrium, is shed through the vagina. This process is a key part of the menstrual cycle, which typically lasts for an average of 28 days, although variations are common.

During each menstrual cycle, the body undergoes a series of hormonal changes that prepare the reproductive system for potential pregnancy. The menstrual cycle is regulated by hormones, primarily estrogen and progesterone. These hormones influence the growth of the endometrium and the release of an egg from the ovaries, known as ovulation.

If fertilization of the egg by sperm does not occur, the levels of estrogen and progesterone decrease, leading to the shedding of the endometrial lining. This shedding results in the menstrual flow, characterized by the discharge of blood, tissue, and mucus from the uterus through the cervix and out of the vagina. Menstrual bleeding typically lasts for a few days, although the duration can vary from person to person.</p>
        <img src={image1} alt="Menstruation" />
      </section>

      <section>
  <h2>Common Menstrual Symptoms</h2>
  <ul className="symptom-list">
    <li>
      <span className="symptom">Cramps:</span> 
      <span className="tip">To alleviate cramps, try applying a heating pad to your lower abdomen, taking over-the-counter pain relievers, and engaging in light exercise or relaxation techniques.</span>
    </li>
    <li>
      <span className="symptom">Bloating:</span>
      <span className="tip">To reduce bloating, avoid salty foods, drink plenty of water, and incorporate foods rich in potassium, such as bananas and leafy greens, into your diet.</span>
    </li>
    <li>
      <span className="symptom">Headaches:</span>
      <span className="tip">To manage headaches, ensure you are well-hydrated, practice stress-reducing techniques, and consider using a cold compress or taking pain relief medication recommended by your healthcare provider.</span>
    </li>
    <li>
      <span className="symptom">Mood swings:</span>
      <span className="tip">To help stabilize your mood, engage in regular physical activity, get adequate sleep, practice relaxation exercises, and consider talking to a mental health professional if needed.</span>
    </li>
  </ul>
</section>


      <section >
        <h2>Menstrual Products</h2>
        <div className='className='product-card-top
>       <div className="product-card">
          <img src={menscap} alt="Product 1" />
          <h3>Product 1</h3>
          <p>A brief description of the product.</p>
        </div>
        <div className="product-card">
          <img src={menscap} alt="Product 2" />
          <h3>Product 2</h3>
          <p>A brief description of the product.</p>
        </div>
        {/* Add more product cards */}
        </div> 
      </section>

      <footer>
        <p>&copy; 2023 Your Website Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MenstrualPage;
