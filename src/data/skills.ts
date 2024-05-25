import {
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";

import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";
import JavaSvg from "@/public/icons/java.svg";
import CSvg from "@/public/icons/cc.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import angularSvg from "@/public/icons/angular.svg";
import nestSvg from "@/public/icons/nestjs.svg";
import NodejsSvg from "@/public/icons/nodejs.svg";
import flutterSvg from "@/public/icons/flutter.svg";
import androidSvg from "@/public/icons/android.svg";
import dartSvg from "@/public/icons/dart.svg";

import MongoDBSvg from "@/public/icons/mongodb.svg";
import MySqlSvg from "@/public/icons/mysql.svg";
import SqlSvg from "@/public/icons/sqlite.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import redisSvg from "@/public/icons/redis.svg";
import JiraSvg from "@/public/icons/jira.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },

      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "Java",
        icon: JavaSvg,
      },
      {
        name: "C#",
        icon: CSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "NestJs",
        icon: nestSvg,
      },
      {
        name: "NextJs",
        icon: SiNextdotjs,
      },
      {
        name: "Angular",
        icon: angularSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      // {
      //   name: "SASS",
      //   icon: SassSvg,
      // },

    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Flask",
        icon: SiFlask,
      },{
        name: "Dart",
        icon: dartSvg,
      },
    ],
  },
  {
    sectionName: "Mobile",
    skills: [
      {
        name: "Flutter",
        icon: flutterSvg,
      },
      {
        name: "Android",
        icon: androidSvg,
      },

    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "MySql",
        icon: MySqlSvg ,
      },{
        name: "SqLite",
        icon: SqlSvg ,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },{
        name: "Redis",
        icon: redisSvg,
      },{
        name: "Jira",
        icon: JiraSvg,
      },
    ],
  },
];
