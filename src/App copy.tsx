import { useState } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';



const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "97",
      rpc: "https://data-seed-prebsc-1-s2.binance.org:8545"
    }
  },
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "My Awesome App",
      infuraId: {
        97: "https://data-seed-prebsc-1-s2.binance.org:8545"
      },
    }
  }
}

function App() {
  const [address, setAddress] = useState<string>('address')
  const connectWallet = async () => {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      })
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalPrvider = new ethers.providers.Web3Provider(web3ModalInstance)
      setAddress(web3ModalPrvider.provider.selectedAddress)
    } catch (err) {
      console.log('err', err)
    }
  }
  return (
    <div className="App">
      <div>{address}</div>
      <button onClick={connectWallet}>connect Wallet</button>
    </div>
  )
}

export default App
