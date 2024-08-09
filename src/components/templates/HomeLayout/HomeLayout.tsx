import { FC, ReactNode } from "react";

import { Footer } from "@/components/organisms";

interface Props {
  children: ReactNode | ReactNode[];
  footerData: Footer.Props;
}

export const HomeLayout: FC<Props> = ({ children, footerData }) => {
  return (
    <>
      {children}
      <Footer.Footer {...footerData} />
    </>
  );
};
