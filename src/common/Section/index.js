import { Wrapper, Header, SectionTitle } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Wrapper>
    <Header>
      <SectionTitle>{title}</SectionTitle>
      {extraHeaderContent}
    </Header>
    {body}
  </Wrapper>
);

export default Section;