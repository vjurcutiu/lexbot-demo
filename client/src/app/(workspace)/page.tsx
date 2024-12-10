import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full rounded-2xl bg-cover text-black'>
            <div className="backdrop-blur-sm bg-white/30 border-dotted rounded-lg border-2 border-gray-300 p-1 sm:p-5 md:p-12 md:max-w-[90%]">
                <h1 className="text-sm sm:text-xl md:text-4xl font-medium sm:font-normal mb-10">Welcome to LexBot Demo!</h1>
                <p className="text-xs md:text-base text-gray-700 text-pretty">
                    This is a demo version of the AI-augmented search engine and document analysis tool. Create your own workspace and upload up to 5 documents to test the functionality out for yourself!
                </p>
                <div className='flex flex-row gap-5 items-center'>
                    <Link href='/workspace/new' className="text-xs bg-[#1C17FF] p-2 px-4 rounded-md md:text-base text-white hover:opacity-65 focus:outline-none flex items-center justify-center mt-10">
                        Create workspace
                    </Link>                    
                </div>
            </div>
        </div>
    );
};

export default Page;
