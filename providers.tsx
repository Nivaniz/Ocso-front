import { NextUIProvider } from "@nextui-org/react";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
}