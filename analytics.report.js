export function generateReport(collection, mintResult, valid) {
  console.log("----- Mint Report -----");
  console.log("Collection:", collection.name);
  console.log("Minted:", collection.minted, "/", collection.maxSupply);
  console.log("Mint Valid:", valid);

  if (mintResult) {
    console.log("Token ID:", mintResult.tokenId);
    console.log("Owner:", mintResult.owner);
  }

  console.log("------------------------");
}
