import { useState } from 'react';

export default function StartupRegister() {
  const [formData, setFormData] = useState({
    name: '',
    founders: '',
    description: '',
    prototypeReady: '',
    revenueModel: '',
    fundingAmount: '',
    roadmap: '',
    unitEconomy: '',
    complianceDoc: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = new FormData();
    Object.keys(formData).forEach((key) => {
      body.append(key, formData[key]);
    });

    const res = await fetch('/api/startup-register', {
      method: 'POST',
      body,
    });

    if (res.ok) {
      alert('Startup registered successfully!');
    } else {
      alert('Error submitting form.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Startup Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Startup Name" onChange={handleChange} required className="w-full border p-2" />
        <input type="text" name="founders" placeholder="Founders" onChange={handleChange} required className="w-full border p-2" />
        <textarea name="description" placeholder="Startup Description" onChange={handleChange} required className="w-full border p-2" />
        <select name="prototypeReady" onChange={handleChange} required className="w-full border p-2">
          <option value="">Prototype Ready?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <select name="revenueModel" onChange={handleChange} required className="w-full border p-2">
          <option value="">Revenue Model</option>
          <option value="subscription">Subscription</option>
          <option value="freemium">Freemium</option>
          <option value="saas">SaaS</option>
          <option value="other">Other</option>
        </select>
        <input type="number" name="fundingAmount" placeholder="Expected Funding ($)" onChange={handleChange} required className="w-full border p-2" />
        <textarea name="roadmap" placeholder="Roadmap" onChange={handleChange} required className="w-full border p-2" />
        <textarea name="unitEconomy" placeholder="Unit Economy" onChange={handleChange} required className="w-full border p-2" />
        <input type="file" name="complianceDoc" onChange={handleChange} required className="w-full" />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
}
