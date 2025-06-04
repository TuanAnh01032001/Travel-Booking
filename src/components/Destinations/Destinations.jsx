import React,{useEffect} from 'react'
import './Destinations.scss'

//import icons
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";

//imported images
import image1 from '../../Assets/image1.jpg'
import image2 from '../../Assets/image2.jpg'
import image3 from '../../Assets/image3.jpg'
import image4 from '../../Assets/image4.jpg'
import image5 from '../../Assets/image5.jpg'
import image6 from '../../Assets/image6.jpg'
import image7 from '../../Assets/image7.jpg'
import image8 from '../../Assets/image8.jpg'

//create data test
const destinations =[
  {
    id:1,
    img:image1,
    name:'Mautaoekl',
    location:'Paris',
    rating:4.9
  },
  {
    id: 2,
    img: image2,
    name: 'Kiobnmty',
    location: 'Tokyo',
    rating: 4.7
  },
  {
    id: 3,
    img: image3,
    name: 'Lpaswerq',
    location: 'Rome',
    rating: 4.5
  },
  {
    id: 4,
    img: image4,
    name: 'Hjuiklop',
    location: 'Sydney',
    rating: 4.8
  },
  {
    id: 5,
    img: image5,
    name: 'Zxcvbnma',
    location: 'New York',
    rating: 4.6
  },
  {
    id: 6,
    img: image6,
    name: 'Qwertyui',
    location: 'Barcelona',
    rating: 4.9
  },
  {
    id: 7,
    img: image7,
    name: 'Asdfghjk',
    location: 'London',
    rating: 4.4
  },
  {
    id: 8,
    img: image8,
    name: 'Poiuytre',
    location: 'Amsterdam',
    rating: 4.7
  }
]
const Destinations = () => {



  return (
    <div className="destinations section container">
     
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText" >
            EXPlORE NOW
          </span>
          <h3 >Find Your Dream Distination</h3>
          <p >Fill in the fields below to find the best spot for your next tour.</p>
        </div>
        <div className="searchField grid">
          <div className="inputField flex " >
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Location"/>
          </div>
          <div className="inputField flex " >
            <BsFillCreditCardFill className="icon"/>
            <input type="text" placeholder="Budget"/>
          </div>
          <div className="inputField flex" >
            <BsFillCalendar2DateFill  className="icon"/>
            <input type="date" placeholder="Date"/>
          </div>

        <button className='btn flex' >
          <BiSearchAlt  className='icon'/>
          Search</button>
        </div>
      <div className="secMenu">
          <ui className="flex" >
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ui>
      </div>
      <div className="destinationContainer grid">
      {destinations.map(destination =>{
        return(
          <div className="singleDetination" key={destination.id} >
          <div className="imgDiv" >
            <img src={destination.img} alt="Destination Image"/>
            <div className="descInfo flex">
              <div className="text">
                <span className="name">{destination.name}</span>
                <p className='flex'>
                  <IoLocationSharp className='icon'/>{destination.location}
                </p>
              </div>
              <span className="rating">{destination.rating}</span>
            </div>
          </div>

        </div>
        ) 
        } )}
  
      </div>
      </div>
    </div>
  )
}

export default Destinations