// src/components/scheduling-widget.tsx
'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from '@/hooks/use-toast';
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";

// Define the schema for the scheduling form
const schedulingSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }).optional().or(z.literal('')),
  address: z.string().min(5, { message: 'Please enter your service address.' }),
  serviceType: z.string().min(1, { message: 'Please select the type of service needed.' }),
  preferredDate: z.date({
    required_error: "A preferred date is required.",
  }),
  preferredTime: z.string().min(1, { message: 'Please select a preferred time slot.' }),
  description: z.string().min(10, { message: 'Please briefly describe the issue (at least 10 characters).' }).max(500, { message: 'Description cannot exceed 500 characters.' }),
});

type SchedulingFormValues = z.infer<typeof schedulingSchema>;

// Mock server action for scheduling submission
async function submitSchedulingRequest(data: SchedulingFormValues): Promise<{ success: boolean; message: string }> {
  console.log('Submitting scheduling request:', data);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulate success/failure
  const success = Math.random() > 0.1; // 90% chance of success
  if (success) {
      return { success: true, message: 'Appointment request received! We will contact you shortly to confirm.' };
  } else {
      return { success: false, message: 'Failed to submit request. Please try again or call us directly.' };
  }
}

export default function SchedulingWidget() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<SchedulingFormValues>({
    resolver: zodResolver(schedulingSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      address: '',
      serviceType: '',
      preferredDate: undefined,
      preferredTime: '',
      description: '',
    },
  });

   function onSubmit(values: SchedulingFormValues) {
     startTransition(async () => {
        try {
            // Format date before sending if necessary for backend
            const submissionData = {
                ...values,
                preferredDate: format(values.preferredDate, "yyyy-MM-dd"), // Example format
            };
            const result = await submitSchedulingRequest(submissionData as any); // Adjust type if needed after formatting

             if (result.success) {
                toast({
                  title: "Request Sent!",
                  description: result.message,
                });
                form.reset(); // Reset form on success
             } else {
                 toast({
                   variant: "destructive",
                   title: "Submission Failed",
                   description: result.message,
                 });
             }
        } catch (error) {
            console.error("Scheduling submission error:", error);
            toast({
               variant: "destructive",
               title: "An Error Occurred",
               description: "Something went wrong. Please try again.",
            });
        }
     });
  }

  // Example time slots - adjust as needed
  const timeSlots = [
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM (Mon-Fri Only)", // Example restriction
  ];

  return (
    <div className="p-4 border rounded-lg bg-background shadow-sm">
       {/* Explanation: Replace this div with actual widget code or embed */}
       {/* <div className="text-center p-10 bg-gray-100 rounded border-dashed border-2 border-gray-300">
          <p className="text-muted-foreground">[ Scheduling Widget Placeholder ]</p>
          <p className="text-xs mt-2">Implement or embed your scheduling tool here (e.g., Calendly, Acuity Scheduling, custom form).</p>
       </div> */}

        {/* Example Custom Form Implementation */}
       <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Your Phone Number" {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
             <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Your Email (Optional)" {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Full Address Where Service is Needed" {...field} disabled={isPending} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Service Needed</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isPending}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Plumbing Repair">Plumbing Repair</SelectItem>
                        <SelectItem value="Heating Repair">Heating Repair</SelectItem>
                        <SelectItem value="Boiler Service/Maintenance">Boiler Service/Maintenance</SelectItem>
                        <SelectItem value="New Installation Quote">New Installation Quote</SelectItem>
                        <SelectItem value="Drain Cleaning">Drain Cleaning</SelectItem>
                        <SelectItem value="Leak Detection">Leak Detection</SelectItem>
                        <SelectItem value="Water Heater Issue">Water Heater Issue</SelectItem>
                        <SelectItem value="Fixture Installation">Fixture Installation</SelectItem>
                         <SelectItem value="Fire Sprinkler Inquiry">Fire Sprinkler Inquiry</SelectItem>
                        <SelectItem value="Other">Other (Please describe below)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="preferredDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Preferred Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                            disabled={isPending}
                          >
                            {field.value ? (
                              format(field.value, "PPP") // Format like "Mar 15, 2024"
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                           disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0)) || date.getDay() === 0 || date.getDay() === 6 } // Disable past dates, weekends
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="preferredTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Time Slot</FormLabel>
                     <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isPending || !form.watch('preferredDate')}>
                       <FormControl>
                         <SelectTrigger disabled={!form.watch('preferredDate')}>
                           <SelectValue placeholder={form.watch('preferredDate') ? "Select time..." : "Pick date first"} />
                         </SelectTrigger>
                       </FormControl>
                       <SelectContent>
                         {timeSlots.map(slot => (
                           <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                         ))}
                       </SelectContent>
                     </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brief Description of Issue</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Please describe the problem or service needed..." {...field} disabled={isPending} rows={4} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

             <Button type="submit" className="w-full cta-button" disabled={isPending}>
               {isPending ? (
                 <>
                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                   Submitting Request...
                 </>
               ) : (
                  'Request Appointment'
               )}
            </Button>
         </form>
       </Form>
    </div>
  );
}
