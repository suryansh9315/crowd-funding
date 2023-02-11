import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x1610917e4eb3598B918f313172B3502075F6d7CB"
  );
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign([
        address,
        form.title,
        form.description,
        form.target,
        new Date(form.deadline).getTime(),
        form.image,
      ]);
    } catch (error) {}
  };

  const getCampaigns = async () =>{
    const campaigns = await contract.call('getCampaigns');
  }

  return(
    <StateContext.Provider value={{ address, connect, contract, createCampaign:publishCampaign, getCampaigns }}>
        {children}
    </StateContext.Provider>
  )
};

export const useStateContext = () => useContext(StateContext)
