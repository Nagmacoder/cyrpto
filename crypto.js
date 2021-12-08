
const store = fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((data)=>{
    return data.json();
}).then((data)=>{
    console.log(data);
    for( var x in data){
        document.write(`<tr>
          ${data[x].name} 
        - ${data[x].symbol} 
        - ${data[x].current_price} 
        - ${data[x].total_volume} 
        - ${data[x].price_change_percentage_24h} 
        - Mkt Cap: ${data[x].market_cap}
        </tr><br>`);
    }
});
