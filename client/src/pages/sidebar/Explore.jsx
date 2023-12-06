import React from 'react'
import ProfileCard from '../../components/profileCard/ProfileCard'
import Loading from '../../components/loading/Loading';
import { useState } from 'react';
import { useEffect } from 'react';

const Explore = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <> 
     {loading ? (
      <Loading />
    ) : (
    <div className='w-4/5 h-full relative flex items-center justify-center'>
      <ProfileCard />
    </div>)}
    </>
  
  )
}

export default Explore