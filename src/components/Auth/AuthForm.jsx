// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { Eye, EyeOff, Lock, Mail, User, Heart } from 'lucide-react';
// import { registerUser, loginUser } from '../../store/auth/authActions';

// const AuthForm = ({ activeTab, showPassword, setShowPassword }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const authState = useSelector((state) => state.auth);

//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     username: '',
//     password: '',
//     role: 'user', // Default role
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [id]: value }));
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     dispatch(loginUser({ email: formData.email, password: formData.password }));
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     dispatch(registerUser(formData))
//       .unwrap()
//       .then((data) => {
//         // Redirect to verify-otp page with userId
//         navigate(`/verify-otp?userId=${data.userId}`);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   const handleRoleChange = (e) => {
//     setFormData((prevData) => ({ ...prevData, role: e.target.value }));
//   };

//   return (
//     <div className="space-y-6">
//       {activeTab === 'login' ? (
//         <form className="space-y-4" onSubmit={handleLogin}>
//           <FormField
//             id="email"
//             label="Email Address"
//             type="email"
//             placeholder="name@example.com"
//             icon={<Mail className="w-5 h-5" />}
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <FormField
//             id="password"
//             label="Password"
//             type={showPassword ? 'text' : 'password'}
//             placeholder="••••••••"
//             icon={<Lock className="w-5 h-5" />}
//             showPassword={showPassword}
//             setShowPassword={setShowPassword}
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <div className="flex items-center justify-between text-sm">
//             <label className="flex items-center text-red-200/70">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4 rounded border-red-900 bg-black/30 checked:bg-red-900 checked:border-red-900"
//               />
//               <span className="ml-2">Remember me</span>
//             </label>
//             <button className="text-red-400 hover:text-red-300 transition-colors">
//               Forgot Password?
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 px-4 bg-red-900 text-white rounded-lg font-medium hover:bg-red-800 transition-all duration-300 shadow-lg shadow-red-900/30 flex items-center justify-center gap-2 group"
//           >
//             {authState.isLoading ? (
//               <span>Loading...</span>
//             ) : (
//               <>
//                 <span>Sign In</span>
//                 <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
//               </>
//             )}
//           </button>
//           {authState.error && <p className="text-red-500 text-sm">{authState.error}</p>}
//         </form>
//       ) : (
//         <form className="space-y-4" onSubmit={handleRegister}>
//           <FormField
//             id="fullName"
//             label="Full Name"
//             placeholder="John Doe"
//             icon={<User className="w-5 h-5" />}
//             value={formData.fullName}
//             onChange={handleChange}
//           />
//           <FormField
//             id="email"
//             label="Email Address"
//             type="email"
//             placeholder="name@example.com"
//             icon={<Mail className="w-5 h-5" />}
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <FormField
//             id="username"
//             label="Username"
//             placeholder="username"
//             icon={<User className="w-5 h-5" />}
//             value={formData.username}
//             onChange={handleChange}
//           />
//           <FormField
//             id="password"
//             label="Password"
//             type={showPassword ? 'text' : 'password'}
//             placeholder="••••••••"
//             icon={<Lock className="w-5 h-5" />}
//             showPassword={showPassword}
//             setShowPassword={setShowPassword}
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <RoleSelection selectedRole={formData.role} onRoleChange={handleRoleChange} />
//           <button
//             type="submit"
//             className="w-full py-3 px-4 bg-red-900 text-white rounded-lg font-medium hover:bg-red-800 transition-all duration-300 shadow-lg shadow-red-900/30 flex items-center justify-center gap-2 group"
//           >
//             {authState.isLoading ? (
//               <span>Loading...</span>
//             ) : (
//               <>
//                 <span>Create Account</span>
//                 <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
//               </>
//             )}
//           </button>
//           {authState.error && <p className="text-red-500 text-sm">{authState.error}</p>}
//         </form>
//       )}
//     </div>
//   );
// };

// const FormField = ({ id, label, type = 'text', placeholder, icon, showPassword, setShowPassword, value, onChange }) => {
//   return (
//     <div className="space-y-2">
//       <label htmlFor={id} className="block text-sm font-medium text-red-200/90">
//         {label}
//       </label>
//       <div className="relative">
//         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-red-300/60">
//           {icon}
//         </div>
//         <input
//           id={id}
//           type={type}
//           value={value}
//           onChange={onChange}
//           className="block w-full pl-10 pr-3 py-2.5 text-white bg-black/30 border border-red-900/30 rounded-lg focus:ring-2 focus:ring-red-900/50 focus:border-transparent placeholder-red-200/30 transition-all duration-300"
//           placeholder={placeholder}
//           required
//         />
//         {type === 'password' && (
//           <button
//             type="button"
//             onClick={() => setShowPassword?.(!showPassword)}
//             className="absolute inset-y-0 right-0 flex items-center pr-3 text-red-300/60 hover:text-red-300/90"
//           >
//             {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// const RoleSelection = ({ selectedRole, onRoleChange }) => {
//   return (
//     <div className="space-y-2">
//       <label className="block text-sm font-medium text-red-200/90">Account Type</label>
//       <div className="grid grid-cols-2 gap-4">
//         <label className="flex items-center p-3 bg-black/30 rounded-lg cursor-pointer hover:bg-red-950/30 transition-colors border border-red-900/30">
//           <input
//             type="radio"
//             name="role"
//             value="user"
//             checked={selectedRole === 'user'}
//             onChange={onRoleChange}
//             className="w-4 h-4 text-red-900 border-red-900/30 focus:ring-red-900/50"
//           />
//           <span className="ml-2 text-red-200">User</span>
//         </label>
//         <label className="flex items-center p-3 bg-black/30 rounded-lg cursor-pointer hover:bg-red-950/30 transition-colors border border-red-900/30">
//           <input
//             type="radio"
//             name="role"
//             value="expert"
//             checked={selectedRole === 'expert'}
//             onChange={onRoleChange}
//             className="w-4 h-4 text-red-900 border-red-900/30 focus:ring-red-900/50"
//           />
//           <span className="ml-2 text-red-200">Expert</span>
//         </label>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail, User, Phone, Heart } from 'lucide-react';
import { registerUser, loginUser } from '../../store/auth/authActions';

const AuthForm = ({ activeTab, showPassword, setShowPassword }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    role: 'user', // Default role
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: formData.email, password: formData.password }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData))
      .unwrap()
      .then((data) => {
        // Redirect to verify-otp page with userId
        navigate(`/verify-otp?userId=${data.userId}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRoleChange = (e) => {
    setFormData((prevData) => ({ ...prevData, role: e.target.value }));
  };

  return (
    <div className="space-y-6">
      {activeTab === 'login' ? (
        <form className="space-y-4" onSubmit={handleLogin}>
          <FormField
            id="email"
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            icon={<Mail className="w-5 h-5" />}
            value={formData.email}
            onChange={handleChange}
          />
          <FormField
            id="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            icon={<Lock className="w-5 h-5" />}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            value={formData.password}
            onChange={handleChange}
          />
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-red-200/70">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-red-900 bg-black/30 checked:bg-red-900 checked:border-red-900"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <button className="text-red-400 hover:text-red-300 transition-colors">
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-red-900 text-white rounded-lg font-medium hover:bg-red-800 transition-all duration-300 shadow-lg shadow-red-900/30 flex items-center justify-center gap-2 group"
          >
            {authState.isLoading ? (
              <span>Loading...</span>
            ) : (
              <>
                <span>Sign In</span>
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </>
            )}
          </button>
          {authState.error && <p className="text-red-500 text-sm">{authState.error}</p>}
        </form>
      ) : (
        <form className="space-y-4" onSubmit={handleRegister}>
          <FormField
            id="fullName"
            label="Full Name"
            placeholder="John Doe"
            icon={<User className="w-5 h-5" />}
            value={formData.fullName}
            onChange={handleChange}
          />
          <FormField
            id="email"
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            icon={<Mail className="w-5 h-5" />}
            value={formData.email}
            onChange={handleChange}
          />
          <FormField
            id="phoneNumber"
            label="Phone Number"
            type="tel"
            placeholder="+1234567890"
            icon={<Phone className="w-5 h-5" />}
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <FormField
            id="username"
            label="Username"
            placeholder="username"
            icon={<User className="w-5 h-5" />}
            value={formData.username}
            onChange={handleChange}
          />
          <FormField
            id="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            icon={<Lock className="w-5 h-5" />}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            value={formData.password}
            onChange={handleChange}
          />
          <RoleSelection selectedRole={formData.role} onRoleChange={handleRoleChange} />
          <button
            type="submit"
            className="w-full py-3 px-4 bg-red-900 text-white rounded-lg font-medium hover:bg-red-800 transition-all duration-300 shadow-lg shadow-red-900/30 flex items-center justify-center gap-2 group"
          >
            {authState.isLoading ? (
              <span>Loading...</span>
            ) : (
              <>
                <span>Create Account</span>
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </>
            )}
          </button>
          {authState.error && <p className="text-red-500 text-sm">{authState.error}</p>}
        </form>
      )}
    </div>
  );
};

const FormField = ({ id, label, type = 'text', placeholder, icon, showPassword, setShowPassword, value, onChange }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-red-200/90">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-red-300/60">
          {icon}
        </div>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className="block w-full pl-10 pr-3 py-2.5 text-white bg-black/30 border border-red-900/30 rounded-lg focus:ring-2 focus:ring-red-900/50 focus:border-transparent placeholder-red-200/30 transition-all duration-300"
          placeholder={placeholder}
          required
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword?.(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-red-300/60 hover:text-red-300/90"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
    </div>
  );
};

const RoleSelection = ({ selectedRole, onRoleChange }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-red-200/90">Account Type</label>
      <div className="grid grid-cols-2 gap-4">
        <label className="flex items-center p-3 bg-black/30 rounded-lg cursor-pointer hover:bg-red-950/30 transition-colors border border-red-900/30">
          <input
            type="radio"
            name="role"
            value="user"
            checked={selectedRole === 'user'}
            onChange={onRoleChange}
            className="w-4 h-4 text-red-900 border-red-900/30 focus:ring-red-900/50"
          />
          <span className="ml-2 text-red-200">User</span>
        </label>
        <label className="flex items-center p-3 bg-black/30 rounded-lg cursor-pointer hover:bg-red-950/30 transition-colors border border-red-900/30">
          <input
            type="radio"
            name="role"
            value="expert"
            checked={selectedRole === 'expert'}
            onChange={onRoleChange}
            className="w-4 h-4 text-red-900 border-red-900/30 focus:ring-red-900/50"
          />
          <span className="ml-2 text-red-200">Expert</span>
        </label>
      </div>
    </div>
  );
};

export default AuthForm;
