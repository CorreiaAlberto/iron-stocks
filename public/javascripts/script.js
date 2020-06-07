

document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');
  const key = "B0MTL1WQAB5KL5H7";
  const functionName = 'TIME_SERIES_DAILY';
  let symbolName = document.getElementById("symbol").value;  
  const apiUrl = `https://www.alphavantage.co/query?function=${functionName}&symbol=${symbolName}&apikey=${key}`;
  
  const getStocksInfo = 
  axios
    .get(apiUrl)
    .then(responseFromAPI => {
      console.log(responseFromAPI.data)
     printTheChart(responseFromAPI.data); // <== call the function here where you used to console.log() the response
    })
    .catch(err => console.log('Error while getting the data: ', err));
}, false);




function printTheChart(stockData) {
  const dailyData = stockData['Time Series (Daily)'];
  const stockDates = Object.keys(dailyData);
  const stockPrices = stockDates.map(date => dailyData[date]['4. close']);
  const ctx = document.getElementById('my-chart').getContext('2d');
  
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: stockDates,
      datasets: [
        {
          label: 'Stock Chart',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: stockPrices
        }
      ]
    }
  }); // closes chart = new Chart()
} // closes printTheChart()
