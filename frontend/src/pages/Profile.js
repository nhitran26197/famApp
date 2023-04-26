import React, { Component } from "react";
import NavBar from "../components/Navbar";
import TimeLineLogic from "../components/TimeLineLogic";
import BucketList from "../components/getBucketList";
import "../css/Profile.css";
//import familypage from "../familyimage.jpeg";
import AddGoal from "../components/addGoal";
import AddTime from "../components/addTime";
import { Dialog, Transition } from "@headlessui/react";
import AddPost from "../components/addPost";
import { useState, useEffect, useRef, Fragment } from "react";

const bucketListItems = [
  {
    id: 1,
    title: "Visit the Grand Canyon",
    description:
      "Experience the natural beauty of one of America's most iconic landmarks.",
    location: "Arizona, USA",
    image:
      "https://cdn.aarp.net/content/dam/aarp/travel/destinations/2020/11/1140-big-bend-national-park-hero.jpg",
  },
  {
    id: 2,
    title: "Learn to surf",
    description:
      "Ride the waves like a pro and experience the thrill of surfing.",
    location: "Hawaii, USA",
  },
  {
    id: 3,
    title: "Go on a safari",
    description:
      "Experience the thrill of seeing wild animals in their natural habitat.",
    location: "Kenya, Africa",
  },
];

const items = [
  {
    title: "I was born",
    description: "I was born in 1999",
    location: "Moon",
    image:
      "https://thumbs.dreamstime.com/b/one-day-old-indian-asian-infant-newborn-baby-black-white-picture-one-day-old-new-born-baby-black-white-photo-125370761.jpg",
  },
  {
    title: "Go to the moon",
    description: "First time to school",
    location: "Moon",
    image:
      "https://cdnsm5-hosted.civiclive.com/UserFiles/Servers/Server_14481062/Image/News/2020/January/Articles_Kindness_Little_01-21-20-03.jpg",
  },
];

export default function Profile() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <>
      <div>
        <div>
          <NavBar></NavBar>
        </div>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        />
        <div>
          <section class="relative block h-500-px profile-header">
            <div class="absolute top-0 w-full h-full bg-center bg-cover">
              <span
                id="blackOverlay"
                class="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
              {/* <img
            src="../familyimage.jpeg"
            alt="..."
        
          /> */}
              {/* <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg> */}
            </div>
          </section>
        </div>
        <div>
          <section class="">
            <div class="mx-auto px-20">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-60">
                <div>
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div class="relative">
                        <img
                          alt="..."
                          src={localStorage.getItem("picture")}
                          //src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                          class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        />
                      </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div class="py-12 px-3 mt-32 sm:mt-0">
                        {/* <button
                      class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Connect
                    </button> */}
                      </div>
                    </div>
                    <div class="w-full lg:w-4/12 px-4 lg:order-1">
                      <div class="flex justify-center py-4 lg:pt-4 pt-8">
                        {/* <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        22
                      </span>
                      <span class="text-sm text-blueGray-400">Friends</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        10
                      </span>
                      <span class="text-sm text-blueGray-400">Photos</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        89
                      </span>
                      <span class="text-sm text-blueGray-400">Comments</span>
                    </div> */}
                      </div>
                    </div>
                  </div>
                  <div class="text-center mt-12">
                    <h3 class="text-4xl font-semibold leading-normal text-blueGray-700 mb-4">
                      {localStorage.getItem("name")}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <div class="flex place-content-around">
            <div class="mt-8">
              <button
                type="button"
                className="button text-blueGray-700"
                style={{ backgroundColor: "#9EBC9E" }}
                onClick={() => setOpen(true)}
                ref={cancelButtonRef}
              >
                Add Goal
              </button>
              <Transition.Root show={open} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-10"
                  initialFocus={cancelButtonRef}
                  onClose={setOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <AddGoal />
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                              onClick={() => setOpen(false)}
                              ref={cancelButtonRef}
                            >
                              Cancel
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
            </div>
            <div class="mt-8">
              <AddTime />
            </div>
          </div>
          <div className="grid grid-cols-2 place-content-stretch">
            <div className="content flex justify-center p-8">
              <BucketList items={bucketListItems} />
            </div>
            <div className="content flex justify-center p-8 place-self-start ml-20">
              <TimeLineLogic items={items} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
