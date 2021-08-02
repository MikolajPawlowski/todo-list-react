import { Wrapper, Header, SectionTitle, Paragraph } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Wrapper>
    <Header>
      <SectionTitle>{title}</SectionTitle>
      {extraHeaderContent}
    </Header>
    <Paragraph>
    {body}
    </Paragraph>
  </Wrapper>
);

export default Section;