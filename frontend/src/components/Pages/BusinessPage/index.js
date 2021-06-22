import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Map from '../Map'
import * as mockData from "../../../assets/SampleDonutData.json";

export const BusinessPage = () => {
  const {id} = useParams()
  const business = mockData.businesses[0]
  return (
 <div className='business-main'>

 </div>
  )
}

export default BusinessPage
