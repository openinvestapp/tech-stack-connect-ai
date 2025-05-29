
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

export const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [userType, setUserType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const { signUp, signIn, resetPassword } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (showResetPassword) {
        await resetPassword(email);
        toast({
          title: 'Password reset email sent',
          description: 'Check your email for password reset instructions.',
        });
        setShowResetPassword(false);
      } else if (isSignUp) {
        if (!userType) {
          toast({
            title: 'Error',
            description: 'Please select your user type.',
            variant: 'destructive',
          });
          return;
        }
        await signUp(email, password, fullName, userType);
        toast({
          title: 'Account created successfully',
          description: 'Please check your email to verify your account.',
        });
      } else {
        await signIn(email, password);
        toast({
          title: 'Welcome back!',
          description: 'You have successfully signed in.',
        });
      }
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'An error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setFullName('');
    setUserType('');
    setShowResetPassword(false);
  };

  const switchMode = () => {
    setIsSignUp(!isSignUp);
    resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="font-bold text-xl text-gray-900">JITTS</span>
          </div>
          <CardTitle className="text-2xl text-center">
            {showResetPassword ? 'Reset Password' : isSignUp ? 'Create Account' : 'Welcome Back'}
          </CardTitle>
          <CardDescription className="text-center">
            {showResetPassword 
              ? 'Enter your email to receive reset instructions'
              : isSignUp 
                ? 'Join the AI-powered talent ecosystem' 
                : 'Sign in to your account'
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {!showResetPassword && (
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            )}

            {isSignUp && !showResetPassword && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="userType">I am a...</Label>
                  <Select value={userType} onValueChange={setUserType} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="job_seeker">Job Seeker</SelectItem>
                      <SelectItem value="employer">Employer</SelectItem>
                      <SelectItem value="skill_coach">Skill Coach</SelectItem>
                      <SelectItem value="certifier">Certification Provider</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Please wait...' : 
                showResetPassword ? 'Send Reset Email' :
                isSignUp ? 'Create Account' : 'Sign In'
              }
            </Button>

            {!showResetPassword && (
              <div className="text-center space-y-2">
                <Button
                  type="button"
                  variant="link"
                  onClick={() => setShowResetPassword(true)}
                  className="text-sm"
                >
                  Forgot your password?
                </Button>
                <div>
                  <Button
                    type="button"
                    variant="link"
                    onClick={switchMode}
                    className="text-sm"
                  >
                    {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                  </Button>
                </div>
              </div>
            )}

            {showResetPassword && (
              <Button
                type="button"
                variant="link"
                onClick={() => setShowResetPassword(false)}
                className="w-full text-sm"
              >
                Back to sign in
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
