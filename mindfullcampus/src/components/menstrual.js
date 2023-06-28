import React from 'react';

const MenstrualHealthPage = () => {
  const backgroundImage = "data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23ffffff' fill-opacity='0.35' fill-rule='evenodd'/%3E%3C/svg%3E";

  return (
    <div className="menstrual-health-wrapper" >
      <div className="menstrual-health-container">
        <header>
          <h1 className="page-title">Menstrual Health</h1>
        </header>
        <main>
          <div className="content-container">
            <h2 className="section-title">How to Ease Period Cramps</h2>
            <p className="section-description">
              Period cramps can be uncomfortable. Here are some tips to help ease the pain:
            </p>
            <ul className="tips-list">
              <li>Apply heat to your lower abdomen using a heating pad or hot water bottle.</li>
              <li>Exercise regularly, such as walking or doing yoga, to improve blood circulation and reduce cramps.</li>
              <li>Take over-the-counter pain relievers like ibuprofen or naproxen sodium, following the recommended dosage.</li>
              <li>Try relaxation techniques like deep breathing or meditation to reduce stress and relax your muscles.</li>
              <li>Use a hot towel or take a warm bath to relax your muscles and relieve cramps.</li>
            </ul>
            <h2 className="section-title">Managing Irregular Bleeding</h2>
            <p className="section-description">
              Irregular bleeding can be concerning. Here are some tips to manage irregular menstrual bleeding:
            </p>
            <ul className="tips-list">
              <li>Keep track of your menstrual cycle using a calendar or period tracking app to identify any patterns or irregularities.</li>
              <li>Consult with a healthcare professional to rule out any underlying medical conditions that may be causing the irregular bleeding.</li>
              <li>Consider hormonal birth control methods, like birth control pills or hormonal IUDs, to regulate your menstrual cycle.</li>
              <li>Manage stress levels through relaxation techniques, exercise, and getting enough rest.</li>
              <li>Eat a balanced diet and stay hydrated to support overall menstrual health.</li>
            </ul>
          </div>
        </main>
        <footer>
          {/* Footer content */}
        </footer>
      </div>
    </div>
  );
};

export default MenstrualHealthPage;
