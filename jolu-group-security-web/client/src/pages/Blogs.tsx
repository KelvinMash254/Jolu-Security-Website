import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Blogs = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Blogs & Insights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with industry trends, safety tips, and security news curated by our experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src="/lovable-uploads/Secure Home.jpg"
                    alt="Blog post"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Top 5 Ways to Secure Your Home</CardTitle>
                <CardDescription className="text-gray-600 mt-2">Published on July 17, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Discover practical tips and proven techniques to improve the security of your home and loved ones.
                </p>
              </CardContent>
            </Card>

            {/* Blog Post 2 */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src="/lovable-uploads/Event Security - what to consider.jpg"
                    alt="Blog post"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Event Security: What to Consider</CardTitle>
                <CardDescription className="text-gray-600 mt-2">Published on July 10, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Planning an event? Here’s a checklist for ensuring the safety and success of your public or private gathering.
                </p>
              </CardContent>
            </Card>

            {/* Blog Post 3 */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">
                  <img
                    src="/lovable-uploads/CCTV image.jpg"
                    alt="Blog post"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">Why Every Business Needs a CCTV System</CardTitle>
                <CardDescription className="text-gray-600 mt-2">Published on June 25, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Explore the benefits of CCTV monitoring for commercial spaces, from theft prevention to operational oversight.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
