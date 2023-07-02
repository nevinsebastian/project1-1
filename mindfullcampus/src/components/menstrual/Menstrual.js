import React from 'react';
import './menstrual.css';
import image1 from '../images/image1.jpg'
import menscap from '../images/menscap.jpg'
import pad from '../images/pad.jpg'


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

<section>
<h2>Diet Plan for Menstruation</h2>
<ul className="symptom-list">
    <li>
      <span className="symptom">Stay Hydrated:</span> 
      <span className="tip">Drink plenty of water throughout the day to stay hydrated and help alleviate bloating and water retention.</span>
    </li>
    <li>
      <span className="symptom">Iron-Rich Foods:</span>
      <span className="tip">Include iron-rich foods in your diet to help replenish the iron lost during menstruation. Good sources include lean meats, poultry, fish, leafy green vegetables, beans, lentils, and fortified cereals.</span>
    </li>
    <li>
      <span className="symptom">Calcium-Rich Foods:</span>
      <span className="tip">Consume calcium-rich foods to support bone health and reduce menstrual cramps. Include dairy products (milk, yogurt, cheese), leafy greens, tofu, fortified plant-based milk, and nuts in your diet.</span>
    </li>
    <li>
      <span className="symptom">Complex Carbohydrates:</span>
      <span className="tip">Opt for complex carbohydrates like whole grains, brown rice, oats, quinoa, and sweet potatoes. They provide sustained energy, help regulate blood sugar levels, and promote feelings of fullness.</span>
    </li>
    <li>
      <span className="symptom">Fruits and Vegetables:</span>
      <span className="tip">Include a variety of fruits and vegetables in your meals to provide essential vitamins, minerals, and fiber. Berries, citrus fruits, leafy greens, broccoli, and bell peppers are particularly beneficial.</span>
    </li>
    <li>
      <span className="symptom">Avoid Excessive Salt and Caffeine:</span>
      <span className="tip">Reduce your intake of salty foods, as they can contribute to water retention and bloating. Limit your consumption of caffeine, which can potentially worsen symptoms like breast tenderness and irritability.</span>
    </li>
  </ul>
  </section>

  <section>
<h2>Tips for menstruation</h2>
<ul className="symptom-list">
    <li>
      <span className="symptom">Manage Cravings:</span> 
      <span className="tip">Cravings for sweet or salty foods are common during menstruation. Opt for healthier alternatives like dark chocolate, fruits, or lightly salted nuts to satisfy cravings while maintaining a balanced diet.</span>
    </li>
    <li>
      <span className="symptom">Small, Frequent Meals:</span>
      <span className="tip">Instead of large meals, consider eating smaller, more frequent meals throughout the day to help stabilize blood sugar levels and manage energy levels.</span>
    </li>
    <li>
      <span className="symptom">Herbal Teas:</span>
      <span className="tip">Drink herbal teas like chamomile, ginger, or peppermint to ease menstrual discomfort, reduce inflammation, and promote relaxation.</span>
    </li>
    <li>
      <span className="symptom">Gentle Exercise:</span>
      <span className="tip">Engage in light to moderate exercise, such as walking, yoga, or swimming, to help alleviate menstrual symptoms, improve mood, and boost energy levels.</span>
    </li>
    <li>
      <span className="symptom">Heat Therapy:</span>
      <span className="tip">Applying a heating pad or taking warm baths can help relax muscles, alleviate cramps, and provide relief from menstrual pain.</span>
    </li>
   
  </ul>
  </section>



      <section >
        <h2>Menstrual Products</h2>
        <div className='className='product-card-top
>       <div className="product-card">
          <img src={menscap} alt="Product 1" />
          <h3>Menstrual cup</h3>
          <p>Menstrual cups are small, flexible cups made of medical-grade silicone, latex, or elastomer. They are inserted into the vagina to collect menstrual blood.
Unlike pads, menstrual cups are reusable and can last for several years with proper care. They can be emptied, washed, and reinserted, making them a more sustainable option.
Menstrual cups are available in different sizes and shapes to accommodate various body types and menstrual flows. It may take some practice to learn how to insert and remove them correctly, but many people find them comfortable and convenient once they get used to them.
It's important to follow the manufacturer's instructions for cleaning and sterilizing the cup between menstrual cycles.</p>
        </div>
        <div className="product-card">
          <img src={pad} alt="Product 2" />
          <h3>Menstrual Pads</h3>
          <p>Menstrual pads, also known as sanitary pads or sanitary napkins, are absorbent materials worn inside underwear to collect menstrual blood. They come in various sizes and thicknesses to provide different levels of absorbency.
Pads are easy to use and widely available. They typically have an adhesive backing to secure them to underwear. Some pads also have wings that wrap around the underwear for added protection against leaks.
Disposable pads are designed for single-use and should be changed regularly, depending on the flow. There are also reusable cloth pads available that can be washed and used again, making them an eco-friendly option.</p>
        </div>
        {/* Add more product cards */}
        </div> 
      </section>

      <footer>
        <p>&copy; 2023 Mindful campus. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MenstrualPage;
