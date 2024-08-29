import { cva } from "class-variance-authority";
import { buttonVariants } from "~/components/ui/button";

export const customButton = cva(
    buttonVariants(), // Call buttonVariants to get its styles
    {
      variants: {
        variant: {
          default: "bg-dark-green-default text-red-500", // Override or add new styles for the 'default' variant
        },
      },
    }
  );