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
        <div className="flex">
          <aside className="w-72">{sidebar}</aside> {/* Sidebar section */}
          <main className="flex-1">{children}</main> {/* Main content section */}
        </div>
      </body>
    </html>
  );
}
