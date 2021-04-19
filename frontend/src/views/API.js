export const getCoins = async page => {
    const users = await (
      await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`)
      
    ).json();
    return users;
  };