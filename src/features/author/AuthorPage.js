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
          <strong>Autor ćwiczy tworzenie podstron za pomocą React-Route.</strong> 
        </Paragraph>
        <Paragraph>
          Jest to projekt powstały w trakcie uczestnictwa w kursie <em>Youcode - JavaScript od podstaw</em>.
          <br>
          Rok 2020 pokazał, że praca w wielu gałęziach gospodarki może z dnia na dzień zostać zamrożona bez naszej winy,
          rozwijanie więc swoich umiejętności w językach programowania nikomu nie może wyjść na złe. 😉
          </br>
        </Paragraph>
        </>
      }
    />
  </Container>
);