import { PageLayout } from "../components/Layouts/PageLayout"

const About = () => (
  <PageLayout>
    <p>This is the about page</p>
  </PageLayout>
)

About.getInitialProps = async () => {
  return {
    namespacesRequired: ["common"]
  }
}

export default About
