import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const Register = () => {

  const [userInfo, setUserinfo] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({
    emailError: '',
    passError: '',
    generaleError: '',
  })
  const [createUserWithEmailAndPassword, user, hookerror,] = useCreateUserWithEmailAndPassword(auth);


  const handleEmail = e => {

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
      setUserinfo({ ...userInfo, email: e.target.value })
      setErrors({ ...errors, emailError: '' })

    }
    else {
      setErrors({ ...errors, emailError: 'invalid email' })
      setUserinfo({ ...userInfo, email: '' })
    }

  }
  const handlePassword = e => {
    if (/.{6,}/.test(e.target.value)) {
      setUserinfo({ ...userInfo, password: e.target.value })
      setErrors({ ...errors, passError: '' })
    }
    else {
      // error 
      setErrors({ ...errors, passError: 'password should be 6 char' })
      setUserinfo({ ...userInfo, password: '' })
    }

  }


  const handleConfirmPassword = e => {
    if (e.target.value === userInfo.password) {
      setUserinfo({ ...userInfo, confirmPassword: e.target.value })
      setErrors({ ...errors, passError: '' })
    }
    else {
      // error 
      setErrors({ ...errors, passError: 'password dont match' })
      setUserinfo({ ...userInfo, confirmPassword: '' })
    }

  }


  const handleLogin = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(userInfo.email, userInfo.password)
  }

  useEffect(() => {

    if (hookerror) {
      switch (hookerror.code) {
        case 'auth/invalid-email':
          setErrors({ ...errors, generaleError: 'invalid-email' })
          break
        case 'auth/invalid-password':
          setErrors({ ...errors, generaleError: 'invalid-password' })
          break
        case 'auth/user-not-found':
          setErrors({ ...errors, generaleError: 'user not found' })
          break
        default:
          setErrors({ ...errors, generaleError: 'something went wrong' })
          break
      }



      console.log(hookerror)
      // setErrors({...errors, generaleError:'something went wrong'})
    }
  }, [hookerror])


  const location = useLocation()
  const navigate = useNavigate()
  const from = location?.state?.from?.pathname || '/'


  useEffect(() => {
    if (user) {
      navigate(from)
    }
  }, [user])


  return (
    <>

      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}

          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleEmail}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                {errors?.emailError && <p className='text-red-600'>{errors.emailError}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={handlePassword}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                {errors?.passError && <p>{errors.passError}</p>}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleConfirmPassword}
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                {errors?.passError && <p>{errors.passError}</p>}
              </div>

              {errors.generaleError && <p>{errors.generaleError}</p>}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>


              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>


            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div>
                  <a
                    href="/"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Google</span>
                   <h1>google</h1>
                  </a>
                </div>

                <div>
                  <a
                    href="/"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                 <h1>Github</h1>
                  </a>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;