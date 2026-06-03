import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api";
import {Chart as ChartJS,ArcElement,Tooltip,Legend,}from "chart.js";
import { Pie } from "react-chartjs-2";
import "../css/Home.css";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);
function Home() {
  const images = [
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1600",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const [food, setFood] = useState("");

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const searchFood = async () => {

    if (!food) {
      alert("Please enter food name");
      return;
    }

    try {

      setLoading(true);

      const res = await API.post(
        "/nutrients/search",
        { food }
      );

      setData(res.data);

      setLoading(false);

    } catch (err) {

      console.log(err);

      alert("Food fetch failed");

      setLoading(false);
    }
  };

  const chartData = {

    labels: [
      "Calories",
      "Protein",
      "Fat",
      "Carbs",
      "Fiber",
      "Sugar",
    ],

    datasets: [
      {
        data: [
          data?.calories || 0,
          data?.protein || 0,
          data?.fat || 0,
          data?.carbs || 0,
          data?.fiber || 0,
          data?.sugar || 0,
        ],

        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
          "#9966ff",
          "#ff9f40",
        ],

        borderWidth: 1,
      },
    ],
  };

  return (

    <div className="home">

      <Navbar />

      <div className="hero-section">

        <img
          src={images[currentSlide]}
          alt="food"
          className="hero-image"
        />

        <div className="hero-overlay">

          <h1>Nutrient Tracker</h1>

          <p>
            Track Calories, Protein,
            Vitamins & Healthy Nutrition
          </p>

          <div className="search-box">

            <input
              type="text"
              placeholder="Search Apple, Egg, Rice..."
              value={food}
              onChange={(e) =>
                setFood(e.target.value)
              }
            />

            <button onClick={searchFood}>
              Search
            </button>

          </div>

        </div>

      </div>

      {loading && (

        <h2 className="loading">
          Fetching Nutrition Data...
        </h2>

      )}


      {data && (

        <div className="result-section">

          <h1 className="result-title">
            {food} Nutrition Details
          </h1>


          <div className="card-grid">

            <div className="nutrient-card">
              <h3>Calories</h3>
              <p>{data.calories}</p>
            </div>

            <div className="nutrient-card">
              <h3>Protein</h3>
              <p>{data.protein} g</p>
            </div>

            <div className="nutrient-card">
              <h3>Fat</h3>
              <p>{data.fat} g</p>
            </div>

            <div className="nutrient-card">
              <h3>Carbohydrates</h3>
              <p>{data.carbs} g</p>
            </div>

            <div className="nutrient-card">
              <h3>Fiber</h3>
              <p>{data.fiber} g</p>
            </div>

            <div className="nutrient-card">
              <h3>Sugar</h3>
              <p>{data.sugar} g</p>
            </div>

            <div className="nutrient-card">
              <h3>Sodium</h3>
              <p>{data.sodium} mg</p>
            </div>

            <div className="nutrient-card">
              <h3>Potassium</h3>
              <p>{data.potassium} mg</p>
            </div>

            <div className="nutrient-card">
              <h3>Iron</h3>
              <p>{data.iron} mg</p>
            </div>

            <div className="nutrient-card">
              <h3>Zinc</h3>
              <p>{data.zinc} mg</p>
            </div>

          </div>

          <div className="table-container">

            <table>

              <thead>

                <tr>
                  <th>Nutrient</th>
                  <th>Value</th>
                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>Calories</td>
                  <td>{data.calories}</td>
                </tr>

                <tr>
                  <td>Protein</td>
                  <td>{data.protein} g</td>
                </tr>

                <tr>
                  <td>Fat</td>
                  <td>{data.fat} g</td>
                </tr>

                <tr>
                  <td>Carbohydrates</td>
                  <td>{data.carbs} g</td>
                </tr>

                <tr>
                  <td>Fiber</td>
                  <td>{data.fiber} g</td>
                </tr>

                <tr>
                  <td>Sugar</td>
                  <td>{data.sugar} g</td>
                </tr>

                <tr>
                  <td>Sodium</td>
                  <td>{data.sodium} mg</td>
                </tr>

                <tr>
                  <td>Potassium</td>
                  <td>{data.potassium} mg</td>
                </tr>

                <tr>
                  <td>Iron</td>
                  <td>{data.iron} mg</td>
                </tr>

                <tr>
                  <td>Zinc</td>
                  <td>{data.zinc} mg</td>
                </tr>

              </tbody>

            </table>

          </div>

          <div className="chart-container">

            <h2>Nutrient Visualization</h2>

            <div className="pie-chart">

              <Pie data={chartData} />

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Home;

