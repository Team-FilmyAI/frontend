import React from "react";

export default function MainLayout({ children } : React.PropsWithChildren) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
