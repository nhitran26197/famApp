/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],

  ```
*/
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import PostPop from "./postModal";

export default function Example() {
  return (
    <div
      style={{
        width: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              ADD POST
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Type
                </label>
                <div className="mt-2  ">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      Choose a type/
                    </span> */}

                    <select
                      name="post-type"
                      className="block flex-1 border-1 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    >
                      <option value="travel">Travel</option>
                      <option value="event">Event</option>
                      <option value="life-event">Life Event</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="caption"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Caption
                </label>
                <div className="mt-2">
                  <textarea
                    id="caption"
                    name="caption"
                    rows={3}
                    className="block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  What is the memory?
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#f1dede",
            color: "black",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
        <PostPop />
      </form>
    </div>
  );
}
