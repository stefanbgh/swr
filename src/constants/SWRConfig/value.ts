import { fetcher } from "../../utils/helpers/fetcher";
import { createToast } from "vercel-toast";
import { vercelToastMessage as message } from "../vercel/vercelToastMessage";
import { vercelToastOptions as options } from "../vercel/vercelToastOptions";

const refreshInterval = 3000;

export const value = {
    refreshInterval,
    fetcher,
    // eslint-disable-next-line
    onError: (error: any) => {
        if (error.status !== 403 && error.status !== 404) {
            createToast(message, options);
        }
    }
}