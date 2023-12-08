import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import '../../app/globals.css';

const Edit = () => {
  return (
    <div className=''>
        <Navbar />
        <div>

            <div>
                <label >ProductName:</label>
                <input type="text" />
            </div>

            <div>
                <label >Description</label>
                <input type="text" />
            </div>

            <div>
                <label >Price:</label>
                <input type="text" />
            </div>

            <div>
                <label >StockQuantity</label>
                <input type="text" />
            </div>

            <div>
                <label >Color:</label>
                <input type="text" />
            </div>

            <div>
                <label >IsTrend:</label>
                <input type="text" />
            </div>

            <div>
                <label >IsNew:</label>
                <input type="text" />
            </div>

            <div>
                <label >CategoryId:</label>
                <input type="text" />
            </div>

            <div>
                <label >ImagePath:</label>
                <input type="text" value={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWsPfSz6bOW4iOxwZ8krfFxShTYYFVrXM7Q&usqp=CAU"} />
            </div>

        </div>

        <Footer /> 
    </div>
  );
};

export default Edit;
