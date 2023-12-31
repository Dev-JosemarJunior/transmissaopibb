import { ServiceCard, ServiceUsersProps } from "@/components/servicecard2";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UserService } from "../../../services/userService";

interface userType {
  userId: string;
  name: string;
  email: string;
}

const test: ServiceUsersProps[] = [
  {
    serviceId: "1",
    serviceTitle: "Culto de Quarta",
    serviceStatus: "FECHADO",
    serviceDate: "22/11/2023",
    directorUser: "Neilson",
    switcherUser: "João",
    cam2User: "João",
    cam3User: "Maria",
    additional: [
      { userId: "1", userName: "oi" },
      { userId: "2", userName: "tchau" },
    ],
  },
  {
    serviceId: "2",
    serviceTitle: "Culto DTX",
    serviceStatus: "INATIVO",
    serviceDate: "25/11/2023",
    directorUser: "Neilson",
  },
  {
    serviceId: "3",
    serviceTitle: "Culto de Domingo",
    serviceStatus: "ABERTO",
    serviceDate: "26/11/2023",
    directorUser: "Neilson",
    switcherUser: "João",
    cam2User: "João",
    cam3User: "Maria",
    cam4User: "Josemar",
    additional: [
      { userId: "1", userName: "oi" },
      { userId: "2", userName: "tchau" },
    ],
  },
];

export function Home() {
  

  // const [users, setUsers] = useState<userType[]>([]);

  return (
    <>
      {/* <h1 className="bold my-14 text-center text-3xl font-semibold uppercase text-zinc-100 md:text-5xl">
        Escala Transmissão
      </h1>
      <div className=" flex flex-col flex-wrap items-start justify-center px-24 md:flex-row ">
        {test.map((service) => {
          return (
            <>
              <ServiceCard
                key={service.serviceId}
                serviceTitle={service.serviceTitle}
                serviceStatus={service.serviceStatus}
                serviceDate={service.serviceDate}
                servicePlace={service.servicePlace}
                directorUser={service.directorUser}
                switcherUser={service.switcherUser}
                cam2User={service.cam2User}
                cam3User={service.cam3User}
                cam4User={service.cam4User}
                cam5User={service.cam5User}
                cam6User={service.cam6User}
                backstage={service.backstage}
                additional={service.additional}
              />
            </>
          );
        })}
      </div> */}
    </>
  );
}
