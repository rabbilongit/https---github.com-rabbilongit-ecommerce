
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card'

//import { useNavigate } from "react-router-dom";
import { Link, Navigate, useParams } from 'react-router-dom'


function Page() {

  const{name} = useParams()

  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [selectOption, setSelectOption] = useState(0)

//this set the  selectOption to the dropdown value
  const handleDropDown=(event)=>{
    setSelectOption(event.target.value)
  }
  
//useEffect is necessary to call Api
  useEffect(() => {
    setLoading(true)
    const headers = {
      'Content-Type': 'application/json',
    };

//Axios call the APi
    axios.get('https://dummyjson.com/products', { headers })
      .then(response => {
        setData(response.data.products)
        setLoading(false)

       
      })
      .catch(error => {
        console.error('Request failed:', error);
        setLoading(false) 
      });

  }, [])

  //Filtering the data on the basis of {selectOption}
  const affordableProduct = data ? data.filter((product) => product.discountPercentage <= selectOption) : [];



  console.log('data----', data)
  return (
    <div>
        <h1>Welcome {name}!!!</h1>
        <div className="container mt-4">
      <div className="row justify-content-end">
        <div className="col-4">
           <select id="dropdown" className="form-select" value={selectOption} onChange={handleDropDown}>
            <option value="">Select an option</option>
            <option value={6}>Rs:6</option>
            <option value={12}>Rs:12</option>
            <option value={18}>Rs:18</option>
          </select>
        </div>
        <div className="col-4">
          <h2 className="text-end"></h2>
          <p className="text-end">Selected option: {selectOption}</p>
        </div>
        </div>
    </div>
      {loading ? 'loading....' :
        <div >
          <div >

            <div className='Card_p'>
              {// affordableProduct is the filtered data... befor this here was just {data}
              //.map is used when you want to perform aech value of array
                affordableProduct?.map((event) => {
                  console.log('jj', event)
                  return (
                    <>
                       
                       
                     
                      <div>
                        {/* link send the {id} of the product in URL */}
                       <Link to={`/Spage/${event.id}`}>
                        <Card
                          brand={event.brand}
                          category={event.category}
                          description={event.description}
                          discountPercentage={event.discountPercentage}
                          thumbnail={event.thumbnail} />
                          </Link> 
                      </div>
                    </>
                  )
                })}
            </div>

          </div>
        </div>
      }


    </div>
  )
}

export default Page


