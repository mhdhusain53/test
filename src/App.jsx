import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className='body'>
      <div className='logo'>
        <img src="./logo.png" className='logo' alt="logo" />
      </div>
      <div className=" flex-container">
        <div className="column1">
          <img className="one" src="./1.png" alt="logo" />

        </div>
        <div className="column2">
          <h4> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
          </h4>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.

            </li>
            <li>    C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
            </li>
          </ul>
          <img src="./2.png" className="two" />
          <p>
            Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>

      </div>
      <p className="mid" >INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
      </p>

      <img src="./3.png" className='three' alt="" />
      <p className='mid'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
      </p>

      <hr className='hr'/>
      <h4 className='mid'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
      <p className='mid'> CHEMICALS & PROCESS <span className="ver">|</span> POWER <span className="ver">|</span> WATER & WASTE WATER <span className="ver">|</span> OILS & GAS <span className="ver">|</span> PHARMA SUGARS & DISTILLERIES <span className="ver">|</span> PAPER & PULP <span className="ver">|</span> MARINE & DEFENCE <span className="ver">|</span> METAL & MINING <span className="ver">|</span> FOOD & BEVERAGE <span className="ver">|</span> PETROCHEMICAL & REFINERIES <span className="ver">|</span> SOLAR <span className="ver">|</span> BUILDING <span className="ver">|</span> HVAC <span className="ver">|</span> FIRE FIGHTING <span className="ver">|</span> AGRICULTURE & RESIDENTIAL</p>

      <div className="footer">
        <div className='aa'>
          <img className='svg' src="./phone-call.png"/>
          <p className='val'>Toll free 1800 200 1234</p>
        </div>
        <div className='aa'>
          <img className='svg' src="./facebook.png"/>
          <p className='val'>www.facebook.com/cripumps</p>
        </div>
        <div className='aa'>
          <img className='svg' src="./internet.png"/>
          <p className='val'>www.crigroups.com</p>
        </div>
      </div>
    </div>
  )
}

export default App
