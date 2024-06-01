import dynamic from "next/dynamic";
import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { siteMetadata } from "@/data/siteMetaData.mjs";

const SkillsShowcase = dynamic(
  () => import("@/components/skills/skills-showcase"),
  {
    ssr: true,
  },
);

const ProjectShowcase = dynamic(
  () => import("@/components/projects/project-showcase"),
  {
    ssr: true,
  },
);

export default function Home() {
  return (
    <>
      <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
      <NextSeo
        title={siteMetadata.title}
        description="Dive into a collection of my projects and discover the breadth of my experience as a Trainee Fullstack Software Engineer. From crafting user-friendly mobile apps to building responsive web interfaces, explore the innovative solutions I've developed. Get a taste of the depth and diversity I bring to the table"
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Discover Projects by Thimira Sadeesha - Fullstack Software Engineer",
            description:
                "Explore a showcase of projects crafted by Thimira Sadeesha," +
                "Witness the skills of a Trainee Fullstack Software Engineer (Mobile and Web) in action, from crafting user-friendly mobile apps to building responsive web interfaces.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Thimira Sadeesha - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "About Me, Fullstack Software Engineer Android ,Flutter ,NodeJs, Typescript , JavaScript, Professional Journey, Skills, Passion for Web and Mobile Development",
          },
        ]}
      />
      <Head>
        {/*{siteMetadata.googleSiteVerification && (*/}
        {/*  <meta*/}
        {/*    name="google-site-verification"*/}
        {/*    content={siteMetadata.googleSiteVerification}*/}
        {/*  />*/}
        {/*)}*/}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
