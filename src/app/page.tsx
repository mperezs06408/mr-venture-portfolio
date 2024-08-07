import { Container } from "@mui/material";

import { CardsSections } from "@/components/organisms";
import { HomeMocks } from "@/utils";

export default function Home() {
  return (
    <Container maxWidth={"md"}>
      {HomeMocks.MAIN_SECTIONS.map((section) => (
        <CardsSections key={section.sectionTitle} {...section} />
      ))}
    </Container>
  );
}
