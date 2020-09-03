import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CoffeeComponent from "../components/coffeesComponent"

const IndexPage = () => (
  <Layout>
    <CoffeeComponent></CoffeeComponent>
  </Layout>
)

export default IndexPage
