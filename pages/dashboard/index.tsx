import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout_dashboard";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { getAuth } from "@firebase/auth";
const DashboradIndex = () => {
  const db = getFirestore();
  const [location, setLocation] = useState<City | null>();
  const auth = getAuth();
  const mayorEmail = auth.currentUser?.email ?? "";
  const citiesRef = collection(db, "cities");
  const mayorCityQuery = query(
    citiesRef,
    where("mayorEmail", "==", mayorEmail)
  ); //TODO: Add Redux state management for Mayor location
  useEffect(() => {
    getDocs(mayorCityQuery).then((data) =>
      data.forEach((doc) => {
        const { city, country, county, mayorEmail } = doc.data();
        const l = new City(city, country, county, mayorEmail);
        setLocation(l);
      })
    );
  }, [location, mayorCityQuery]);

  return <DashboardLayout>Hey there</DashboardLayout>;
};

export default DashboradIndex;
