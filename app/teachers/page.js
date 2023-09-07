import styles from "./teachers.module.css";
import Image from "next/image";
import Link from "next/link";
import placeHolderTeacherImg from "@/public/pfp-placeholder.jpg";
// src: https://www.pexels.com/photo/woman-in-brown-suit-jacket-standing-5212321/

function Links() {
    return (
        <div className={styles.links}>
            <Link href="/book">About</Link>
            <Link href="/book">Details</Link>
        </div>
    );
}

/**
 * @typedef {Object} PfpPayload
 * @property {string} pfp - Profile picture URL/import
 * @property {string} alt - Alt text for profile picture
 */
/**
 * Card component for displaying teacher's information
 * 
 * @param {Object} props - Props for Card component
 * @param {PfpPayload} props.pfpPayload - Object containing the pfp and its alt text
 * @param {string} props.name - Name of the teacher
 * @param {("President" | "Webmaster" | "Certified Teacher" | "Expert")} props.role - Role of teacher to organization if applicable
 * @param {Array<string>} props.infoList - List of subjects/classes they can teach
 */
function Card({ pfpPayload: { pfp, alt }, name, role, infoList }) {
    return (
        <div className={styles.card}>
            <div className={styles["profile-picture"]}>
                <Image
                    src={pfp}
                    alt={alt}
                />
            </div>
            <div className={styles["main-tags"]}>
                <div>{name}</div>
                <div>{role}</div>
            </div>
            <ul className={styles.info}>
                {/* static site, order will not change dynamically ever, so index key here is fine with me */}
                {infoList.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <Links />
        </div>
    );
}

export default function TeachersPage() {
    return (
        <div className={styles.container}>
            <div className={styles["container-wrapper"]}>
                <Card
                    pfpPayload={{
                        pfp: placeHolderTeacherImg,
                        alt: "Profile Picture of Teacher in Brown Suit Jacket and Round Glasses Standing"
                    }}
                    name="Rimma Rashkovan"
                    role="President"
                    infoList={["College Consulting", "Algebra 1 & 2 • Pre-Calculus", "NYC Public School Certified 7-12 Teacher"]}
                />

                <Card
                    pfpPayload={{
                        pfp: placeHolderTeacherImg,
                        alt: "Profile Picture of Teacher in Brown Suit Jacket and Round Glasses Standing"
                    }}
                    name="Clare Lee"
                    role="Certified Teacher"
                    infoList={["Geometry", "AP Calculus AB"]}
                />

                <Card
                    pfpPayload={{
                        pfp: placeHolderTeacherImg,
                        alt: "Profile Picture of Teacher in Brown Suit Jacket and Round Glasses Standing"
                    }}
                    name="Peter Kaplinsky"
                    role="Expert"
                    infoList={["Coding"]}
                />

                <Card
                    pfpPayload={{
                        pfp: placeHolderTeacherImg,
                        alt: "Profile Picture of Teacher in Brown Suit Jacket and Round Glasses Standing"
                    }}
                    name="Larry Shoyfer"
                    role="Webmaster"
                    infoList={["Coding"]}
                />

                <Card
                    pfpPayload={{
                        pfp: placeHolderTeacherImg,
                        alt: "Profile Picture of Teacher in Brown Suit Jacket and Round Glasses Standing"
                    }}
                    name="Nikita Afanasyev"
                    role="Expert"
                    infoList={["SHSAT Prep for Specialized High Schools (ELA & Math)"]}
                />
            </div>
        </div>
    )
}