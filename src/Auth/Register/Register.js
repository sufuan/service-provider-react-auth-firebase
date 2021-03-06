import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import googlelogo from '../../assets/google.png'
import { FirebaseError } from 'firebase/app';


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

  //  create user hookdeclare 
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    hookerror,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
      // google login hook 
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);


  // handle input form 
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


  // custom FirebaseError err msg 
  useEffect(() => {

    if (hookerror) {
      switch (hookerror.code) {
      
       
        case 'auth/email-already-in-use':
          setErrors({ ...errors, generaleError: 'email is already registered' })
          break

        case 'auth/internal-error':
          setErrors({ ...errors, generaleError: 'internal error' })
          break
        case 'auth/network-request-failed':
          setErrors({ ...errors, generaleError: 'Network error' })
          break
        default:
          setErrors({ ...errors, generaleError: 'something went wrong' })
          break
      }



    }
  }, [hookerror])


  // redirect after regisr 
  const location = useLocation()
  const navigate = useNavigate()
  const from = location?.state?.from?.pathname || '/'


  useEffect(() => {
    if (user) {
      navigate(from)
    }
  }, [user])

  useEffect(() => {
    if (googleUser) {
      navigate(from)
    }
  }, [googleUser])
  return (
    <>

      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}

          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleLogin}>

              {/* email field  */}
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
              
              {/* input password  */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={handlePassword}

                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                {errors?.passError && <p className='text-red-600 text-sm'>{errors.passError}</p>}
              </div>

              {/* confim password  */}

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confim Password
                </label>
                <div className="mt-1">
                  <input
                    onChange={handleConfirmPassword}

                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

              </div>
              {/* {errors?.passError && <p>{errors.passError}</p>} */}

              {errors.generaleError && <p className='text-red-600 text-sm'>{errors.generaleError}</p>}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Link className="font-medium text-indigo-600 hover:text-indigo-500" to="/login">Login now</Link>
                </div>

                <div className="text-sm">
                  <Link to='/' className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
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

                {/* google login  */}
                <div>
                  <button onClick={() => signInWithGoogle()}

                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <img className='w-50 h-5' src={googlelogo} alt="" />
                  </button>
                </div>


                {/* facebook login  */}
                <div>
                  <button disabled

                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with facebook</span>
                    <h1>facebook</h1>
                  </button>
                </div>

                {/* Gitbub login */}

                <div>
                  <button disabled

                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with GitHub</span>
                    <h1>Gitbub</h1>
                  </button>
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