import MainNavigation from "../main-navigation/main-navigation";

export default function RootLayout({ children }) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}
