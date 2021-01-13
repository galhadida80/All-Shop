import * as Location from 'expo-location';
import { useEffect , useState } from "react";


const useLocation =() => {
    const [location, setLocation] = useState();

    useEffect(() => {
        getLocation();
        }, []);

    const getLocation = async () => {
        try{
            const {granted} =await Location.requestPermissionsAsync();
            if (!granted) return;
            const { coords: { latitude, longitude }}=await Location.getLastKnownPositionAsync();
            setLocation({latitude, longitude });

        } catch (error)
        {
            console.log(error);
        }
    };
       
return location;

};

export default useLocation;
