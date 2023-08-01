"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TeacherButton() {
    const router = useRouter();

    return ( 
        <div>
            <motion.button
                whileTap={{scale: 0.9}}
                onClick={() => router.push("/teachers")}
            >
                Meet the Team
            </motion.button>
        </div>
    );
}