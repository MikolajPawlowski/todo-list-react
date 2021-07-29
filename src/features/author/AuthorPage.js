import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Paragraph } from "../../common/Section/styled";

export default () => (
  <Container>
    <Header title="O Autorze" />
    <Section
      title="Mikołaj Pawłowski"
      body={
        <>
        <Paragraph>
          <strong>Autor ćwiczy tworzenie podstron w React-Route.</strong> 
        </Paragraph>
        <Paragraph>
          Tutaj widnieje przykładowy tekst, powstały w trakcie uczestnictwa w kursie <em>JavaScript od podstaw</em>.
        </Paragraph>
        </>
      }
    />
  </Container>
);