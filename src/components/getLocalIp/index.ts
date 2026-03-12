import { useEffect, useState } from "react";
import axios from "axios";

interface Country {
  id: string;
  name: string;
  code: string;
  dial_code: string;
}

interface IpCountryResult {
  country: string | null;
  countryCode: string | null;
  countries: Country[];
}

export function useIpCountry(): IpCountryResult {
  const [country, setCountry] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    let isMounted = true;

    const fetchCountryData = async () => {
      try {
        const cachedCountries = localStorage.getItem("countryList");

        let countriesData: Country[] = [];

        if (cachedCountries) {
          countriesData = JSON.parse(cachedCountries);
          setCountries(countriesData);
        } else {
          const countriesRes = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/getCountries`
          );
          countriesData = countriesRes.data.data;
          setCountries(countriesData);
          localStorage.setItem("countryList", JSON.stringify(countriesData));
        }

        if (!isMounted) return;

        const cachedIpData = localStorage.getItem("ipCountryData");

        if (cachedIpData) {
          const parsed = JSON.parse(cachedIpData);
          const selectedCountry = countriesData.find(
            (c) => c.code === parsed.countryCode
          );

          if (selectedCountry && isMounted) {
            setCountry(selectedCountry.name);
            setCountryCode(selectedCountry.dial_code);
          }

          return;
        }

        const retryRequest = async (retryCount = 3): Promise<void> => {
          try {
            const ipRes = await axios.get("https://ipapi.co/json/");
            const ipData = ipRes.data;

            if (ipData && ipData.country) {
              const selectedCountry = countriesData.find(
                (c) => c.code === ipData.country
              );

              if (selectedCountry && isMounted) {
                const localData = {
                  country: selectedCountry.name,
                  countryCode: selectedCountry.code,
                };
                localStorage.setItem("ipCountryData", JSON.stringify(localData));

                setCountry(selectedCountry.name);
                setCountryCode(selectedCountry.dial_code);
              }
            } else {
              throw new Error("Invalid response");
            }
          } catch (err) {
            if (retryCount > 0) {
              setTimeout(() => retryRequest(retryCount - 1), 2000);
            } else {
              if (isMounted) console.log("Failed to fetch IP info");
            }
          }
        };

        await retryRequest();
      } catch (err) {
        if (isMounted) console.log("Failed to fetch country data:", err);
      }
    };

    fetchCountryData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { country, countryCode, countries };
}
