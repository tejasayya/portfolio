import { useState } from 'react';

interface FormData {
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const button = e.currentTarget.querySelector('button') as HTMLButtonElement;
    button.disabled = true;
    button.textContent = 'Sending...';
    try {
      // Call your backend API
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ email: '', message: '' });
      }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message. Please try again.');
    } finally {
        button.disabled = false;
        button.textContent = 'Send Message';
    }
  };

  return (
    <div className="bg-gray-900/50 p-8 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-gray-800 rounded-lg text-white"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Message"
            className="w-full p-3 bg-gray-800 rounded-lg text-white h-32"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}