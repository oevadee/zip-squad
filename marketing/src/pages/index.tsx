import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { AppLayout } from "layouts/app-layout";

const SHeading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.heading};
`;

const IndexPage = () => {
  return (
    <AppLayout>
      <StaticImage
        src="../assets/zip-squad-logo.svg"
        alt="ZIP Squad"
        width={500}
      />
      <SHeading>Comming soon...</SHeading>
    </AppLayout>
  );
};

export default IndexPage;
