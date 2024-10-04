import { apiConnector } from "./apiConnector";
import axios from "axios";


const searchFlight = async ()=> {
    // return async () => {
    //     alert("yaha pe")
      
       
    //     try {
    //         const tokenResponse = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', new URLSearchParams({
   
    //             'client_id': process.env.AMADEUS_API_KEY,
    //             'client_secret': process.env.AMADEUS_API_Secret
    //         }), {
    //             headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    //         });
            
    //         const accessToken = tokenResponse.data.access_token;

    //         const response = await apiConnector("GET", url,headers= {
    //             Authorization: `Bearer ${accessToken}`,
    //         })

    //         console.log("SEARCHFLIGHT API RESPONSE............", response)

    //         //console.log(response.data.success)

    //         if (!response.data.success) {
    //             throw new Error(response.data.message)
    //         }
    //          return response.data;
    //         // toast.success("OTP Sent Successfully")
    //         // navigate("/verify-email")
    //     } catch (error) {
    //         alert("error");
    //         console.log("SEARCHFLIGHT ERROR............", error)
    //         toast.error(error.response.data.message)
    //     }
       
    // }

    try {
        // Get the access token
        const tokenResponse = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', new URLSearchParams({
            'grant_type': 'client_credentials',
            'client_id': process.env.REACT_APP_AMADEUS_CLIENT_ID,
            'client_secret': process.env.REACT_APP_AMADEUS_CLIENT_SECRET
        }), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        const accessToken = tokenResponse.data.access_token;

        // Search for flights
        const response = await axios.get('https://test.api.amadeus.com/v2/shopping/flight-offers', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                originLocationCode: origin,
                destinationLocationCode: destination,
                departureDate: departureDate,
                adults: adults,
            },
        });

    setFlights(response.data.data);
    } catch (error) {
        console.error('Error fetching flight offers:', error);
        setError('Failed to fetch flight offers. Please try again.');
    }

}
export default searchFlight;