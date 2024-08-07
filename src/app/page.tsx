import { Container } from "@mui/material";

import { CardsSections } from "@/components/organisms";
import { HomeLayout } from "@/components/templates";
import { HomeMocks } from "@/utils";

export default function Home() {
  return (
    <HomeLayout footerData={HomeMocks.FOOTER}>
      <Container maxWidth={"md"}>
        {HomeMocks.MAIN_SECTIONS.map((section) => (
          <CardsSections key={section.sectionTitle} {...section} />
        ))}
      </Container>
    </HomeLayout>
  );
}
