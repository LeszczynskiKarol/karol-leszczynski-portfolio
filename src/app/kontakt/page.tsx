// src/app/kontakt/page.tsx
"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Navigation } from "@/components/layout/navigation";
import { motion } from "framer-motion";
import { Phone, Mail, Building, Send, User, MessageSquare } from "lucide-react";

emailjs.init("gjau8dneW58l9l3tz");

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send("service_hggmpni", "template_erjuq9n", formData);
      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });
      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  const contactInfo = [
    { icon: User, label: "Imię i nazwisko", value: "Karol Leszczyński" },
    {
      icon: Phone,
      label: "Telefon",
      value: "509 370 772",
      href: "tel:509370772",
    },
    {
      icon: Mail,
      label: "Email",
      value: "kontakt@karol-leszczynski.pl",
      href: "mailto:kontakt@karol-leszczynski.pl",
    },
    { icon: Building, label: "NIP", value: "9562203948" },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen py-20 px-4 pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Kontakt</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Masz projekt? Chętnie o nim porozmawiam!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Formularz kontaktowy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-muted/30 backdrop-blur rounded-2xl p-8 border border-primary/10">
                <h2 className="text-2xl font-bold mb-6">Napisz do mnie</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block mb-2 font-medium text-sm text-muted-foreground">
                      Imię i nazwisko
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        value={formData.from_name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            from_name: e.target.value,
                          })
                        }
                        required
                        className="w-full pl-12 pr-4 py-3 bg-background/50 border border-primary/20 rounded-xl focus:outline-none focus:border-primary transition-colors"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block mb-2 font-medium text-sm text-muted-foreground">
                      Adres email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        value={formData.from_email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            from_email: e.target.value,
                          })
                        }
                        required
                        className="w-full pl-12 pr-4 py-3 bg-background/50 border border-primary/20 rounded-xl focus:outline-none focus:border-primary transition-colors"
                        placeholder="jan@example.com"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block mb-2 font-medium text-sm text-muted-foreground">
                      Wiadomość
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        rows={6}
                        className="w-full pl-12 pr-4 py-3 bg-background/50 border border-primary/20 rounded-xl focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Opisz swój projekt..."
                      />
                    </div>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 disabled:opacity-50 transition-all duration-300 font-medium flex items-center justify-center gap-2 group"
                  >
                    {status === "sending" ? (
                      "Wysyłanie..."
                    ) : (
                      <>
                        Wyślij wiadomość
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>

                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 bg-green-500/10 border border-green-500/20 text-green-600 rounded-xl"
                    >
                      ✓ Wiadomość została wysłana! Odpowiem najszybciej jak to
                      możliwe.
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 rounded-xl"
                    >
                      ✗ Błąd wysyłania. Spróbuj ponownie.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Dane kontaktowe */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:pl-8"
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Dane kontaktowe</h2>
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start gap-4 p-4 bg-muted/20 rounded-xl border border-primary/10 hover:border-primary/20 transition-colors"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-lg font-medium hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-lg font-medium">{item.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
