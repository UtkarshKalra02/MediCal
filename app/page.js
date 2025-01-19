'use client'

import CategorySearch from "./_components/CategorySearch";
import Hero from "./_components/Hero";
import DoctorList from './_components/DoctorList';
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";


export default function Home(){

  const [doctorList, setDoctorList] = useState([])

  useEffect(()=> {
    getDoctorList()
  }, [])

  const getDoctorList = () => {
    GlobalApi.getDoctorList()
    .then(response => {console.log(response.data.data);
      setDoctorList(response.data.data)
    })
  }
  return(
    <div>
      <Hero/>

      <CategorySearch/>
      
      <DoctorList doctorList={doctorList}/>
    </div>
  )
}