import { API_URL } from "@/constants";
import { Provider } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ProviderCard from "./_components/ProviderCard";
import Link from "next/link";

const ProviderPage = async () => {
    const response = await fetch(`${API_URL}/providers`, {
        headers: {
            ...authHeaders()
        }
    });
    const providers: Provider[] = await response.json();

    return (
        <div className="w-full flex-row flex-wrap px-10">
            {providers.map((provider: Provider) => (
                <Link
                    key={provider.providerId}
                    href={{ pathname: `/dashboard/providers/${provider.providerId}` }}
                >
                    <ProviderCard provider={provider} />
                </Link>
            ))}
        </div>
    );
};

export default ProviderPage;