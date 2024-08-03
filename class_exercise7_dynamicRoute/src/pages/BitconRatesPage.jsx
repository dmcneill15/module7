import { BitcoinRates } from "../components/BitcoinRates"
import { UpdateEmoji} from "../components/UpdateEmoji"

export default function BitcoinRatesPage() {
    return (
        <div className="BitcoinRatesPage">
            <h1>Bitcoin Rates</h1>
            <BitcoinRates />
            <UpdateEmoji />
        </div>
    )
}

