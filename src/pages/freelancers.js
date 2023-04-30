import { graphql } from 'gatsby';
import React from 'react';
// import '../../node_modules/react-modal-video/scss/modal-video.scss';
import ClintLogo from '../components/ClintLogo/ClintLogo';
import FeatureProfile from '../components/FeatureProfile/FeatureProfile';
import FreelancerHero from '../components/FreelancerHero/FreelancerHero';
import FreelancerList from '../components/FreelancerList/FreelancerList';
import Layout from '../layout/layout';

export default function Freelancers({ data }) {
  console.log(data);
  return (
    <Layout>
      <div>
        <FreelancerHero />
        <div className="-mt-[220px]">
          <FeatureProfile />
        </div>
        <FreelancerList data={data} />
        <ClintLogo />
      </div>
    </Layout>
  )
}


export const query = graphql`
query FreelancersInfo {
    allMarkdownRemark(sort: {id: DESC}, filter: {html: {eq: ""}}) {
      nodes {
        frontmatter {
          id
          rate
          profile
          profession
          onlineStatus
          name
          rating
          member
          location
          lastReview
        }
      }
    }
  }
`