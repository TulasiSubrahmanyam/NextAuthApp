import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-cover bg-no-repeat h-screen w-screen absolute">
      <Image
        src="/home.jpg"
        alt="home"
        layout="fill" 
        objectFit="cover" 
        quality={100}
      />
     
    </div>
    
    </>
  );
}