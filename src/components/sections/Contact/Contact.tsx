import React, { useState } from 'react';
import { MapPin, Copy, Check, Send, Github, Linkedin, FileText } from 'lucide-react';
import { profileData } from '../../../data/profile';
import { useClipboard } from '../../../hooks/useClipboard';
import { Container } from '../../layout/Container';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';

export interface ContactProps {
  onShowToast: (msg: string) => void;
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast, onOpenResume }) => {
  const { copied: emailCopied, copy: copyEmail } = useClipboard();
  const { copied: phoneCopied, copy: copyPhone } = useClipboard();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    copyEmail(profileData.email);
    onShowToast('Email address copied to clipboard!');
  };

  const handleCopyPhone = () => {
    copyPhone(profileData.phone);
    onShowToast('Phone number copied to clipboard!');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    
    // Format mailto link fallback
    const mailto = `mailto:${profileData.email}?subject=${encodeURIComponent(formState.subject || 'Portfolio Inquiry from ' + formState.name)}&body=${encodeURIComponent(formState.message + '\n\nFrom: ' + formState.name + ' (' + formState.email + ')')}`;
    window.location.href = mailto;

    onShowToast('Preparing email client...');
  };

  return (
    <section id="contact" className="py-20 relative">
      <Container>
        <SectionHeading
          number="07"
          tag="GET IN TOUCH"
          title="Let's Connect & Collaborate"
          subtitle="Interested in discussing a software engineering opportunity, collaborating on a project, or reviewing technical architectures? Reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Resume Card */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                {/* Email Item with 1-click copy */}
                <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500 uppercase">Direct Email</span>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-500 text-xs flex items-center gap-1 font-mono transition-colors"
                      title="Copy Email"
                    >
                      {emailCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{emailCopied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="font-mono text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline block break-all"
                  >
                    {profileData.email}
                  </a>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500 uppercase">Phone</span>
                    <button
                      onClick={handleCopyPhone}
                      className="p-1.5 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-emerald-500 text-xs flex items-center gap-1 font-mono transition-colors"
                      title="Copy Phone"
                    >
                      {phoneCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{phoneCopied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <span className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-200 block">
                    {profileData.phone}
                  </span>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                  <div>
                    <span className="text-xs font-mono text-slate-500 uppercase block">Location</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {profileData.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Socials & Resume CTA */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onOpenResume}
                  icon={<FileText className="w-4 h-4" />}
                >
                  Inspect Resume
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  asAnchor
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Linkedin className="w-4 h-4 text-sky-500" />}
                >
                  LinkedIn
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  asAnchor
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Github className="w-4 h-4" />}
                >
                  GitHub
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Have an inquiry or project in mind? Fill out this form and it will prepare a pre-formatted message for me.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineering Role / React Project"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 uppercase">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    Direct reply to: {profileData.email}
                  </span>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Send Inquiry
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
