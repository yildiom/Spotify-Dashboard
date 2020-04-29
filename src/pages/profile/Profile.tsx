import React, { memo } from "react";
import { useSelector } from "react-redux";
import Helmet from "react-helmet";
import Navigation from "../../components/Navigation";
import Layout from "../../components/Layout/Layout";
import { Container, Header, Name, Email, Country } from "./Profile.style";
import { IStore } from "../../types/store/store.types";

const Profile: React.FC = () => {
  const userDetails = useSelector((state: IStore) => state.user.userDetails);
  const { display_name, email, country } = userDetails;

  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="User profile page" />
      </Helmet>
      <Navigation />
      <Layout>
        <Container>
          <Header>User Details</Header>
          <Name>
            <strong>Name:</strong> {display_name}
          </Name>
          <Email>
            <strong>Email:</strong> {email}
          </Email>
          <Country>
            <strong>Country:</strong> {country}
          </Country>
        </Container>
      </Layout>
    </>
  );
};

export default memo(Profile);
