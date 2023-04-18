import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Nav from "./navbar";
import AddMemberModal from "./addMemberModal";

export default function AddMember() {
  return (
    <>
      <h2 className="text-base font-semibold leading-7 text-gray-900 text-xl">
        Add Member
      </h2>

      <div>
        <div
          style={{
            display: "flex",
            //justifyContent: "center",
            //alignItems: "center",
          }}
        >
          <form>
            <div>
              <div
                style={{
                  width: "500px",
                  height: "300px",
                  borderRadius: "20px",
                  marginLeft: "150px",
                }}
              >
                <p className="mt-1 text-sm leading-6 text-gray-600"></p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full border-gray-300 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Age
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="age"
                        id="age"
                        className="block w-full border-gray-300 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Relationship
                    </label>
                    <div className="mt-2  ">
                      <div>
                        <select
                          name="post-type"
                          className="block w-full border-gray-300 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option value="parent">Parent</option>
                          <option value="children">Child</option>
                          <option value="sibling">Sibling</option>
                          <option value="spouse">Spouse</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Link to existing account
                    </label>
                    <div>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block w-full border-gray-300 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="janesmith"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "500px",
                  height: "500px",
                  borderRadius: "20px",
                  marginLeft: "150px",
                }}
              >
                <div className="space-y-12">
                  <div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="col-span-full">
                        <label
                          htmlFor="cover-photo"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Profile picture
                        </label>
                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                          <div className="text-center">
                            {/* <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      /> */}
                            <UserCircleIcon
                              className="mx-auto h-24 w-24 text-gray-300"
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
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <AddMemberModal />
      </div>
    </>
  );
}
