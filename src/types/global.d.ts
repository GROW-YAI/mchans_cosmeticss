declare module "boafo-accessibility-widget" {
  export function initializeBoafoWidget(apiKey: string): void;
}

declare module "../src/components/NavBar" {
  import { FC } from "react";
  const NavBar: FC;
  export default NavBar;
}

declare module "../src/components/Footer" {
  import { FC } from "react";
  const Footer: FC;
  export default Footer;
}
