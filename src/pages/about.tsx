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
                description="Learn more about Thimira Sadeesha, a dedicated Fullstack Software Engineer. Discover the journey, skills, and passion that drive me to create innovative and user-friendly Web and Mobile solutions."
                canonical={`${siteMetadata.siteUrl}/about`}
                openGraph={{
                    url: `${siteMetadata.siteUrl}/about`,
                    title: "Learn About Thimira Sadeesha - Fullstack Software Engineer",
                    description:
                        "Dive into the story of Thimira Sadeesha, a dedicated Fullstack Software Engineer. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional Web and Mobile solutions.",
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
            <AboutHero/>
            <ExperienceShowcaseList title="Experience" details={EXPERIENCE}/>
            <ExperienceShowcaseList title="Education" details={EDUCATION}/>
        </>
    );
}
