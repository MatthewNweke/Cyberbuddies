import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

// ----------------------------------------------------------------------

const useAccount = () => {
  const persistData = useContext(UserContext)
  const data= persistData.parseDataHandler()
  const [account, setAccount] = useState({
    displayName: `${data.first_name}`,
    mail: `${data.email}`,
  
  });
  return account;
};

export default useAccount;
