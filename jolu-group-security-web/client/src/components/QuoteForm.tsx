import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    county: '',
    area: '',
    service: '',
    message: '',
    guards: ''
  });

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/quote`, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Quote Request Sent!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          county: '',
          area: '',
          service: '',
          message: '',
          guards: ''
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send quote request. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const counties = [
    "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo",
    "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui",
    "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori",
    "Mombasa", "Murang’a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri",
    "Samburu", "Siaya", "Taita Taveta", "Tana River", "Tharaka Nithi", "Trans Nzoia", "Turkana",
    "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
  ];

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Full Name */}
      <div className="col-span-1">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
        />
      </div>

      {/* Email */}
      <div className="col-span-1">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
        />
      </div>

      {/* Phone */}
      <div className="col-span-1">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number *
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="+254 7XX XXX XXX"
        />
      </div>

      {/* Company Name */}
      <div className="col-span-1">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company Name
        </label>
        <Input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="Optional"
        />
      </div>

      {/* County */}
      <div className="col-span-1">
        <label htmlFor="county" className="block text-sm font-medium text-gray-700 mb-1">
          County *
        </label>
        <select
          id="county"
          name="county"
          required
          value={formData.county}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">Select a county</option>
          {counties.map((county) => (
            <option key={county} value={county}>{county}</option>
          ))}
        </select>
      </div>

      {/* Area/Town */}
      <div className="col-span-1">
        <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
          Area/Town *
        </label>
        <Input
          id="area"
          name="area"
          type="text"
          required
          value={formData.area}
          onChange={handleChange}
          placeholder="e.g. Thome, Syokimau, Moi Avenue"
        />
      </div>

      {/* Number of Guards */}
      <div className="col-span-1">
        <label htmlFor="guards" className="block text-sm font-medium text-gray-700 mb-1">
          Number of Guards
        </label>
        <Input
          id="guards"
          name="guards"
          type="number"
          min="1"
          value={formData.guards}
          onChange={handleChange}
          placeholder="Optional"
        />
      </div>

      {/* Service Needed */}
      <div className="col-span-1">
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">Select a service</option>
          <option value="manned-guarding">Manned Guarding</option>
          <option value="k9-unit-services">K9 Unit Services</option>
          <option value="event-security">Events Security</option>
          <option value="cctv-installation">CCTV Installation</option>
          <option value="alarm-response">Alarm Response</option>
          <option value="electric-fencing">Electric Fencing</option>
          <option value="vip-close-protection">VIP Close Protection</option>
        </select>
      </div>

      {/* Message */}
      <div className="col-span-1 md:col-span-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your security needs..."
        />
      </div>

      {/* Submit Button */}
      <div className="col-span-1 md:col-span-2">
        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
          Request Quote
        </Button>
      </div>
    </form>
  );
};
