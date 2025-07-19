import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface AppointmentForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

interface AppointmentBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppointmentBooking({ isOpen, onClose }: AppointmentBookingProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState<AppointmentForm>({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const services = [
    "Automation & AI",
    "Cybersecurity",
    "Data Analytics",
    "UI/UX Design",
    "Software Engineering",
    "Branding & Merch",
    "Social Media",
    "Consultation",
  ];

  const timeSlots: TimeSlot[] = [
    { time: "09:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: true },
    { time: "12:00 PM", available: false },
    { time: "01:00 PM", available: true },
    { time: "02:00 PM", available: true },
    { time: "03:00 PM", available: true },
    { time: "04:00 PM", available: true },
    { time: "05:00 PM", available: false },
  ];

  const handleInputChange = (field: keyof AppointmentForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    handleInputChange("date", date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    handleInputChange("time", time);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate booking submission
    console.log("Booking submitted:", formData);
    
    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    setCurrentStep(4);
  };

  const generateCalendarDays = () => {
    const today = new Date();
    const days = [];
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    
    return days;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const formatDateForInput = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const isDateAvailable = (date: Date) => {
    const day = date.getDay();
    // Available Monday to Friday
    return day >= 1 && day <= 5;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-6 w-6" />
                <span>Book an Appointment</span>
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-6">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      currentStep >= step
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {currentStep > step ? <CheckCircle className="h-4 w-4" /> : step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`w-12 h-1 mx-2 ${
                        currentStep > step ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Select a Service</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <Button
                          key={service}
                          variant={formData.service === service ? "default" : "outline"}
                          className={`justify-start ${
                            formData.service === service
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                              : ""
                          }`}
                          onClick={() => handleInputChange("service", service)}
                        >
                          <MessageSquare className="h-4 w-4 mr-2" />
                          {service}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      onClick={() => setCurrentStep(2)}
                      disabled={!formData.service}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Select Date & Time</h3>
                    
                    {/* Calendar */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Available Dates</h4>
                      <div className="grid grid-cols-7 gap-2">
                        {generateCalendarDays().map((date) => (
                          <Button
                            key={date.toISOString()}
                            variant={
                              selectedDate === formatDateForInput(date) ? "default" : "outline"
                            }
                            size="sm"
                            disabled={!isDateAvailable(date)}
                            className={`${
                              selectedDate === formatDateForInput(date)
                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                : ""
                            } ${!isDateAvailable(date) ? "opacity-50" : ""}`}
                            onClick={() => handleDateSelect(formatDateForInput(date))}
                          >
                            {formatDate(date)}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Time Slots */}
                    {selectedDate && (
                      <div>
                        <h4 className="font-medium mb-3">Available Times</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((slot) => (
                            <Button
                              key={slot.time}
                              variant={
                                selectedTime === slot.time ? "default" : "outline"
                              }
                              size="sm"
                              disabled={!slot.available}
                              className={`${
                                selectedTime === slot.time
                                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                  : ""
                              } ${!slot.available ? "opacity-50" : ""}`}
                              onClick={() => handleTimeSelect(slot.time)}
                            >
                              <Clock className="h-4 w-4 mr-1" />
                              {slot.time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep(1)}
                    >
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Back
                    </Button>
                    <Button
                      onClick={() => setCurrentStep(3)}
                      disabled={!selectedDate || !selectedTime}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Your Information</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Additional Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell us about your project or any specific requirements..."
                          rows={4}
                        />
                      </div>
                    </form>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep(2)}
                    >
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={!formData.name || !formData.email}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Book Appointment
                    </Button>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-2">
                      Appointment Booked Successfully!
                    </h3>
                    <p className="text-gray-600">
                      We've sent a confirmation email to {formData.email}. 
                      Our team will contact you shortly to confirm the details.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg text-left">
                    <h4 className="font-medium mb-2">Appointment Details:</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p><strong>Service:</strong> {formData.service}</p>
                      <p><strong>Date:</strong> {new Date(formData.date).toLocaleDateString()}</p>
                      <p><strong>Time:</strong> {formData.time}</p>
                      <p><strong>Name:</strong> {formData.name}</p>
                    </div>
                  </div>

                  <Button
                    onClick={onClose}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Close
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 