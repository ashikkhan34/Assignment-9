import React from 'react';
import banner1 from '../../assets/1.jpg';
import banner2 from '../../assets/2.png';
import banner3 from '../../assets/3.jpg';
import banner4 from '../../assets/4.png';

const Banner = () => {
    return (
        <div  data-aos="fade-down">
            <div className="carousel ">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src={banner1}
                        className="w-full h-96" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src={banner2}
                        className="w-full h-96" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src={banner3}
                        className="w-full h-96" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src={banner4}
                        className="w-full h-96" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;