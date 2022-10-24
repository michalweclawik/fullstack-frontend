import Carousel from "../../Components/Carousel/Carousel";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const Home = () => {

  const [cars, setCars] = useState([]);
  const { id } = useParams()

  const getCars = async getCars => {
    let url = "http://localhost:8080/cars";
    const response = await fetch(url);
    const carsData = await response.json();
    setCars(carsData);
  };

  useEffect(() => {
    getCars(id);
  }, [id]);

  return <>
    <h1 className='text-center m-4 car__header' >WELCOME TO THE BEST CAR  DEALERSHIP IN TWON</h1>
    <h2 > the best of the best one!! </h2>
    <Carousel cars={cars} />
  </>
};

export default Home;
