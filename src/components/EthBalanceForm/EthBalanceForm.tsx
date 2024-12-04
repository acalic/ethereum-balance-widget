import { useState } from "react";
import { Network, TatumSDK, Ethereum } from "@tatumio/tatum";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Alert from "../Alert/Alert";
import LoadingBar from "../LoadingBar/LoadingBar";
import styles from "./EthBalanceForm.module.scss";

// Validate Ethereum address
const isValidEthereumAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

function EthBalanceForm() {
  const [inputValue, setInputValue] = useState<string>("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [wiggleError, setWiggleError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((e.target as HTMLInputElement).value);
  };

  const handleButtonClick = async () => {
    setMessage(null);
    setLoading(true);

    if (!inputValue.trim()) {
      triggerError("Please enter a valid Ethereum address.");
      return;
    }

    if (!isValidEthereumAddress(inputValue)) {
      triggerError("Invalid Ethereum address format. Please check and try again.");
      return;
    }

    try {
      const tatum = await TatumSDK.init<Ethereum>({
        network: Network.ETHEREUM,
        apiKey: { v4: import.meta.env.VITE_TATUM_API_KEY },
        verbose: true,
      });

      const balance = await tatum.address.getBalance({
        addresses: [inputValue],
      });

      const balanceData = balance.data.find((asset) => asset.asset === "ETH");

      if (balanceData) {
        setMessage({ type: "success", text: `Balance: ${balanceData.balance}` });
      } else {
        triggerError("No ETH balance found for the given address.");
      }
    } catch (error) {
      triggerError("Error fetching balance. Please try again later.");
      console.error("API Error:", error);
    } finally {
      setLoading(false); // Stop loading after the API call is complete
    }
  };

  const triggerError = (errorMessage: string) => {
    setMessage({ type: "error", text: errorMessage });
    setLoading(false);
    setWiggleError(true);
    setTimeout(() => setWiggleError(false), 500); // Reset wiggle state
  };

  return (
    <div className={styles.formContainer}>
      <Input
        id="eth-address"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter Ethereum address"
      />

      <div className={styles.buttonContainer}>
        <Button onClick={handleButtonClick} disabled={loading}>
          {loading ? "Loading..." : "Check Balance"}
        </Button>
      </div>

      <div className={styles.loadingBarContainer}>
        {loading && <LoadingBar />}
      </div>

      <div className={`${styles.alertContainer} ${wiggleError ? styles.wiggle : ""}`}>
        {message && <Alert type={message.type} message={message.text} />}
      </div>
    </div>
  );
}

export default EthBalanceForm;
