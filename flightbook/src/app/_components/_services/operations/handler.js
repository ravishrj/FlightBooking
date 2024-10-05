import axios from 'axios';
const REACT_APP_AMADEUS_CLIENT_ID="6KjF3w8cmzm5jvgkePQnLAB9ufdMiUnH";
const REACT_APP_AMADEUS_CLIENT_SECRET="hx7l3jSMq1AK9lFx"
export default async function handler(req, res) {
    const { keyword } = req.query;

    try {
        const tokenResponse = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', new URLSearchParams({
          'grant_type': 'client_credentials',
          'client_id': REACT_APP_AMADEUS_CLIENT_ID,
          'client_secret': REACT_APP_AMADEUS_CLIENT_SECRET
      }), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      
      const accessToken = tokenResponse.data.access_token;
        const response = await axios.get('https://test.api.amadeus.com/v2/reference-data/locations', {
            params: {
                subType: 'AIRPORT',
                keyword: keyword
            },
            headers: {
                'Authorization': `Bearer ${accessToken}` // Replace with your actual token
            }
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
