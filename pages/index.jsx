import Head from "next/head";
// import Image from "next/image";
import { DotsFadeSecuence } from "../components/utilities/loaders/dots-fade-secuence/DotsFadeSecuence";

export default function Home() {
    return (
        <div className="">
            <DotsFadeSecuence />
        </div>
    );
}
