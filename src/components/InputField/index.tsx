import type { ComponentProps } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<"input"> {
    label?: string;
    error?: string;
    description?: string;
}

const InputField = ({ label, error, description, ...props }: Props) => {
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label htmlFor={props.name} className="w-fit">
                    {label}
                </label>
            )}
            <Input
                id={props.name}
                className={cn("w-full", props.className)}
                {...props}
                aria-invalid={!!error}
            />
            {description && <p className="text-gray-500">{description}</p>}
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};

export default InputField;
