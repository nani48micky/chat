import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className=' w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className=' text-3xl font-semibold text-center to-gray-300'>Login 
        <span className=' text-blue-400'> private chat</span></h1>

        <form>
            <div>
            <label className=' label p-2'>
                <span className=' text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
            </div>


            <div>
            <label className=' label p-2'>
                <span className=' text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
            </div>
            
            <a href="#" className=' text-sm hover:underline hover:text-blue-600 inline-block'>
                {"Don't have an account?"}
            </a>
            <div className=' btn btn-block btn-sm mt-2'>Login</div>
            




        </form>


    </div>
    </div>

    
  )
}

export default Login


//STARTER CODE

//import React from 'react'
//
//const Login = () => {
//  return (
//    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>Login
//    <div className=' w-full p-6 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//        <h1 className=' text-3xl font-semibold text-center to-gray-300'>Login 
//        <span className=' text-blue-400'> private chat</span></h1>
//
//        <form>
//            <div>
//            <label className=' label p-2'>
//                <span className=' text-base label-text'>Username</span>
//            </label>
//            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
//            </div>
//
//
//            <div>
//            <label className=' label p-2'>
//                <span className=' text-base label-text'>Password</span>
//            </label>
//            <input type="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
//            </div>
//            
//            <a href="#" className=' text-sm hover:underline hover:text-blue-600 inline-block'>
//                {"Don't have an account?"}
//            </a>
//            <div className=' btn btn-block btn-sm mt-2'>Login</div>
//            
//
//
//
//
//        </form>
//
//
//    </div>
//    </div>
//
//    
//  )
//}
//
//export default Login