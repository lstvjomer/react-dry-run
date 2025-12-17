import { queryClient } from "@/config/react-query-client";
import { QueryClientProvider } from "@tanstack/react-query";

interface AppProviderProps {
    children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default AppProvider;
