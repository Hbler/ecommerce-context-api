import Theme from "./themeProvider";
import { DatabaseProvider } from "./databaseProvider";
import { CartProvider } from "./cartProvider";

export default function RootProvider({ children }) {
  return (
    <Theme>
      <DatabaseProvider>
        <CartProvider>{children}</CartProvider>
      </DatabaseProvider>
    </Theme>
  );
}
