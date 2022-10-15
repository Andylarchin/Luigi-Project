import React, { Component, useEffect, useState, useContext } from 'react';
import '../../node_modules/fundamental-styles/dist/fundamental-styles.css';
import { useForm } from 'react-hook-form';
import { collection, addDoc, getDocs } from '@firebase/firestore';
import { database } from '../firebase-config';
import Swal from 'sweetalert2';
import { OldUserCotnext } from '../oldUserContext';

const Sample2 = () => {

  const ref = collection(database, 'users');

  const [oldData,setOldData] = useContext(OldUserCotnext);

  console.log(oldData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [username, setUsername] = useState(0);
  const [password, setPassword] = useState(0);
  const [addValue, setAddValue] = useState(0);
  const [fire, setFire] = useState([]);

  useEffect(() => {
    setUsername(watch().username);
    setPassword(watch().password);
  }, [watch()]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(ref);
      setFire(data.docs.map((data) => ({ ...data.data(), id: data.id })));
    };
    getUsers();

    console.log(fire);
  }, []);

  // // Change users name and password
  // const updateUser = async (id, oldPassword, oldUsername) => {
  //   setOldData([id, oldPassword, oldUsername]);
  //   console.log(oldData);
  // };

  // Update the users value as I hit the register button
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(ref);
      setFire(data.docs.map((data) => ({ ...data.data(), id: data.id })));
    };
    getUsers();
  }, [addValue]);

  return (
    <div>
      <div>
        <div>
          <div className="w-screen h-screen flex items-center justify-center">
            <div className="flex min-h-screen" id="container">
              <div className=" h-[200px] bg-cover items-center justify-center">
                <section className="text-center"></section>
              </div>
              <div className="flex items-center justify-center" id="login">
                <form
                  className=""
                  // Add data to firebase docs on submit
                  onSubmit={handleSubmit((data) => {
                    addDoc(ref, {
                      username: data.username,
                      password: data.password,
                    });
                  })}
                >
                  <section className="text-center">
                    <h2 className="text-2xl font-bold m-[1.5em]">Log in</h2>
                  </section>
                  <div className="input-container username">
                    <label htmlFor="username" className="block mb-2 text-xs">
                      Username
                    </label>
                    <input
                      className="block w-full box-border rounded-lg mb-5 text-sm p-[1em] border-[1px] border-gray-400 w-[300px] h-[42.8px]"
                      id="usernameInput"
                      type="text"
                      {...register('username', {
                        required: true,
                      })}
                    ></input>
                  </div>
                  <div className="input-container password">
                    <label htmlFor="password" className="block mb-2 text-xs">
                      Password
                    </label>
                    <input
                      className="block w-full box-border rounded-lg mb-5 text-sm p-[1em] border-[1px] border-gray-400 h-[46.8px]"
                      id="passwordInput"
                      type="password"
                      {...register('password', {
                        required: true,
                      })}
                    ></input>
                  </div>
                  <button
                    className="block w-full bg-gray-800 text-white font-bold p-4 rounded-lg text-xs uppercase tracking-[0,5px]"
                    type="submit"
                    onClick={() => {
                      // Basically just make the data update and delete the input old value
                      setAddValue(addValue + 1);
                      document.getElementById('usernameInput').value = '';
                      document.getElementById('passwordInput').value = '';
                    }}
                  >
                    Register
                  </button>
                  <br />
                  <button
                    className="block w-full bg-gray-800 text-white font-bold p-4 rounded-lg text-xs uppercase tracking-[0,5px]"
                    type="button"
                    // Loop though the users data and check if the current input matches the data on the firebase database
                    onClick={() => {
                      fire.map((data) => {
                        if (data.username === username && data.password === password) {
                          Swal.fire(
                            'Great job!',
                            'You succesfully logged in your account',
                            'success'
                          ).then((result) => {
                            if (result.isConfirmed) {
                              document.getElementById('usernameInput').value = '';
                              document.getElementById('passwordInput').value = '';
                            }
                          });
                        } else {
                          Swal.fire('Ooops...', 'Something went wrong!', 'error').then(
                            (result) => {
                              if (result.isConfirmed) {
                                document.getElementById('usernameInput').value = '';
                                document.getElementById('passwordInput').value = '';
                              }
                            }
                          );
                        }
                      } );
                    }}
                  >
                    Log in
                  </button>
                  <br />
                  <button
                    className="block w-full bg-gray-800 text-white font-bold p-4 rounded-lg text-xs uppercase tracking-[0,5px]"
                    type="button"
                    // Loop though the users data and check if the current input matches the data on the firebase database
                    onClick={() => {}}
                  >
                    Update User
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample2;
