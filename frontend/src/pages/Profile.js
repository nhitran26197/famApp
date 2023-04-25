import { UserCircleIcon } from "@heroicons/react/24/solid";
import NavBar from "../components/Navbar";
import React, { useState, useEffect } from 'react';
//import styles from '../css/login.module.css';
import { Link, useNavigate} from 'react-router-dom';
//import jwt_decode from 'jwt-decode';
import axios from 'axios';

export default function Profile() {
  
  const local_username = sessionStorage.getItem("username", );
  console.log(local_username);
  const local_email = sessionStorage.getItem("email", );
  const local_name = sessionStorage.getItem("name",);
  const local_age = sessionStorage.getItem("age",);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  let navigate = useNavigate();

  const routeToUdpatedPage = (e) => {
    e.preventDefault();
    navigate('/profile');
  }
  
  const refreshPage = async (e) => {
    if(username === "") {
      console.log("username is empty");
      setUsername(local_username);
    }
    if(email === "") {
      setEmail(local_email);
    }
    if(name === "") {
      setName(local_name);
    }
    if(age === null) {
      setAge(local_age);
    }
    console.log(username);
    e.preventDefault();
    console.log("refreshing page in frontend start of refreshPage");
    axios
        .post("http://localhost:3030/eup",
        {
          localusername: local_username,
          local_age: local_age,
          local_email: local_email,
          local_name: local_name,
          usernameInput: username,
          emailInput: email,
          ageInput: age,
          nameInput: name, 
        })
        .then((res) => {
          console.log(res);
          // console.log(res[username]);
          // console.log(res[email]);
          // console.log("made it back to frontend");
          // console.log(res.data['0'].account);
          // console.log(res.data['0'].member_id);
          // console.log(res.data['_doc'].username);
          // console.log(res.data['_doc'].email);
          // sessionStorage.setItem("username", res.data.username);
          // sessionStorage.setItem("email", res.data['_doc'].email);

          //window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
  }
  // axios
  //   .post("http://localhost:3030/eup", {
  //     localusername: local_username,
  //     usernameInput: username,
  //     emailInput: email,
  //     ageInput: age,
  //     nameInput: name,
  //   })
      
   return (
    <>

      <NavBar></NavBar>
      <h2 className="text-base font-semibold leading-7 text-gray-900 text-3xl ml-36 mt-20">
        Profile
      </h2>

      <div>
        <div
          style={{
            display: "flex",
          }}
        >
          <form>
            <div className="flex flex-row">
              <div
                style={{
                  width: "500px",
                  height: "500px",
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
                        onChange={(e) => setName(e.target.value)}
                        placeholder= {local_name}
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
                        onChange={(e) => setAge(e.target.value)}
                        placeholder= {local_age}
                        type="text"
                        name="age"
                        id="age"
                        className="block w-full border-gray-300 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder= {local_email}
                        type = "text"
                        id="email"
                        name="email"
                        //type="email"
                        autoComplete="email"
                        className="block w-full border-gray-300 rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Username
                    </label>
                    <div>
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder= {local_username}
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block w-full border-gray-300  rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        //placeholder="janesmith"
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
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                onClick={refreshPage}
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
    )
}
