const origin = "https://deep-index.moralis.io";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjAyODU2NGE1LWFiMjItNDg5MS04MDhjLTczODc5OWMzNWNkZiIsIm9yZ0lkIjoiNDExODIxIiwidXNlcklkIjoiNDIzMjA3IiwidHlwZUlkIjoiYzM4YWMyZjEtMWI5OC00YTdjLTljMTQtMzFjOTVhNmIxNWY3IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3Mjg5NjM3MDgsImV4cCI6NDg4NDcyMzcwOH0.fgd11-8EY3EEwwUqIgCtA-P6V89ucaG5a1BImvF9SUg";

export const getContractNFTs = async (tokenAddress) => {
    const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
    url.searchParams.append("chain", "eth");
    url.searchParams.append("format", "decimal");
    url.searchParams.append("limit", "20");
  
  
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    return response.json();
  };
  
  
  export const getContractTrades = async (tokenAddress) => {
    const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
    url.searchParams.append("chain", "eth");
    url.searchParams.append("marketplace", "opensea");
    url.searchParams.append("limit", "20");
  
  
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    return response.json();
  };
  
  
  export const getNFTTransfers = async (tokenAddress, tokenId) => {
    const url = new URL(
      `${origin}/api/v2/nft/${tokenAddress}/${tokenId}/transfers`
    );
    url.searchParams.append("chain", "eth");
    url.searchParams.append("format", "decimal");
    url.searchParams.append("limit", "20");
  
  
    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
    });
    return response.json();
  };
  