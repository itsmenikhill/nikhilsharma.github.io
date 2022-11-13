import React from "react";

const Experience = () => {
  return (
    <div className="items-center md:justify-start md:ml-[25%]">
      <div className="md:p-20 p-14">
        <h1 className="text-white font-semibold text-7xl md:text-9xl tracking-wider pb-8">
          WHAT HAVE I DONE?
        </h1>
        <div className="flex justify-start animate-bounce m-32 ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
            />
          </svg>
          {/* <h1 className="pl-6 text-gray-200 animate-pulse">Scroll down</h1> */}
        </div>
        <div className="grid">
          <div className="md:flex justify-start flex-cols pt-12 max-w-4xl">
            <div className="md:flex flex-1 pt-6 md:pt-12">
              <div className="md:grid grid-rows-5">
                <div className="bg-gray-400 px-1 -skew-x-[24deg]">
                  <h1 className="text-3xl px-2 md:px-0 mt-1 skew-x-[24deg]">
                    Senior Systems Engineer
                  </h1>
                </div>
                <h1 className="text-xl pt-1">Infosys Ltd.</h1>
                <h1 className="text-xl">May 2022-present</h1>
              </div>
            </div>
            <div className="flex flex-[1.5]">
              <div className="pt-12 md:p-12">
                <p className="text-white md:text-xl">
                  I was a part of the development team for a &apos;Goods and Services
                  Tax Network&apos; project, which is a non-government organisation
                  that manages the entire IT system of the GSTN portal. GSTN
                  portal allowed users to register or track every financial
                  transaction and provides taxpayers with all the services.
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex justify-start flex-cols mt-12 max-w-4xl">
            <div className="md:flex flex-1 pt-6 md:pt-12">
              <div className="md:grid grid-rows-5">
                <div className="bg-gray-400 px-2 -skew-x-[24deg]">
                  <h1 className="text-3xl px-2 md:px-0 mt-1 skew-x-[24deg]">
                    Systems Engineer
                  </h1>
                </div>

                <h1 className="text-xl pt-1">Infosys Ltd.</h1>
                <h1 className="text-xl">Jan 2021- May 2022</h1>
              </div>
            </div>
            <div className="flex-[1.5]">
              <div className="pt-12 md:p-12">
                <p className="text-white md:text-xl">
                  The main area of my expertise is Backend development. During
                  my time in Infosys, I have worked on projects that have had
                  very strong impact in the organization. &apos;My Business
                  Report&apos; was a project on which the users could track the
                  weekly, monthly, quarterly or yearly business of the
                  organization.
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex justify-start flex-cols mt-12 max-w-4xl">
            <div className="md:flex flex-1 pt-6 md:pt-12">
              <div className="md:grid grid-rows-5">
                <div className="bg-gray-400 px-2 -skew-x-[24deg]">
                  <h1 className="text-3xl px-2 md:px-0 mt-1 skew-x-[24deg]">
                    Open Source
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex-[1.5]">
              <div className="pt-12 md:p-12">
                <p className="text-white md:text-xl">
                  I have been trying to contribute to the open source community
                  for some time now. I also participated in Hacktober Fest 2022.
                  Had two PRs merged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
