import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../store/store"; 
import Forbidden from '../pages/Forbidden/Forbidden'

interface IPrivateRoute {
    component: ReactNode;
}

const PrivateRoute = ({ component }: IPrivateRoute) => {
    const { floor } = useParams();
    const floorAccessStatus = useSelector((state: RootState) => state.floorAccess.floorAccessStatus);

    const [isAccessGranted, setIsAccessGranted] = useState(false);

    useEffect(() => {
        const floorIndex = Number(floor) - 1;  
        setIsAccessGranted(floorAccessStatus[floorIndex]);
    }, [floor, floorAccessStatus]);

    return isAccessGranted ? <>{component}</> : <Forbidden />;
};

export default PrivateRoute;
