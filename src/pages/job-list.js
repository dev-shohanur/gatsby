import { graphql } from 'gatsby';
import React from 'react';
// import '../../node_modules/react-modal-video/scss/modal-video.scss';
import AllJobs from '../components/AllJobs/AllJobs';
import ClintLogo from '../components/ClintLogo/ClintLogo';
import Events from '../components/Events/Events';
import JobListHero from '../components/JobListHero/JobListHero';
import Layout from '../layout/layout';

export default function JobList({ data }) {
  console.log(data);
  return (
    <Layout>
      <div className='bg-white'>
        <JobListHero />
        <AllJobs data={data} />
        <Events />
        <ClintLogo />
      </div>
    </Layout>
  )
}

export const query = graphql`
query JobsList {
  allMarkdownRemark(sort: {id: DESC}, filter: {frontmatter: {}, html: {ne: ""}})  {
    nodes {
      frontmatter {
        id
        title
        tittleImg
        price
        locationArea
        team
        logo
      }
    }
  }
}
`