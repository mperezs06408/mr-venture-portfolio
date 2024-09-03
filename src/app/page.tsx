import { Container } from "@mui/material";

import { Banner } from "@/components/molecules";
import { CardsSections, ClientsSection } from "@/components/organisms";
import { HomeLayout } from "@/components/templates";
import { HomeMocks } from "@/utils";

export default function Home() {
  return (
    <HomeLayout footerData={HomeMocks.FOOTER}>
      <Banner {...HomeMocks.BANNER} />
      <Container maxWidth={"md"}>
        {HomeMocks.MAIN_SECTIONS.map((section) => (
          <CardsSections key={section.sectionTitle} {...section} />
        ))}
      </Container>
      <ClientsSection.ClientsSection {...HomeMocks.MOCK_CLIENTS_SECTION} />
    </HomeLayout>
  );
}
