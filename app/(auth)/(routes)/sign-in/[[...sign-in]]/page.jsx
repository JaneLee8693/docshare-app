import { SignIn } from "@clerk/nextjs"
import Image from 'next/image'
import Constant from "../../../../_utils/Constant";

export default function Page() {
  return (
    <section class="bg-white">
      <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            class="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div class="hidden lg:relative lg:block lg:p-12">
            <a class="block text-white" href="/">
              <span class="sr-only">Home</span>
              <Image src='/logo.svg' width={50} height={30}/>

            </a>
    
            <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to DocShare 🗂️
            </h2>
    
            <p class="mt-4 leading-relaxed text-white/90">
              {Constant.desc}
            </p>
          </div>
        </section>
    
        <main
          class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div class="max-w-xl lg:max-w-3xl">
            <div class="relative -mt-16 block lg:hidden">
              <a
                class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
              >
                <span class="sr-only">Home</span>
                <Image src='/logo.svg' width={50} height={30}/>
              </a>
    
              <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to DocShare 🗂️
              </h1>
    
              <p class="mt-4 leading-relaxed text-gray-500">
                {Constant.desc}
              </p>
            </div>
            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}