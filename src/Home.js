import React from 'react';
import './Home.css';
import Product from './Product'

// The Body of the Amazon page

function Home() {
    return (
        <div className="home">
            <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Amazon Banner"
        />

        <div className="home_row">
            <Product 
            id="#2039484"
            title="The CookerNinja OS101 Foodi 9-in-1 Pressure Cooker and Air Fryer with Nesting Broil Rack, 5-Quart Capacity, and a Stainless Steel Finish"
            price={129.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/410QLbTnUUL._AC_.jpg"
            />
            <Product 
            id="#1232455"
            title="Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Rose Gold "
            price={599.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/71EvvFHgzzL._AC_UY436_QL65_.jpg"
            />
        </div>

        <div className="home_row">
           <Product id="#4837237"
            title="The Art of War by Sun Tzu and Peter Harris (Hardcover)"
            price={24.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/91UL2DN6XvL._AC_UY436_QL65_.jpg"
            />
           <Product id="#11235675 "
            title="Stainless Steel Mixing Bowls with Lids - Graters, Handle, Pour Spout, Airtight Lids (Set Of 3) "
            price={34.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71laoYKSSNL._AC_SL1500_.jpg "
            />
           <Product 
           id="#5842729"
           title="Ecology Cloth Reusable Washable Face Mask : Set 4 Large Masks BLACK, GREEN, LAVENDER, and PINK "
           price={13.95}
           rating={4}
           image="https://images-na.ssl-images-amazon.com/images/I/61d31FX2fzL._SL1500_.jpg"
            />
        </div>
         
        <div className="home_row">
            <Product 
            id="#74835838"
            title="Othello by William Shakespeare"
            price={7.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41ZKW6RWIBL._SX331_BO1,204,203,200_.jpg "
            />
            <Product 
            id="#8356279"
            title="Forever Love: Rose Gold Infinity Forever Roses Flower "
            price={34.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71oNJlk3mdL._AC_SL1500_.jpg "
            />
        </div>

        <div className="home_row">
            <Product 
            id="#4373802) "
            title="DEWALT Mechanics Tools Kit and Socket Set, 142-Piece "
            price={99.82}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71iEIgE62SL._AC_SL1000_.jpg "
            />
            <Product 
            id="#8374632"
            title="Royal Gourmet: SG6002 Cabinet Propane Gas Grill, 6-Burner, Stainless Steel"
            price={329.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71-k5PTUUnL._AC_UY436_QL65_.jpg"
            />
            <Product 
            id="#5873450"
            title="YETI Hopper Flip Portable Cooler "
            price={249.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61Kzcls5sbL._AC_SL1500_.jpg "
            />
        </div>

        <div className="home_row">
         <Product 
         id="#9485732"
         title="Apple Watch Series 6 (GPS 40mm) - Blue Aluminum Case with Deep Navy Sport Band"
         price={369.75}
         rating={5}
         image="https://m.media-amazon.com/images/I/71bf9IpGjtL._AC_UY436_QL65_.jpg"
            />
         <Product 
         id="#5837392"
         title="Amazon Echp (4th Generation)| With premium sound, smart home hub, and Alexa"
         price={69.99}
         rating={4}
         image="https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_UY436_QL65_.jpg"
         />
        </div>

        <div className="home_row">
         <Product 
         id="#58392056"
         title="SAMSUNG 65-inch Class QLED Q60T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in "
         price={947.99}
         rating={4}
         image=" https://images-na.ssl-images-amazon.com/images/I/81fkfrkmjSL._AC_SL1500_.jpg"
            />
        </div>
      </div>
        </div>
    )
}

export default Home
