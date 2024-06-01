import {NextSeo} from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import {EXPERIENCE} from "@/data/experience";
import {EDUCATION} from "@/data/education";
import {siteMetadata} from "@/data/siteMetaData.mjs";

export default function About() {
    return (
        <>
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
            <AboutHero/>
            <ExperienceShowcaseList title="Experience" details={EXPERIENCE}/>
            <ExperienceShowcaseList title="Education" details={EDUCATION}/>
        </>
    );
}
