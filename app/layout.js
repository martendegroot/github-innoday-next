import Sidebar from "../components/sidebar";
import Layout from "../components/layout";

import "../global.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Layout>
          <Sidebar />
          {children}
        </Layout>
      </body>
    </html>
  );
}
