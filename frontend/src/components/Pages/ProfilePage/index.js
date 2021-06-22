import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const ProfilePage = () => {
  const state = useSelector(state=>state)
  console.log(state);
  return (
    null
  )
}

export default ProfilePage;
