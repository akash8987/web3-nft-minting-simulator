import { connectRPC } from "./rpc.client.js";
import { loadCollection } from "./collection.registry.js";
import { validateSupply } from "./supply.validator.js";
import { mintNFT } from "./mint.engine.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 NFT Minting Simulator");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const collection = loadCollection();

const valid = validateSupply(collection, 1);
const mintResult = valid ? mintNFT(collection, "0xUSER001") : null;

generateReport(collection, mintResult, valid);
