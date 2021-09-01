import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import Loading from "./misc/loading";

const DashboardLayout = (props: { children: any }) => {
  const router = useRouter();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user || user.getIdToken() === undefined) {
        router.push("/login");
      }
    });
  });
  return (
    <Loading>
      <div>
        Dashboard...
        {props.children}
      </div>
    </Loading>
  );
};

export default DashboardLayout;
