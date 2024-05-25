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
        description="Explore the professional portfolio of Thimira Sadeesha, a skilled React and Frontend Developer with 2 years of hands-on experience. Discover innovative projects, expertise in modern web technologies, and a passion for creating seamless user experiences."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Thimira Sadeesha - React and Frontend Developer Portfolio",
          description:
            "Dive into the world of web development with Thimira Sadeesha. Discover a React and Frontend Developer with 2 years of expertise, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces.",
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
              "About Me, Fullstack Software Engineer ,Android ,Flutter ,NodeJs,Typescript , JavaScript, Professional Journey, Skills, Passion for Web and Mobile Development",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <SkillsShowcase skills={SKILLS_DATA} />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
