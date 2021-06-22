import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import Map from '../Map'

export const BusinessPage = () => {
  const {id} = useParams()

  return (
    <Map />
  )
}

export default BusinessPage
