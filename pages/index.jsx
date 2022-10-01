import Head from "next/head";
// import Image from "next/image";
import { DotsFadeSecuence } from "../components/utilities/loaders/dots-fade-secuence/DotsFadeSecuence";

export default function Home() {
    return (
        <div className="grid min-h-screen w-full place-items-center">
            <div className="mx-auto flex max-w-lg flex-col items-center gap-4 px-6">
                <h1 className="flex flex-col items-center text-center text-3xl font-bold text-slate-600 ">
                    <span>
                        <pre className="inline rounded-xl bg-rose-500 p-2 text-white">
                            Storybook-Vite
                        </pre>
                    </span>
                    <span className="p-2">&&</span>
                    <span>
                        <pre className="inline rounded-xl bg-cyan-500 p-2 text-white">
                            TailwindCSS
                        </pre>
                    </span>
                    <span className="p-2">&&</span>
                    <span>
                        <pre className="inline rounded-xl bg-slate-800 p-2 text-white">Next.js</pre>
                    </span>
                </h1>
                <span className="pt-[24px]">
                    <pre>Starter Kit</pre>
                </span>
                <div className="pt-[30px]">
                    <DotsFadeSecuence animate={true} />
                </div>
            </div>
        </div>
    );
}
