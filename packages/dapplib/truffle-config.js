require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remember mistake give problem off shop'; 
let testAccounts = [
"0x39e21531b234f3cde5a81f95ea35978bb3a308fca63beee28cc3d3ecb39c0cc6",
"0x5b39d11a0cbee0f967c54ce923cb47067d48be6574ba630f9dda7ce05bdc9ff3",
"0x86e87d001d148bd30d12402cd2c164e76664196eb87bad5e10687c5650b196fd",
"0xbb79f43e9fb04200125aa9ea9484e4af2dc6ebe9ff63579d81e2ce53868fb9b9",
"0xddf63c14b73d16c13669edd8dbee4f96a35299161045970172702bd7b308e4d2",
"0xfdc7b8f695a36cf4a61381cc9d21bd46995968e5276c28369275fcb7261620d0",
"0x4b0889d93da2a6c31c9d20c2f2de73ba99550b6e3f46fad8cf47de84d766af8f",
"0xedc8da6c26380e3e963e0d1adf000b4af3d90b98dbadf3f27dea41ba9de4e455",
"0xef6630bd21a8e92194999ccc1dcc98836557864cf57162842bbcf79552b937d1",
"0x62c4e2d88cde5fd216c21c48f8e9917fd048a0f0389ebdd2a613cf29ad5279ef"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

