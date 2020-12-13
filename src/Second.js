import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import Product from './Product';
import "./Second.css";


function Second() {

    const history = useHistory();

    return (
        <div className="second">

            <div>  
                <Helmet>
                <title>Amazon-Clone | Page2</title>
                </Helmet>
           </div>

           <div className="home__container">
             <img
             className="home__image"
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
             alt="Amazon Banner"
            />

         <div className="home_row">
            <Product 
            id="#2897659"
            title="Fire TV Stick 4K streaming device with Alexa Voice Remote"
            price={39.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_SL1000_.jpg"
            />
            <Product 
            id="#1232455"
            title="iRobot Roomba 675 Robot Vacuum-Wi-Fi Connectivity, Good for Pet Hair, Carpets, Hard Floors, Self-Charging"
            price={599.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816uZdNKYhL._AC_SL1500_.jpg"
            />
             <Product 
                id="#8749301"
                title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer"
                price={149.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6111XswdaTL._AC_SL1001_.jpg"
            />
         </div>
         <div className="home_row"> 
            <Product 
                id="#2798393"
                title="AstroAI Mini Fridge: 4 Liter/6 Can AC/DC Portable Thermoelectric Cooler and Warmer"
                price={46.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/61jD2Yg2y4L._AC_SL1500_.jpg"
            />
             <Product 
                id="#3322564"
                title="Red Bull Energy Drink, Tropical, Yellow Edition, 12 fl oz (24 Count)"
                price={48.54}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71x8IGsY4KL._SL1500_.jpg"
            />
         
         </div>
         <div className="home_row"> 
            <Product 
                id="#4593220"
                title="Spa Luxetique Gift Baskets: Luxury 10 Pcs Spa Kit with Bath Bombs, Body Lotion, Bubble Bath "
                price={35.97}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/716C4APcgYL._SL1500_.jpg"
            />
             <Product 
                id="#7843895"
                title="Leafael Infinity Necklace: Heart Birthstone Pendant"
                price={39.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/71vbcebs1gL._AC_UL640_QL65_.jpg"
            />
             <Product 
                id="#2415336"
                title="UGG Women's Fluff Yeah Slide Slipper"
                price={99.95}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71eADiFHAxL._AC_UL320_SR320,320_.jpg"
            />
         
         </div>
         <div className="home_row"> 
            <Product 
                id="#2543788"
                title="Jack Link’s Beef Jerky Bold Variety Pack – Includes Sweet & Hot, Jalapeno and Peppered Beef Jerky-Pack of 15, 1.25 Oz Bags "
                price={29.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/7158fXcn5CL._SL1451_.jpg"
            />
             <Product 
                id="#2561880"
                title="Mobo Triton Pro: Tricycle Bike"
                price={348.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71xrWbOB%2BeL._AC_SL1500_.jpg"
            />
         
         </div>
         <div className="home_row"> 
             <Product 
                id="#4532167"
                title="Nautica: 1/4 Zip Fleece Sweatshirt"
                price={39.99}
                rating={5}
                image="https://m.media-amazon.com/images/I/81Op6q59QWL._AC_UL640_QL65_.jpg"
             />
              <Product 
                id="#3346893"
                title="Champion: Mens Fleece Jogger Sweatpants with C Logo"
                price={43.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/616OkP6EuPL._AC_UL640_QL65_.jpg"
              />
                <Product 
                    id="#3425631"
                    title="UMYOGO: Mens Athletic Running Shoes "
                    price={42.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41ghBZWHrIL._AC_SR320,320_.jpg"
                />
         
         </div>
         <div className="home_row"> 
            <Product 
                id="#0765475"
                title="NERF Elite 2.0 Commander RD-6 Blaster, 12 Official Darts"
                price={12.97}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816AFd%2B-UrL._AC_SL1500_.jpg"
            />
            <Product 
                id="#4398257"
                title="Nintendo Switch Lite - Gray"
                price={199.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71YC7GYYKAL._AC_SL1500_.jpg"
            />
         
         </div>

           
            

            <button className="next" onClick={e => history.push('/home')}>Prev</button>
            </div>
        </div>
    )
}

export default Second
