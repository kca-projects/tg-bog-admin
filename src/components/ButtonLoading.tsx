import { Loader2 } from "lucide-react";

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LoadingButtonProps extends ButtonProps {
  isLoading: boolean;
}

export function ButtonLoading({
  isLoading,
  children,
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      className={cn(className, { "opacity-50 cursor-not-allowed": isLoading })}
      disabled={isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
}