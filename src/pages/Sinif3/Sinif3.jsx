import React from 'react'
import './Sinif3.scss'
import { dataSinif3 } from '../../lib/data'

function Sinif3() {
  return (
    <div className='Sinif3'>
      <div className="container">
        <div className="sinif3__inner">
          <div className="sinif3__top">
            <h1 className='h1' data-text="Tabassumoy testiga xish kelibsiz">Tabassumoy testiga xish kelibsiz</h1>

          </div>
          <div className="sinif3__center">
              <ul className='sinif3__list'>
                 {
                  dataSinif3?.map((item , index)=>(
                    <li className='sinif3__item' key={index}>
                        <div className="big">
                        <h2>{item.neme}</h2>
                        <span>
                          {item.savol}
                        </span><br />
<input type="checkbox"  /><br />
<input type="checkbox"  /><br />
<input type="checkbox"  /><br />
                        </div>
                    </li>
                  ))
                 }
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sinif3
