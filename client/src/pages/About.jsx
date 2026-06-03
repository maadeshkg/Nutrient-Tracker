import Navbar from "../components/Navbar";
import "../css/About.css";
function About() {
  const features = [

    {
      title: "Healthy Lifestyle",

      desc:
        "Nutrient Tracker helps users maintain a healthy and balanced lifestyle by tracking daily food nutrients and improving eating habits.",
    },

    {
      title: "Nutrition Awareness",

      desc:
        "Users can easily understand calories, proteins, carbohydrates, vitamins, minerals, and other important nutrients from foods.",
    },

    {
      title: "Fitness Support",

      desc:
        "Gym users and fitness enthusiasts can monitor protein intake, calories, and diet plans to achieve muscle gain or weight loss goals.",
    },

    {
      title: "Smart Nutrition Tracking",
    
      desc:
        "Users can easily track important nutrients, analyze food intake, and improve their daily diet using a simple and user-friendly platform.",
    },

    {
      title: "Modern MERN Technology",

      desc:
        "Built using MongoDB, Express.js, React.js, Node.js, JWT Authentication, and Nutrition APIs for a powerful full-stack experience.",
    },

    {
      title: "Easy To Use",

      desc:
        "The website provides a simple, responsive, and user-friendly interface suitable for students, gym users, and health-conscious people.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="about-page">

        <div className="about-hero">

          <h1>
            About Nutrient Tracker
          </h1>

          <p>

            Nutrient Tracker is a modern
            nutrition management website
            that helps users understand
            food nutrients, calories,
            proteins, vitamins, minerals,
            and healthy eating habits.

          </p>

        </div>

        <div className="features-container">

          {features.map((item, index) => (

            <div
              className={`feature-card ${
                index % 2 === 0
                  ? "left-card"
                  : "right-card"
              }`}
              key={index}
            >

              <h2>
                {item.title}
              </h2>

              <p>
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </>
  );
}

export default About;