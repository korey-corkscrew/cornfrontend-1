const ethers = require("ethers")
const addresses = {
    nft: "0x50139530985928873a5530780B71C51179F4B02f",
    masterChef: "0xC71EbC899BCC111F39B2715B5d2D397E671B5bd2",
    masterChefTest: "0xDe388a7098674B459a98025b631C99d888d914C8",
    CobToken: "0x793AcF39c3d605d3aD042Ae01fd290a6fE489164",
    TestCob: "0xf8c631189f782Ff38538C80E42dC895a264F3a52",
    mockToken1: "0x7DBaFf79d13A0c842777742A86aE3aCAc9817250",
    mockToken2: "0xCCd1660797fe05dAe3439568aD39D2a4DacEab0e",
    mockLP: "0xea718C7dd15C6E1F98de3ED10f50d812e39E66D2",
    realLP: "0xadbF1854e5883eB8aa7BAf50705338739e558E5b", //etherwmatic
    realLP2: "0xEEf611894CeaE652979C9D0DaE1dEb597790C6eE", //daimatic
    CobUSDCLP: "0x972575f78ee1738fc578289b1de98e0cd90c0119",
    VaultBase: "0x100e4c4D33E92E9463549F5C8698A67555B12b13",
    StopLoss: "0x6CA11661B0B49268CF9e9f064F1c7DC36FbF2862",
    ROUTER: "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
    COB: "0x793acf39c3d605d3ad042ae01fd290a6fe489164",

    vaults: {
        controller: "0x07f53502db0e721e47BE3F01d2B8aC3D86ED9B22",
        resolver: "0x3dfcB8a33D0733A8b1222B178B163aa3F1F1091B",
        limitVault: "0xD7c32710Ff3d2Ea038f56DA7Fd019A157263F412",
        stopVault: "0xF48b4223b968d33A951169B22B7a9B25A8FaCe09",
        accDistVault: "0x54819ec7F50250d8D2A05861265FD05f4c9C801E",
        simpleStrategy: "0xF609fa22367268553F44cB4E9802c8Bb057D55F5",
        aaveStrategy: "0x905eD8C3A3EF813490D2DAAdDf36E57a3AFC2D2F"
    },

    oracles: [
        {
            address: "0x7E7B45b08F68EC69A99AAb12e42FcCB078e10094",
            symbol: "AAPL"
        },
        {
            address: "0xc907E116054Ad103354f2D350FD2514433D57F6f",
            symbol: "BTC"
        },
        {
            address: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
            symbol: "ETH"
        },
        {
            address: "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0",
            symbol: "MATIC"
        },
        {
            address: "0x4746DeC9e833A82EC7C2C1356372CcF2cfcD2F3D",
            symbol: "DAI"
        },
        {
            address: "0x0A6513e40db6EB1b165753AD52E80663aeA50545",
            symbol: "USDT"
        },
        {
            address: "0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7",
            symbol: "USDC"
        },
        {
            address: "0xBb9749B5AD68574C106AC4F9cd5E1c400dbb88C3",
            symbol: "TOTAL MC"
        },
        {
            address: "0xB527769842f997d56dD1Ff73C34192141b69077e",
            symbol: "CVIX"
        }
    ],
    tokens: {
        BTC: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
        USDC: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        USDT: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
        ETH: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
        MATIC: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
        MiMATIC: "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
        DAI: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
        COB: "0x793acf39c3d605d3ad042ae01fd290a6fe489164",
        DINO: "0xAa9654BECca45B5BDFA5ac646c939C62b527D394",
        LINK: "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
        SUSHI: "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
        FISH: '0x3a3df212b7aa91aa0402b9035b098891d276572b',
        OMEN: "0x76e63a3E7Ba1e2E61D3DA86a87479f983dE89a7E",
        UNI: "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
        AAVE: "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
        GRT: "0x5fe2b58c013d7601147dcdd68c143a77499f5531",
        COMP: "0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c",
        SNX: "0x50b728d8d964fd00c2d0aad81718b71311fef68a",
        CRV: "0x172370d5cd63279efa6d502dab29171933a610af",
        lp: {
            COBUSDC: "0x972575f78EE1738Fc578289b1DE98e0Cd90c0119"
        },
    },
    amTokens: [
        {
            symbol: "BTC",
            address: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
            decimals: 8,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
            
        },
        {
            symbol: "USDC",
            address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
            decimals: 6,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
        },
        {
            symbol: "USDT",
            address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
            decimals: 6,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
        },
        {
            symbol: "ETH",
            address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
            decimals: 18,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
        },
        {
            symbol: "MATIC",
            address: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
            decimals: 18,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png",
        },
        {
            symbol: "DAI",
            address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
            decimals: 18,
            logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"
        },
        {
            symbol: "AAVE",
            address: "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
            decimals: 18,
            logoURI: "https://etherscan.io/token/images/aave_32.png"
        }
    ]
}
const Controller = require("../config/build/contracts/Controller.json")
const stopVault = require("../config/build/contracts/StopLossVault.json") 
const limitVault = require("../config/build/contracts/LimitOrderVault.json") 
const accDistVault = require("../config/build/contracts/AccumulatorDistributorVault.json") 
const bracketVault = require("../config/build/contracts/LimitWithStopVault.json") 
const Addresses = require("../config/build/deployments/map.json")
const ERC20 = require("../config/build/contracts/ERC20.json")
    
const fetchSigner = () => {
    const provider = new ethers.providers.JsonRpcProvider("https://polygon-mainnet.g.alchemy.com/v2/p2YbSPZPtrU2ZpuOq7udR4sXMERMgV3r")

    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)
    const signer = wallet.connect(provider)
    return signer
}

const fetchController = async () => {
    const provider = new ethers.providers.JsonRpcProvider("https://polygon-mainnet.g.alchemy.com/v2/p2YbSPZPtrU2ZpuOq7udR4sXMERMgV3r")
    const signer = await fetchSigner()
    const ctr = new ethers.Contract(Addresses['137']["Controller"].at(-1), Controller.abi, signer)
    return ctr
}

const fetchContract = async (_address, _abi) => {
    const provider = new ethers.providers.JsonRpcProvider("https://polygon-mainnet.g.alchemy.com/v2/p2YbSPZPtrU2ZpuOq7udR4sXMERMgV3r")
    const signer = await fetchSigner()
    const ctr = new ethers.Contract(_address, _abi, signer)
    return ctr
}

const fetchERC20Contract = async (_token) => {
    const provider = new ethers.providers.JsonRpcProvider("https://polygon-mainnet.g.alchemy.com/v2/p2YbSPZPtrU2ZpuOq7udR4sXMERMgV3r")
    const signer = await fetchSigner()
    const ctr = new ethers.Contract(_token, ERC20.abi, signer)
    return ctr
}

const approveController = async (_token) => {
    const controller = await fetchController()
    const erc20 = await fetchERC20Contract(_token)
    try {
        const tx = await erc20.approve(controller.address, ethers.constants.MaxUint256,
            {
                gasLimit: 1000000,
                maxFeePerGas: ethers.utils.parseUnits("69", 9),
                maxPriorityFeePerGas: ethers.utils.parseUnits("69", 9),
            })
        return tx
        } catch (err) {console.log(err)}
}

// const setTokenStrategies = async () => {
//     const ctr = await fetchController()
//     const vaultsLength = 4
//     const strategyAddress = Addresses["137"]["AAVEStrategy"].at(-1)
//     for (let i = 0; i < vaultsLength; i++) {
//         try {
//             const tx = await ctr.setTokenStrategies(
//                 i,
//                 ['0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'],
//                 [strategyAddress, strategyAddress],
//                 [0, 0],
//                 {
//                     gasLimit: 1000000,
//                     maxFeePerGas: ethers.utils.parseUnits("69", 9),
//                     maxPriorityFeePerGas: ethers.utils.parseUnits("69", 9),
//                 }
//             )
//             return tx
//         } catch (err) {console.log(err)}
        
//     }  # controller.createTrade(0, [wmatic, usdc], [1e15, 0.625e18], [0], '10000 gwei')
    // # controller.createTrade(1, [wmatic, usdc], [1e15, 0.667e18], [0], '10000 gwei')
    // # controller.createTrade(2, [wmatic, usdc], [1e15, 0.625e18, 1.50e18, 1.45e18], [0], '10000 gwei')
    // # controller.createTrade(3, [wmatic, usdc], [1e15, 0.68965e18, 0.64516e18, 0.625e18], [0], '10000 gwei')

// }

const approveToken = async (_tokenAddress, _vid) => {

    const vaultAddresses = [
        Addresses["137"]["LimitOrderVault"].at(-1),
        Addresses["137"]["StopLossVault"].at(-1),
        Addresses["137"]["AccumulatorDistributorVault"].at(-1),
        Addresses["137"]["LimitWithStopVault"].at(-1),
    ]

    // const vault = await fetchContract(_vaultAddress, vaultABIs[_vid])
    const token = await fetchERC20Contract(_tokenAddress)
    try {
        const tx = await token.approve(
            vaultAddresses[_vid],
            ethers.constants.MaxUint256,
            {
                gasLimit: 1000000,
                maxFeePerGas: ethers.utils.parseUnits("69", 9),
                maxPriorityFeePerGas: ethers.utils.parseUnits("69", 9),
            }
            )
            return tx
    } catch (err) {console.log(err)}
}

//    # controller.createTrade(0, [wmatic, usdc], [1e15, 0.625e18], [0], '10000 gwei')
// *** params ****
// vaultID
// [ fromToken, toToken ]
// [ depositAmount, limitRate[] ]
// [expirationTime]  // dev: [0] if none
//  
const createTrade = async (_vid, _fromTokenAddress, _toTokenAddress, _amountIn, _price, _timestamp, _maxGas) => {

    const vaultAddresses = [
        Addresses["137"]["LimitOrderVault"].at(-1),
        Addresses["137"]["StopLossVault"].at(-1),
        Addresses["137"]["AccumulatorDistributorVault"].at(-1),
        Addresses["137"]["LimitWithStopVault"].at(-1),
    ]

    const vaultABIs = [
        limitVault.abi,
        stopVault.abi,
        accDistVault.abi,
        bracketVault.abi,
    ]

    const tokenIn = addresses.amTokens.filter( (token) => {
        return _fromTokenAddress === token.address
    })

    console.log(tokenIn)
    //params
    const vid = ethers.utils.parseUnits(_vid.toString(), 0)
    const path = [_fromTokenAddress, _toTokenAddress]
    const amountIn = ethers.utils.parseUnits(_amountIn.toString(), tokenIn.decimals)
    const price = ethers.utils.parseUnits(_price.toString(), 18)
    const amounts = [amountIn, price]
    const times = [_timestamp]
    const maxGas = ethers.utils.parseUnits(_maxGas.toString(), 9)

    const vault = await fetchContract(vaultAddresses[_vid], vaultABIs[_vid])
    const controller = await fetchContract(Addresses["137"]["Controller"].at(-1), Controller.abi)

    try {
        const tx = await controller.createTrade(
            0,
            path,
            amounts,
            times,
            maxGas,
                {
                    gasLimit: 1000000,
                    maxFeePerGas: ethers.utils.parseUnits("69", 9),
                    maxPriorityFeePerGas: ethers.utils.parseUnits("69", 9),
                }
            )
        return tx
    } catch (err) {console.log(err)}
}

const main = async () => {
    // const tx = await approve(addresses.tokens.AAVE)
    // const tx = await approveToken(addresses.tokens.USDC, 0)
    const tx = await createTrade(0, addresses.tokens.USDC, addresses.tokens.MATIC, 0.001, 1.4, 0, 69)
    console.log(await tx.wait())
}

main()