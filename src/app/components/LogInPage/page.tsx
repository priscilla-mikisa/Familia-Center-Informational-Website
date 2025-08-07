// 'use client'
// import { useState } from 'react';
// import { ArrowRight, Mail, Lock, ShieldCheck } from 'lucide-react';

// const LoginPage = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     rememberMe: false
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const validate = () => {
//     const newErrors: Record<string, string> = {};
    
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validate()) {
//       setIsLoading(true);
//       // Simulate API call
//       setTimeout(() => {
//         console.log('Login submitted:', formData);
//         setIsLoading(false);
//         // Redirect to dashboard or home page
//       }, 1500);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
//         <div className="bg-green-600 p-6 text-center">
//           <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
//             <div className="bg-white p-2 rounded-full">
//               <ShieldCheck className="w-8 h-8 text-green-600" />
//             </div>
//           </div>
//           <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
//           <p className="text-green-100 mt-2">Sign in to your account</p>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6 sm:p-8">
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`pl-10 w-full px-4 py-3 rounded-lg border ${
//                     errors.email ? 'border-red-500' : 'border-gray-300'
//                   } focus:ring-2 focus:ring-green-500 focus:border-transparent`}
//                   placeholder="john@example.com"
//                 />
//               </div>
//               {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className={`pl-10 w-full px-4 py-3 rounded-lg border ${
//                     errors.password ? 'border-red-500' : 'border-gray-300'
//                   } focus:ring-2 focus:ring-green-500 focus:border-transparent`}
//                   placeholder="Enter your password"
//                 />
//               </div>
//               {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
//             </div>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   id="rememberMe"
//                   name="rememberMe"
//                   type="checkbox"
//                   checked={formData.rememberMe}
//                   onChange={handleChange}
//                   className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
//                 />
//                 <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
//                   Remember me
//                 </label>
//               </div>
//               <div className="text-sm">
//                 <a href="#" className="text-green-600 hover:underline">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`w-full mt-6 px-6 py-3 ${
//               isLoading ? 'bg-green-500' : 'bg-green-600'
//             } text-white font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center justify-center`}
//           >
//             {isLoading ? (
//               <>
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Signing in...
//               </>
//             ) : (
//               <>
//                 Sign In <ArrowRight className="w-5 h-5 ml-2" />
//               </>
//             )}
//           </button>

//           <div className="mt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Don&apos;t have an account?{' '}
//               <a href="/components/Sign-Up-Page" className="text-green-600 font-medium hover:underline">
//                 Sign up
//               </a>
//             </p>
//           </div>
//         </form>
        
//         <div className="px-8 py-6 bg-gray-50 text-center border-t">
//           <div className="flex items-center justify-center space-x-2">
//             <ShieldCheck className="h-5 w-5 text-green-600" />
//             <p className="text-sm text-gray-600">
//               Your session is protected with end-to-end encryption
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

'use client'
import { useState, useEffect } from 'react';
import { ArrowRight, Mail, Lock, ShieldCheck, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { userLogin } from '@/app/utils/userLogin';

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '', // Changed from email to username to match your API
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState<{
    success: boolean | null;
    message: string;
  }>({ success: null, message: '' });

  // Close modal handler
  const handleClose = () => {
    router.push('/'); // Redirect to home or any other page
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      try {
        const response = await userLogin({
          username: formData.username,
          password: formData.password
        });

        if (response?.token) {
          // Successful login
          setLoginStatus({
            success: true,
            message: 'Login successful! Redirecting...'
          });
          
          // Store token if rememberMe is checked
          if (formData.rememberMe) {
            localStorage.setItem('authToken', response.token);
          } else {
            sessionStorage.setItem('authToken', response.token);
          }
          
          // Redirect to dashboard after 2 seconds
          setTimeout(() => {
            router.push('/dashboard');
          }, 2000);
        } else {
          // Failed login
          setLoginStatus({
            success: false,
            message: response?.message || 'Invalid username or password'
          });
        }
      } catch (error) {
        setLoginStatus({
          success: false,
          message: 'An error occurred during login'
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Clear status message after 5 seconds
  useEffect(() => {
    if (loginStatus.message) {
      const timer = setTimeout(() => {
        setLoginStatus({ success: null, message: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [loginStatus.message]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden relative">
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close login"
        >
          <X className="w-6 h-6 text-gray-500" />
        </button>

        <div className="bg-green-600 p-6 text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="bg-white p-2 rounded-full">
              <ShieldCheck className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
          <p className="text-green-100 mt-2">Sign in to your account</p>
        </div>

        {/* Status message */}
        {loginStatus.message && (
          <div className={`px-4 py-3 mx-6 mt-4 rounded-lg ${
            loginStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {loginStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 sm:p-8">
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  className={`pl-10 w-full px-4 py-3 rounded-lg border ${
                    errors.username ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                  placeholder="Enter your username"
                />
              </div>
              {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`pl-10 w-full px-4 py-3 rounded-lg border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                  placeholder="Enter your password"
                />
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-green-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full mt-6 px-6 py-3 ${
              isLoading ? 'bg-green-500' : 'bg-green-600'
            } text-white font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center justify-center`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </>
            ) : (
              <>
                Sign In <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <a href="/components/Sign-Up-Page" className="text-green-600 font-medium hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </form>
        
        <div className="px-8 py-6 bg-gray-50 text-center border-t">
          <div className="flex items-center justify-center space-x-2">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <p className="text-sm text-gray-600">
              Your session is protected with end-to-end encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;