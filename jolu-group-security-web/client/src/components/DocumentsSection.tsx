import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import { motion } from "framer-motion";

export const DocumentsSection = () => {
const documents = [
  {
    title: "Company Profile",
    file: "/Jolu-Security-Website/lovable-uploads/company-profile.pdf", // ✅ correct
  },
  {
    title: "Security Brochure",
    file: "/Jolu-Security-Website/lovable-uploads/brochure.pdf",
  },
];

  return (
    <motion.section
      id="documents"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                Jolu Security Company Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {documents.map((doc, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col justify-between border p-4 rounded-md bg-white shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="font-medium text-gray-800 mb-4">{doc.title}</span>
                    <div className="flex gap-4 mt-auto">
                      <a href={doc.file} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="flex gap-2">
                          <Eye className="w-4 h-4" /> View
                        </Button>
                      </a>
                      <a href={doc.file} download>
                        <Button className="flex gap-2 bg-red-600 text-white hover:bg-red-700">
                          <Download className="w-4 h-4" /> Download
                        </Button>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};
