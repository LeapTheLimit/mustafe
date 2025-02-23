import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/lib/LanguageContext";

interface BookingFormProps {
  tripName: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingForm({ tripName, isOpen, onClose }: BookingFormProps) {
  const { toast } = useToast();
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    notes: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      nationality: formData.nationality,
      trip_name: tripName,
      notes: formData.notes,
      reply_to: formData.email
    };

    try {
      await emailjs.send(
        'service_6zfqwf9',
        'template_g3sfd92',
        templateParams,
        'syLBb7Gj7uQwbqGkq'
      );

      toast({
        title: language === 'en' ? "Booking Request Sent!" : "تم إرسال طلب الحجز!",
        description: language === 'en' 
          ? "We'll get back to you soon with confirmation details."
          : "سنعود إليك قريباً مع تفاصيل التأكيد.",
      });

      // Reset form and close dialog
      setFormData({
        name: '',
        email: '',
        phone: '',
        nationality: '',
        notes: ''
      });
      onClose();
    } catch (error) {
      toast({
        title: language === 'en' ? "Error" : "خطأ",
        description: language === 'en' 
          ? "Failed to send booking request. Please try again."
          : "فشل في إرسال طلب الحجز. يرجى المحاولة مرة أخرى.",
        variant: "destructive"
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-slate-900 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {language === 'en' ? 'Book Your Trip' : 'احجز رحلتك'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input
            type="text"
            placeholder={language === 'en' ? "Your Name" : "اسمك"}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-white text-black"
          />
          <Input
            type="email"
            placeholder={language === 'en' ? "Email Address" : "البريد الإلكتروني"}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-white text-black"
          />
          <Input
            type="tel"
            placeholder={language === 'en' ? "Phone Number" : "رقم الهاتف"}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="bg-white text-black"
          />
          <Input
            type="text"
            placeholder={language === 'en' ? "Nationality" : "الجنسية"}
            value={formData.nationality}
            onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
            required
            className="bg-white text-black"
          />
          <Textarea
            placeholder={language === 'en' ? "Additional Notes" : "ملاحظات إضافية"}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="bg-white text-black"
          />
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            {language === 'en' ? 'Submit Booking Request' : 'إرسال طلب الحجز'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}