//import React, { useState } from 'react'
import React from 'react';
import image from "../constants/imgfolder/image.png"
import menuicon from "../constants/imgfolder/dots-menu.png"


const Header = ({ handleListView }) => {
 
  return (
    <div className='p-2 border flex items-center justify-between fixed w-screen z-50 bg-white top-0 left-0 h-20'>
        <div className='flex items-center'>
            <button onClick={handleListView}>
            <img className='h-7 w-8 ml-4 text-xl text-gray-400' alt='menu-logo' src={image} />
            </button>
            <div className='py-2 flex items-center text-3xl'>
                <img className='ml-3 px-2' alt='logo' src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png'/>
                <h1 className='text-gray-700'>Keep</h1>
            </div>
        </div>
        <form className='flex  w-2/4 border items-center p-2 rounded-xl shadow-bottom'>
            <button className='pr-4'> 
                <img className='h-6 w-7 text-xl text-gray-400' alt='search' src="https://img.icons8.com/?size=50&id=aBNtkpYvycsP&format=png"/>
            </button>
            <input className="w-full border-none outline-none p-2" type='text' placeholder='Search' name='q' />
        </form>
        <div className='flex items-center'>
            <div className='w-10 h-10 rounded-full flex justify-center items-center m-2'>
                <button>
                    <img className="w-7" alt="refresh_button" src="https://www.gstatic.com/images/icons/material/system_gm/1x/refresh_black_24dp.png"/>
                </button>
            </div>
            <div  className='w-10 h-10 rounded-full flex justify-center items-center m-2'>
                <button>
                    <img className="w-7" alt="list_view_button" src="https://www.gstatic.com/keep/list_view_24px.svg"/>
                </button>
            </div>
            <div  className='w-10 h-10 rounded-full flex justify-center items-center m-2'>
                <button>
                    <img className="w-7 text-gray-300" alt="setting_button" src="https://www.gstatic.com/images/icons/material/system_gm/svg/settings_24px.svg" />
                </button>
            </div>
        </div>
        <div className="flex items-center">
            <div  className='w-10 h-10 rounded-full flex justify-center items-center m-2'>
                <button>
                    <img className="w-5 mx-2" alt="menu_icon" src={menuicon} />
                </button>
            </div>
            <div  className='w-10 h-10 rounded-full flex justify-center items-center m-2'>
                <button>
                    <img className="w-8 mx-2" alt="profile_photo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AgPEBYrHoEFUgAAAw1JREFUeNrt3b9uE0EQBvBvZvd8LURUkVwEkEDAm9AgQYOQKHgZWloqUMoUaVJSpAivQBEhJGhSWiAlKXz7JwXey9nE9vrOgHT3fZKVFM5F/mUyN5tIY8F2EtG/yNYucnZ21keg/57d3V1RMvzdEJjABGYITGACM+1iNz5RxGGPzCIbnT+i3RA1AjgFcADgR4zRDwTVABjHGF8AeJwOaDnYNgd29jGGED6JyMvxeDwZYvVOJpN3FxcXH0TkWfMovQpac6p39jgdMi4A7Ozs/HLOvQkhfEkurW9yDVh47+GcOxgybsre3t5P59y+937OqHUFhxAQQkBVVd85E/yOc+5bcuk0pqWLeO/hvQ+krV289x45yLqqPSRk5xym0yllZ5lOp6iqCiGEtW3C5lZwzq/DUOK9h4jUwK3GtGYFz1oEZa97cA2crJaNapozoiVk5rqCm+2h898ihn487uKiWPMPy2arYG7G7TQHM91CYAITmCEwgQnMEJjABGYITGCGwAQmMENgAhOYITCBCUwCAhOYITCBCcwQmMAEZghMYIbABCYwQ2ACE5ghMIEJzBCYwAyBCUxghsAEJjBDYAIzBP63wFkLcUX4lhAp3nu79Qr23t8lbZ37WwNuLFx7fnJycnvossfHx7dijK+WGLWrYBFBjPHh5eXl/tHR0Z0h41ZV9T7G+EREum/AThcREaiqqOpTAJ8PDw8/VlX11TnnhgArIrYsy3vn5+evy7J8NLNADrJd1xpUFcaY9BBVfSAib2foAPq7GTAZGGNSkcFaC2stjDH161+BLGsrOAEXRYGyLOsNgKqK5hbovgIng/T6R6MRiqKogVtVcPqi5k+tKIo5XOfcYICNMbDWYjQaoSzLP4BXtYqVFayqiDHCWlsjJnDnXPYG0j5UcCqy9LDWtq/gZcipHxVFMbfitec3uMX70FwP7nyTW2zyaSt236v3pipO7UJVs9pDVgU3p4n0jZqwQwBeHFlzYLPn4MXPb4Lt+5i2CJ1zgsuu4GUX2vBNk3qJnvX8jOdwv3h7O1wBYIqaD5lCtYoAAAAASUVORK5CYII=" />
                </button>
            </div>

        </div>
    </div>
  );
};

export default Header
