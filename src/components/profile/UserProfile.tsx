
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';

type Profile = Tables<'profiles'>;
type Skill = Tables<'skills'>;
type UserSkill = Tables<'user_skills'>;

export const UserProfile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [userSkills, setUserSkills] = useState<UserSkill[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  // Form states
  const [fullName, setFullName] = useState('');
  const [userType, setUserType] = useState('');
  const [selectedSkillId, setSelectedSkillId] = useState('');
  const [proficiencyLevel, setProficiencyLevel] = useState('');
  const [yearsExperience, setYearsExperience] = useState('');

  useEffect(() => {
    if (user) {
      loadProfileData();
    }
  }, [user]);

  const loadProfileData = async () => {
    try {
      // Load profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (profileError) throw profileError;
      
      setProfile(profileData);
      setFullName(profileData.full_name || '');
      setUserType(profileData.user_type || '');

      // Load all skills
      const { data: skillsData, error: skillsError } = await supabase
        .from('skills')
        .select('*')
        .order('name');

      if (skillsError) throw skillsError;
      setSkills(skillsData);

      // Load user skills
      const { data: userSkillsData, error: userSkillsError } = await supabase
        .from('user_skills')
        .select(`
          *,
          skills (
            id,
            name,
            category
          )
        `)
        .eq('user_id', user?.id);

      if (userSkillsError) throw userSkillsError;
      setUserSkills(userSkillsData);

    } catch (error: any) {
      toast({
        title: 'Error loading profile',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(true);

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: fullName,
          user_type: userType,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user?.id);

      if (error) throw error;

      toast({
        title: 'Profile updated',
        description: 'Your profile has been successfully updated.',
      });

      await loadProfileData();
    } catch (error: any) {
      toast({
        title: 'Error updating profile',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setUpdating(false);
    }
  };

  const addSkill = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedSkillId || !proficiencyLevel) {
      toast({
        title: 'Error',
        description: 'Please select a skill and proficiency level.',
        variant: 'destructive',
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('user_skills')
        .insert({
          user_id: user?.id,
          skill_id: parseInt(selectedSkillId),
          proficiency_level: parseInt(proficiencyLevel),
          years_experience: yearsExperience ? parseInt(yearsExperience) : null,
        });

      if (error) throw error;

      toast({
        title: 'Skill added',
        description: 'Your skill has been added to your profile.',
      });

      // Reset form
      setSelectedSkillId('');
      setProficiencyLevel('');
      setYearsExperience('');

      await loadProfileData();
    } catch (error: any) {
      toast({
        title: 'Error adding skill',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const removeSkill = async (userSkillId: number) => {
    try {
      const { error } = await supabase
        .from('user_skills')
        .delete()
        .eq('id', userSkillId);

      if (error) throw error;

      toast({
        title: 'Skill removed',
        description: 'The skill has been removed from your profile.',
      });

      await loadProfileData();
    } catch (error: any) {
      toast({
        title: 'Error removing skill',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <Badge variant="outline" className="text-sm">
          {profile?.user_type?.replace('_', ' ').toUpperCase()}
        </Badge>
      </div>

      {/* Profile Information */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your basic profile information</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={updateProfile} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={user?.email || ''} disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="userType">User Type</Label>
                <Select value={userType} onValueChange={setUserType}>
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
            </div>
            <Button type="submit" disabled={updating}>
              {updating ? 'Updating...' : 'Update Profile'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Skills Management */}
      <Card>
        <CardHeader>
          <CardTitle>Skills & Expertise</CardTitle>
          <CardDescription>Manage your skills and proficiency levels</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Add Skill Form */}
          <form onSubmit={addSkill} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="skill">Skill</Label>
                <Select value={selectedSkillId} onValueChange={setSelectedSkillId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select skill" />
                  </SelectTrigger>
                  <SelectContent>
                    {skills
                      .filter(skill => !userSkills.some(us => us.skill_id === skill.id))
                      .map((skill) => (
                      <SelectItem key={skill.id} value={skill.id.toString()}>
                        {skill.name} ({skill.category})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="proficiency">Proficiency</Label>
                <Select value={proficiencyLevel} onValueChange={setProficiencyLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 - Beginner</SelectItem>
                    <SelectItem value="2">2 - Novice</SelectItem>
                    <SelectItem value="3">3 - Intermediate</SelectItem>
                    <SelectItem value="4">4 - Advanced</SelectItem>
                    <SelectItem value="5">5 - Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Years Experience</Label>
                <Input
                  id="experience"
                  type="number"
                  min="0"
                  max="50"
                  value={yearsExperience}
                  onChange={(e) => setYearsExperience(e.target.value)}
                  placeholder="Years"
                />
              </div>
              <div className="flex items-end">
                <Button type="submit" className="w-full">
                  Add Skill
                </Button>
              </div>
            </div>
          </form>

          {/* Current Skills */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Current Skills</h3>
            {userSkills.length === 0 ? (
              <p className="text-gray-500">No skills added yet. Add your first skill above.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {userSkills.map((userSkill) => (
                  <div key={userSkill.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{userSkill.skills?.name}</div>
                      <div className="text-sm text-gray-600">
                        Level {userSkill.proficiency_level}/5
                        {userSkill.years_experience && ` • ${userSkill.years_experience} years`}
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeSkill(userSkill.id)}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
