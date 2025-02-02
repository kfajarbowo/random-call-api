import React from "react";
import github from "../assets/github.svg";

export default function Header(props) {
  return (
    <div className="mx-4 my-8">
      <div className="flex items-baseline ">
        <a className="flex-auto" href="/random-call-api">
          <h1 className="my-2 text-4xl font-bold font-sans px-4 font-bold">
            Random Call APIs
          </h1>
        </a>
        <div className="">
          <a
            href="https://github.com/akimabs/random-call-api"
            target="blank"
            className="inline-block"
          >
            <embed className="h-8 w-8 pointer-events-none" src={github} />
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
}
