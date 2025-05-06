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
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }).optional().or(z.literal('')),
  jobType: z.string().min(1, { message: 'Please select a job type.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof formSchema>;

// Mock server action - replace with your actual API call or server action
async function submitContactForm(data: ContactFormValues): Promise<{ success: boolean; message: string }> {
  console.log('Submitting contact form data:', data);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulate success/failure
  const success = Math.random() > 0.2; // 80% chance of success
  if (success) {
      return { success: true, message: 'Thank you for your message! We will contact you shortly.' };
  } else {
      return { success: false, message: 'Failed to send message. Please try again later or call us.' };
  }
}


export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      jobType: '',
      message: '',
    },
  });

  function onSubmit(values: ContactFormValues) {
     startTransition(async () => {
        try {
            const result = await submitContactForm(values);
             if (result.success) {
                toast({
                  title: "Message Sent!",
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
            console.error("Form submission error:", error);
            toast({
               variant: "destructive",
               title: "An Error Occurred",
               description: "Something went wrong. Please try again.",
            });
        }
     });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
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
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email (Optional)</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your Email Address" {...field} disabled={isPending} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
            control={form.control}
            name="jobType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isPending}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the type of service needed" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Plumbing Repair">Plumbing Repair</SelectItem>
                    <SelectItem value="Heating Repair">Heating Repair</SelectItem>
                    <SelectItem value="Boiler Service">Boiler Service</SelectItem>
                    <SelectItem value="Installation Quote">Installation Quote</SelectItem>
                    <SelectItem value="Drain Cleaning">Drain Cleaning</SelectItem>
                    <SelectItem value="Leak Detection">Leak Detection</SelectItem>
                    <SelectItem value="Fire Sprinkler Service">Fire Sprinkler Service</SelectItem>
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Briefly describe your issue or request" {...field} disabled={isPending} rows={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full cta-button" disabled={isPending}>
           {isPending ? (
             <>
               <Loader2 className="mr-2 h-4 w-4 animate-spin" />
               Sending...
             </>
           ) : (
              'Submit Request'
           )}
        </Button>
      </form>
    </Form>
  );
}
