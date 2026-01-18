export function validateSupply(collection, amount) {
  return collection.minted + amount <= collection.maxSupply;
}
