
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var summary = {};
  for (var i = 0; i < salesData.length; i++){
    if(!summary[salesData[i].name]){
      summary[salesData[i].name] = {totalSales: 0, totalTaxes: 0}
    }
    for (var u = 0; u < salesData[i].sales.length; u++){
      summary[salesData[i].name].totalSales += salesData[i].sales[u]
      summary[salesData[i].name].totalTaxes += ((salesData[i].sales[u]) * (taxRates[salesData[i].province]))
    }

  }
  return summary;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/