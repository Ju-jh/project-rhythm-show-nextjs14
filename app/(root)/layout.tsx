
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-screen h-screen flex-col items-center justify-between p-24 ">
      <span>
        {`"`}RHYTHM SHOW{`"`}
      </span>
      {children}
    </main>
  );
}
