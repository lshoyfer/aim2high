/* eslint-disable jsx-a11y/alt-text */
import styles from "./teachers.module.css";
import Image from "next/image";
import Link from "next/link";
// import placeHolderTeacherImg from "@/public/pfp-placeholder.jpg";
// src: https://www.pexels.com/photo/woman-in-brown-suit-jacket-standing-5212321/
import { Rimma, Clare, Peter, Larry, Nikita } from "@/public/placeholderImgs";
import { InlineSvg, LinkSvg } from "@/components/Svgs";

/**
 * @typedef {Object} PfpPayload
 * @property {string} src - Profile picture URL/import
 * @property {string} alt - Alt text for profile picture
 */
/**
 * Card component for displaying teacher's information
 * 
 * @param {Object} props - Props for Card component
 * @param {PfpPayload} props.pfpPayload - Object containing the pfp src and its alt text
 * @param {string} props.name - Name of the teacher
 * @param {("President" | "Webmaster" | "Certified Teacher" | "Expert")} props.role - Role of teacher to organization if applicable
 * @param {string} props.desc - Description/about me text
 * @param {React.Component} props.children - React Children used for custom html insert below pricing as needed
 * 
 */
function Card({ pfpPayload, name, role, desc, children }) {
    return (
        <div className={styles.card}>
            <div className={styles["profile-picture"]}>
                <Image
                    {...pfpPayload}
                />
            </div>
            <div className={styles["main-tags"]}>
                <div>{name}</div>
                <div>{role}</div>
            </div>
            {children}
            <p className={styles.info}>
                {desc}
            </p>
            <Link className={styles.link} href="/page/book">Book</Link>
        </div>
    );
}

export default function TeachersPage() {
    return (
        <div id={styles.container}>
            <div id={styles["container-wrapper"]}>
                <Card
                    pfpPayload={Rimma}
                    name="Rimma Rashkovan"
                    role="President"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et gravida est."
                >
                    <Link 
                        href="/page/consulting"
                        id={styles["consulting-link"]} 
                    >
                        <span>
                            College Admissions Consulting
                            <InlineSvg>
                                <LinkSvg id={styles["consulting-link-svg"]} />
                            </InlineSvg>
                        </span>
                    </Link>
                </Card>

                <Card
                    pfpPayload={Clare}
                    name="Clare Lee"
                    role="Certified Teacher"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt enim purus, eget accumsan neque bibendum dapibus. Integer et gravida est. Cras dolor est, tincidunt consequat urna vel, feugiat hendrerit massa."
                />

                <Card
                    pfpPayload={Peter}
                    name="Peter Kaplinsky"
                    role="Expert"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt enim purus, eget accumsan neque bibendum dapibus. Integer et gravida est."
                />

                <Card
                    pfpPayload={Larry}
                    name="Larry Shoyfer"
                    role="Webmaster"
                    desc="I love to sing"
                />

                <Card
                    pfpPayload={Nikita}
                    name="Nikita Afanasyev"
                    role="Expert"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt enim purus, eget accumsan neque bibendum dapibus."
                />
            </div>
        </div>
    )
}