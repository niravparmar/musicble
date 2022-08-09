import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
  import { textState } from "../../atoms/playerAtom";

function cred({ providers }) {
  // const { data: session } = useSession();
  const router = useRouter();
  const [loginstatus, setLoginstatus] = useRecoilState(textState);

  const submitContact = (event) => {
    event.preventDefault();
    if(event.target.email.value == "nirav" && event.target.password.value == "nirav")
    {
        setLoginstatus("success");
        alert("Login Success")
        router.push("/");
    }

  };

//   const submitContact = async (event) => {
//     event.preventDefault();
//     const name = event.target.name.value;
//     const res = await fetch(`https://api.agify.io/?name=${name}`);
//     const result = await res.json();
//     alert(`Hi ${name} your age is most likely: ${result.age}`);
//   };
  // useEffect(() => {
  //   if (session) {
  //     router.push("/");
  //   }
  // }, [session]);

  // if (session) return <Loader />;

  return (
    <div className="bg-black h-screen flex flex-col items-center pt-40 space-y-8">
      <Head>
        <title>Login - Musicble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/logo.jpg"
        height={100}
        width={240}
        objectFit="contain"
        className="animate-pulse"
      />
    <form className="flex flex-col" onSubmit={submitContact}>
      <label htmlFor="email" class="labellogin">Email : </label>
      <input
        // className="mb-4 border-b-2"
        id="email"
        name="email"
        type="text"
        autocomplete="email"
      />
      <label htmlFor="email" class="labellogin">Password : </label>
      <input
        // className="mb-4 border-b-2"
        id="password"
        name="password"
        type="text"
        autocomplete="password"
      />
      <button
            className="text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146]"
            style={{margin : 50}}
            // onClick={() => {this.submitContact}}
          >
            {/* Sign in with {provider.name} */}
            Sign In
      </button>
    </form>
    </div>
  );
}

export default cred;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
