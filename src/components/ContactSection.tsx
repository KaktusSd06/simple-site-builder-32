import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Дякуємо за повідомлення!",
      description: "Ми зв'яжемось з вами найближчим часом 🌱",
    });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Зв'яжіться з нами</h2>
          <p className="text-muted-foreground">Замовте мікрозелень або задайте питання</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Ваше ім'я</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Введіть ваше ім'я"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Телефон</label>
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+380..."
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Повідомлення</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Що б ви хотіли замовити?"
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">Надіслати 🌱</Button>
              </form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-medium text-foreground">Адреса</p>
                <p className="text-sm text-muted-foreground">м. Хмельницький, Україна</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-medium text-foreground">Телефон</p>
                <p className="text-sm text-muted-foreground">+380 XX XXX XX XX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">microgreens@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
