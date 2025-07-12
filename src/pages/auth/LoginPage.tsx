import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useAppDispatch } from '@/store/hook';
import { useLoginMutation } from '@/store/api/authApiSlice';
import { setCredentials } from '@/store/slices/authSlice';
import AuthLayout from '@/components/layouts/AuthLayout';
import { Input } from '@/components/ui/input';

const loginFormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginFormSchema),
    reValidateMode: 'onSubmit',
  });

  const handleLogin = async (values: z.infer<typeof loginFormSchema>) => {
    try {
      const data = await login(values).unwrap();
      console.log(data);

      dispatch(setCredentials({ token: data.data.token }));
      return;
      navigate('/welcome');
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <AuthLayout
      title="Create an account"
      description="Create your account. It takes less than a minute."
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="mb-6 grid w-full items-center gap-2 text-sm lg:text-[16px]"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="Password"
                      {...field}
                      type={showPassword ? 'text' : 'password'}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-3 text-slate-400"
                    >
                      {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-12 w-full rounded-xl hover:bg-remi-red">
            Log in
          </Button>
        </form>
      </Form>
      <p className="mb-5 text-center">
        Already have an account?{' '}
        <Link to="/register" className="text-remi-red">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
