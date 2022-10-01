import Head from "next/head";
// import Image from "next/image";
import { DotsFadeSecuence } from "../components/utilities/loaders/dots-fade-secuence/DotsFadeSecuence";

export default function Home() {
    return (
        <div className="w-full min-h-screen grid place-items-center">
            <DotsFadeSecuence />
        </div>
    );
}
