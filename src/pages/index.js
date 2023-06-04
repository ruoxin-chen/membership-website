//pages/index.js
import React from "react";
import { Flex, View } from "@aws-amplify/ui-react";
import { Footer, Hero, Persuade, Testimonies } from "../ui-components";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import Layout from "../components/Layout";

function Index() {
  const router = useRouter();
  async function handleClick() {
    const stripe = await loadStripe(
      "pk_test_51NBJniBF33RzTfKm3MXgw6KktiE9Dh6lyRnyHLZChKSepevBBZFVhpV4LDxOJIE2Ikw61JKf5Bt6pvwWdF6rdBKv00k290TJZD"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: "price_1NFOWlBF33RzTfKmKQxwF0I8", quantity: 1 }],
      mode: "subscription",
      successUrl: "http://localhost:3000/post",
      cancelUrl: "http://localhost:3000/cancel",
    });
  }
  return (
    <Layout 
      handleClick={() => {
        router.push("/post");
      }}
      authText="Sign Up"
      username="none"
      >
      <View marginBottom="135px">
        <Hero handleClick={handleClick} />
      </View>
      <View>
        <Testimonies />
      </View>
      <Flex justifyContent={"center"}>
        <Persuade banner="https://i.imgur.com/MxbD3N4.png" />
      </Flex>
      <View marginTop="50px" marginBottom="50px">
        <Footer />
      </View>
    </Layout>
  );
}
export default Index;