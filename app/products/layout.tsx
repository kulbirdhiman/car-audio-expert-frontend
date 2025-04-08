import React from "react";

export default function RootLayout({
  children,
  sidebar
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="">
          {/* <aside className="w-72">{sidebar}</aside>  */}
          <main className="flex-1">{children}</main> 
        </div>
      </body>
    </html>
  );
}
