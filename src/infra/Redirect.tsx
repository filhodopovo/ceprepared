import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Redirect() {
  const { urlId } = useParams();
  const appDns = import.meta.env.VITE_APPLICATION_DNS;
  const shortenerUrl = `${appDns}${urlId}`;

  useEffect(() => {
    const fetchRedirect = async () => {
      try {
        window.location.href = shortenerUrl;
      } catch (error) {
        console.error("Error during redirection:", error);
      }
    };

    fetchRedirect();
  }, [urlId]);

  return null;
}
