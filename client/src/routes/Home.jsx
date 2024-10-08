import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Landing from "../components/Landing/Landing";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/General";

import Carouseldiv from "../components/Item/Slider";


const Home = () => {
    const [ featuredItems, setFeaturedItems ] = useState()
    TabTitle("Home - Poornima's Fasion Collections");

    useEffect(() => {
         axios.get("https://vms-new.onrender.com/api/items")
            .then(res => setFeaturedItems(res.data))
            .catch(err => console.log(err))
          
        window.scrollTo(0, 0)
    }, [])
       console.log(featuredItems)
    return ( 
        <Fragment>
            <Landing />
             <Carouseldiv />
            <FeaturedCategories />
            <FeaturedItems items={featuredItems}/>
        </Fragment>
    );
}
 
export default Home;