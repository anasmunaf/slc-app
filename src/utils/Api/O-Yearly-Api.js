import axios from 'axios';

async function OYearlyData() {
  const data = await axios.get('https://slc-backend.herokuapp.com/api/yearly/');
  return data.data;
}

async function OYearlyPdf(id) {
  const data = await axios.get(
    `https://slc-backend.herokuapp.com/api/yearly/pdf/${id}`,
  );
  return data?.data;
}

export {OYearlyData, OYearlyPdf};
