export function mintNFT(collection, user) {
  console.log("Minting NFT for:", user);

  collection.minted += 1;

  return {
    collection: collection.name,
    owner: user,
    tokenId: collection.minted
  };
}
