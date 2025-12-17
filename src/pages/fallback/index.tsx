import { type ReactNode } from "react";

const FallBack = ({ children }: { children: ReactNode }) => {
    return (
        <main className="min-h-[calc(100vh-56px)] flex items-center justify-center">
            {children ?? "Loading..."}
        </main>
    );
};

export default FallBack;
