import React, { useEffect,useState } from "react";


export default function Crypto() {
    const [search, setSearch] = useState("");
    const handlechange = (e) => {
        setSearch(e.target.value);
    }
    
    const [coins,setCoins]=useState([]);

    const getcoins= async()=>{
       const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false");
       setCoins (await response.json());
       
    }
    console.log(coins);
    useEffect(()=>{
        getcoins();
    },[]);


    
    return (
        <>
            <div className="cover">
                <div className="coins">
                    <h1>Cryptocurrency Tracker </h1>
                    <h2 className="text2">Search a currency</h2>
                    <input type="text" onChange={handlechange} placeholder="Search" className="search" />
                    {/* <h1>{search}</h1> */}
                </div>
                <div className="container">
                    <div className="coins">
                        {
                          coins.filter((elem)=>{
                           if(search==""){
                               return elem
                           }else if(elem.name.toLowerCase().includes(search.toLowerCase())){
                               return elem
                           }
                          }).map((elem)=>{
                              return (
                                  <>
                                  <div className="coin">
                                   <img className="img" src={elem.image}></img>
                                   <h3 className="name">{elem.name}</h3>
                                  <h3  className="symbol">{elem.symbol}</h3>
                                   <h3 className="price"> ${elem.current_price}</h3>
                                   <h3 className="total"> ${elem.total_volume}</h3>
                                   <h3 className="perc">{elem.price_change_percentage_24h.toFixed(2)}</h3>
                                   <h3 className="Mcap">Mkt Cap: ${elem.market_cap}</h3>
                                    <br/><br/></div>
                                    <hr/>
                                    </>
                              )
                          })

                        }

                    </div>
                </div>
            </div>
        </>
    );
}
// const store = fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((data)=>{
//     return data.json();
// }).then((data)=>{
//     console.log(data);
//               for( var x in data){
//         document.write(`
//           ${data[x].name} 
//         - ${data[x].symbol} 
//         - ${data[x].current_price} 
//         - ${data[x].total_volume} 
//         - ${data[x].price_change_percentage_24h} 
//         - Mkt Cap: ${data[x].market_cap}
//         <br>`)
//     }
// });