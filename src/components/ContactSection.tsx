import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Download, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import handleDownload from "./constant";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(7, "Phone number must be at least 7 digits").max(20, "Phone number is too long").regex(/^[+]?[\d\s\-()]+$/, "Please enter a valid phone number"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const handleEmailClick = (e: React.MouseEvent) => {
  e.preventDefault();
  const email = "786zameer6@gmail.com";
  const mailtoLink = `mailto:${email}`;
  const link = document.createElement('a');
  link.href = mailtoLink;
  link.target = '_self';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/zameersidd", color: "hover:text-foreground" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/zameersidd", color: "hover:text-blue-500" },
  { name: "Email", icon: Mail, href: "mailto:786zameer6@gmail.com", color: "hover:text-primary" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://alsakb.netlify.app/.netlify/functions/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pass: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJTYWlmQEdNQUlMLkNPTSIsIm5hbWUiOiIgU2FpZiIsImlhdCI6MTY5MDc5NTU2MiwiZXhwIjoxNjkzMzg3NTYyfQ.4OGCShJobyMTEaSKXB1l7abOtWX0ANNH2O0aUSzJjN4",
          client: "PORTFOLIO",
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone,
          message: result.data.message,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology.
          </p>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left space-y-4 mb-10 p-6 bg-card border border-border rounded-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or idea..."
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Send className="w-4 h-4 mr-2" />
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>

          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={link.name === "Email" ? handleEmailClick : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 bg-card border border-border rounded-xl text-muted-foreground transition-colors ${link.color}`}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleEmailClick}>
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a  onClick={handleDownload}>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
