import React from 'react'
import "./Hero.scss"
import { FaSun } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";

async function Hero() {
  const data = await fetch( 'https://api.weatherapi.com/v1/forecast.json?key=c3a6dc4386cc49e7ba0155411242212&q=tashkent&days=14&aqi=yes&alerts=yes')
  const posts = await data.json()
  const forecast = posts?.forecast.forecastday;
  console.log(posts);
  
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <div className="hero__card">
              <p className="hero__title">{posts?.location.name},  {posts.location.country}</p>
              <div className='hero__sun'>
                <FaSun/>
              <p className='hero__subtitle'>{posts?.current.temp_c}°</p>
              </div>
              <p className='sunny'>{posts?.current.condition.text}</p>
              <p className='hero__hour'>{posts?.current.last_updated}</p>
            </div>
          </div>
          <h2>Daily</h2>
          <div className="hero__cloud">
            {
              forecast.slice(0, 6).map((daily) => (
            <div className="hero__cloud-card" key={daily.date}>
              <p className='hero__cloud-title'>{daily.date}</p>
              <FaCloudSun/>
                <p className='cloud_title'>{daily.day.condition.text}</p>
              <div className='cloud'>
              <p className='hero__cloud-subtitle'>{daily.day.maxtemp_c}°</p>
              <p className='hero__cloud-desc'>{daily.day.mintemp_c}°</p>
              </div>
            </div>
              ))
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero