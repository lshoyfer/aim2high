"use client";
import { useRouter } from "next/navigation";

// TODO css animation

export default function TeacherButton() {
    const router = useRouter();

    return ( 
        <div>
            <button 
                onClick={() => router.push("/teachers")}
            >
                Meet the Team
            </button>
        </div>
    );
}