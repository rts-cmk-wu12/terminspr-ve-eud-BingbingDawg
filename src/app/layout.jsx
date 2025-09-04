import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Landrup Dans",
    default: "Landrup Dans"
  },
  description: "en webapp til tilmelding af aktiviteter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        {children}
      </body>
    </html>
  );
}
