import axios from "axios";



 export const getPlacesData = async (type,sw, ne) => {
    try {
        const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,  {
   
          params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
           
          },
       
            headers: {
              'X-RapidAPI-Key': '6b8abe2f87mshb47371af5b51597p1a54acjsn490746e910aa',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;

    }
    catch (error) {
        console.log(error);
    }
}