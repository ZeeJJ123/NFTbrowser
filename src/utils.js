const origin = "https://deep-index.moralis.io";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjkzOTBlYzY5LWE3NWEtNDRiOC04ZTRkLWQ0MDIwMDkwOWI1NiIsIm9yZ0lkIjoiMzQwMTg2IiwidXNlcklkIjoiMzQ5NzIxIiwidHlwZUlkIjoiMDBjYTRiYWItNDA3Yy00ZDdjLTllZTMtNGU3ZTQ4OWFhNjM0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODU2NzUxOTcsImV4cCI6NDg0MTQzNTE5N30.SvyEdmMw4Gog_OCUYXBlGwN6S9yKQ84G3jf654lmqsk";

// https://docs.moralis.io/reference/nft-api
export const searchNFTs = async (searchText) => {
  const url = new URL(`${origin}/api/v2/nft/search`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("q", searchText);
  url.searchParams.append("filter", "name");
  url.searchParams.append("limit", "12");

  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};

export const getNFTTrades = async (tokenAddress) => {
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
