import axios from 'axios';

async function OYearlyData() {
  const data = await axios.get('https://slc-backend.herokuapp.com/api/yearly/');
  return data.data;
}

export default OYearlyData;
