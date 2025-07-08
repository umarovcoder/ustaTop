import React from 'react'
import Header from '../components/header/Header'
import lupa from '../assets/Image.png'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Header/>

        <div className='container main_content'>
            <div className='main_contnet_title'>
                <h1 className='main_contnet_title_h1'>O'zbekistonda ustalarni topishning eng oson va ishonchli yo‘li</h1>
                <p className='main_contnet_title_p'>UstaTop-ga xush kelibsiz, O'zbekistonda ishonchli qo'l mehnati ishchilarini topish uchun asosiy platformangiz. Bizning qulay interfeysimiz sizga turli sohalarda malakali mutaxassislarni osongina qidirish va ular bilan bog'lanish imkonini beradi.</p>
            </div>
            <div className='main_contnet_title_img'>
                <img className='main_contnet_title_img_img' src={lupa} alt="lupa" />
            </div>
        </div>
    </div>
  )
}

export default Home