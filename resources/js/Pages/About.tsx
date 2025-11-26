import { Link } from "@inertiajs/react";

export default function About() {
    return (
        <>
            <Link href={route("home")}>Home</Link>
            <h1>About Page</h1>
        </>
    );
}
