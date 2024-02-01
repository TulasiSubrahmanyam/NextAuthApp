import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/routeConfig";
import Image from "next/image";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  //   if (!session || !session.user) redirect("/auth/signin");
  return (
    <div className="mt-5 p-5 item-center">
      {user && user.role==="user" ? (
        <div className="flex flex-row justify-around">
        <div>
        <Image
          height={300}
          width={300}
          src={user?.image ?? ""}
          alt={user?.name ?? ""}
          className="rounded-full"
        />
        </div>
         <div className="grid grid-cols-2 mt-4">
         <p>Name:</p> <p className="col-span-1">{user?.name}</p>
         <p>Email:</p> <p className="col-span-1">{user?.email}</p>
         {/* <p>Phone:</p> <p className="col-span-4">{user?.phone}</p> */}
        
       </div>
       </div>
      ):(
      <div className="flex flex-row justify-around">
      <div>
        <Image
          height={300}
          width={300}
          src='/profile-icon-9.png'
          alt={user?.firstName ?? ""}
          className="rounded-full"
        />
        </div>
       
        <div className="grid grid-cols-2 mt-5">
          <p>First Name:</p> <p className="col-span-0">{user?.firstName}</p>
          <p>Last Name:</p> <p className="col-span-1">{user?.lastName}</p>
          <p>Phone:</p> <p className="col-span-1">{user?.phone}</p>
          <p>Email:</p> <p className="col-span-1">{user?.email}</p>
        </div>
        </div>
         )}
      
    </div>
  );
};

export default ProfilePage;