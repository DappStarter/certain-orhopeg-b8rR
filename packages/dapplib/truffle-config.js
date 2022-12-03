require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth saddle escape hunt lobster flush genius'; 
let testAccounts = [
"0x65246947fa09864b399409249eca98ad0bb6bbf8ea74d0ab6fc3584e5454e811",
"0x335ab15f0dab1aa077036346608b16a0af9de609491bf8d7d9e11ed871b07061",
"0x0180982d98bce14a7715f0620125ba2fe9024aec1b1f53795ffd2002ac14c136",
"0x7afb33e7aac95a88fcf79098ea854b6a5047290c94707f3a0d82c9cd11e80de4",
"0xa7e20bae4be1ed9823fd6a833da1ebe37e3575de9941b8fb565025b421eda612",
"0xd45fefbaf0c1742ca031515517cb2f3555d19daee74da986445d6bd070434696",
"0x567c64b4cb92b4ecbd1f43a19076e5a83b81127c696564bde8a8ef12fcc7dabd",
"0x4635d196e794c3dd8088991ea0f58194580c22a05ecca27acabbf795dc37ab40",
"0x04266169be39be92cb9a2afaa9faafd88d34cf2fb4ee6e1d546d0d231e1c72c7",
"0x6d273615ad1e901356a30ed2329c9b9458c2a11b18c45ba78767826af9277b46"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


