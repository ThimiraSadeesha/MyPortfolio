import {type ProjectCardProps} from "@/components/projects/project-card";
import {type ProjectShowcaseListItem} from "@/components/projects/project-showcase-list";


export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
    {
        index: 0,
        title: "Accident Detection",
        href: "/projects",
        tags: ["Flutter", "MQTT", "IOT", "NestJs", "MySql"],
        image: {
            LIGHT: "images/project/accci.png",
            DARK: "images/project/accci.png",
        },
    },
    {
        index: 1,
        title: "Lawyer Plus",
        href: "/projects",
        tags: [
            "PHP",
            "HTML",
            "CSS",
            "Boostrap",
            "Ajax",
            "Jquery",
            "MySql",

        ],
        // newspaper-app
        image: {
            LIGHT: "/images/project/lawyerplus4.png",
            DARK: "/images/project/lawyerplus4.png",
        },
    },
    {
        index: 2,
        title: "Distributor App",
        href: "/projects",
        tags: ["Android", "MySql", "Sqlite", "JSON", "PHP", "API"],
        image: {
            LIGHT: "/images/project/newspaper-app.png",
            DARK: "/images/project/newspaper-app.png",
        },
    },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
    {
        name: "Accident Detection",
        favicon: "/images/project/icon/f.ico",
        imageUrl: [
            "images/project/accci.png"
        ],
        description:
            " Developed an IoT-based accident detection system using ESP32, MPU6050, ADXL345, SW420 sensors, and SIM800L. Detected accidents trigger alerts via buzzer and emergency messages. Data processed through Mosquitto MQTT broker, Node-RED, and NestJS, stored in MySQL, and displayed in a Flutter app for real-time updates and analysis.",
        sourceCodeHref: "https://github.com/SadeeshThimira1/AccidentDetectionSystem.git",
    },
    {
        name: "Lawyer Plus",
        favicon: "/images/project/icon/p.ico",
        imageUrl: [
            "/images/project/lawyerplus2.png",
            "/images/project/lawyerplus1.png",


        ],
        description:
            "The LawyerPlus Lawyer Client system enhances legal practice efficiency with features like client management, case tracking, document management, integrated communication tools, billing and invoicing, a robust calendar with reminders, and role-based access control for data security.",
        sourceCodeHref: "https://github.com/SadeeshThimira1/LaywerPlus_System.git",
    },
    {
        name: "News Paper Distributor",
        favicon: "/images/project/icon/an.ico",
        imageUrl: [
            "/images/project/paprs.png",
            "/images/project/news2.png",

        ],
        description:
            "Developed an Android app in Java for newspaper distributors, featuring trip management, route optimization, secure login, and map integration for real-time delivery tracking. Utilized JSON/XML for data exchange with a PHP server and SQLite for local data storage.",
        sourceCodeHref: "https://github.com/SadeeshThimira1/Android_APP.git",
    },
    {
        name: "Inventory Management",
        favicon: "/images/project/icon/c.ico",
        imageUrl: [
            "/images/project/Inventory.jpg",

        ],
        description:
            "Created a standalone inventory management application using C# and MySQL, featuring comprehensive inventory functions, report generation, and data storage. Integrated communication tools, billing and invoicing, a robust calendar with reminders, and role-based access control for data security.",
        sourceCodeHref: "https://github.com/SadeeshThimira1/Furniture_POS-System.git",
    },
    {
        name: "ToDo APP",
        favicon: "/images/project/icon/a.ico",
        imageUrl: [
            "/images/project/todo.png",
        ],
        description:
            "Developed a to-do app using Angular, NestJS, TypeORM, and MySQL to efficiently manage tasks.",
        sourceCodeHref: "https://github.com/SadeeshThimira1/Todo_App.git",
    },


];
