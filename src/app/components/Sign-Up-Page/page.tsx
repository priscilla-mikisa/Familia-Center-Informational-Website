'use client'
import { useState } from 'react';
import { ArrowRight, User, Mail, Lock, ShieldCheck, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signUp } from '@/app/api/auth';
import { validateSignUpForm } from '@/app/utils/validation';

const SignUpPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'individual',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage('');
    
    const validationErrors = validateSignUpForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      const response = await signUp({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        userType: formData.userType
      });
      
      setSuccessMessage('Account created successfully! Redirecting...');
      // Redirect to dashboard or verification page
      // router.push('/verify-email');
    } catch (error: any) {
      setErrors({
        submit: error.message || 'Failed to create account. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4 relative">
      {/* Close Button */}
      <Link href="/" className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition-colors">
        <X className="w-6 h-6 text-gray-600" />
      </Link>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-green-600 p-6 text-center relative">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Join Our Community</h1>
          <p className="text-green-100 mt-2">Create your account to access family support resources</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8">
          {errors.submit && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
              {errors.submit}
            </div>
          )}
          
          {successMessage && (
            <div className="mb-4 p-3 bg-green-50 text-green-600 rounded-lg text-sm">
              {successMessage}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`pl-10 w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`pl-10 w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                  placeholder="john@example.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
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
                  placeholder="At least 8 characters"
                />
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`pl-10 w-full px-4 py-3 rounded-lg border ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                  placeholder="Confirm your password"
                />
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
              )}
            </div>

            <div>
              <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-1">
                Account Type
              </label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="individual">Individual</option>
                <option value="couple">Couple</option>
                <option value="family">Family</option>
                <option value="anonymous">Anonymous</option>
              </select>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreeToTerms" className="text-gray-700">
                  I agree to the{' '}
                  <a href="#" className="text-green-600 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-green-600 hover:underline">
                    Privacy Policy
                  </a>
                </label>
                {errors.agreeToTerms && (
                  <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms}</p>
                )}
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
                Creating Account...
              </>
            ) : (
              <>
                Create Account <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-green-600 font-medium hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </form>
        
        <div className="px-8 py-6 bg-gray-50 text-center border-t">
          <div className="flex items-center justify-center space-x-2">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <p className="text-sm text-gray-600">
              Your information is securely encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;