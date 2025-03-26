"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, FacebookIcon, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().optional(),
    message: z.string().min(5, {
        message: "Message must be at least 5 characters.",
    }),
})

export default function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const subject = encodeURIComponent('New Contact Form Submission');
        const body = encodeURIComponent(
            `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nMessage: ${values.message}`
        );
        const mailtoLink = `mailto:ani@cellsciencebiotech.com/?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="w-full md:w-2/3 mb-8 md:mb-0">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-1">Get in touch with us.</h2>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">We&apos;re here to assist you.</h2>
                </div>

                <div className="flex flex-row md:flex-col gap-4">
                    <Link href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors">
                        <FacebookIcon size={12} className="sm:w-[15px] sm:h-[15px]" />
                    </Link>
                    <Link href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors">
                        <Instagram size={12} className="sm:w-[15px] sm:h-[15px]" />
                    </Link>
                    <Link href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors">
                        <Twitter size={12} className="sm:w-[15px] sm:h-[15px]" />
                    </Link>
                </div>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 sm:mt-10 lg:mt-12 space-y-6 sm:space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                placeholder="Your Name"
                                                {...field}
                                                className={`border-t-0 border-b-0 text-base sm:text-lg lg:text-xl border-x-0 rounded-none focus-visible:ring-0 px-0 py-2.5 h-auto ${fieldState.error ? 'border-b-2 border-b-red-500' : 'border-b border-b-gray-200'}`}
                                            />
                                            {fieldState.error && (
                                                <p className="text-sm text-red-500 mt-1">{fieldState.error.message}</p>
                                            )}
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                placeholder="Email Address"
                                                type="email"
                                                {...field}
                                                className={`border-t-0 border-b-0 text-base sm:text-lg lg:text-xl border-x-0 rounded-none focus-visible:ring-0 px-0 py-2.5 h-auto ${fieldState.error ? 'border-b-2 border-b-red-500' : 'border-b border-b-gray-200'}`}
                                            />
                                            {fieldState.error && (
                                                <p className="text-sm text-red-500 mt-1">{fieldState.error.message}</p>
                                            )}
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field, fieldState }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                placeholder="Phone Number (optional)"
                                                type="tel"
                                                {...field}
                                                className={`border-t-0 border-b-0 text-base sm:text-lg lg:text-xl border-x-0 rounded-none focus-visible:ring-0 px-0 py-2.5 h-auto ${fieldState.error ? 'border-b-2 border-b-red-500' : 'border-b border-b-gray-200'}`}
                                            />
                                            {fieldState.error && (
                                                <p className="text-sm text-red-500 mt-1">{fieldState.error.message}</p>
                                            )}
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="relative">
                                        <Textarea
                                            placeholder="Message"
                                            {...field}
                                            className={`border-t-0 border-b-0 text-base sm:text-lg lg:text-xl border-x-0 rounded-none focus-visible:ring-0 px-0 py-2.5 resize-none min-h-32 sm:min-h-40 ${fieldState.error ? 'border-b-2 border-b-red-500' : ''}`}
                                        />
                                        {fieldState.error && (
                                            <p className="text-sm text-red-500 mt-1">{fieldState.error.message}</p>
                                        )}
                                    </div>
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <div className="flex justify-end">
                        <Button type="submit" className="w-full sm:w-auto bg-black text-white hover:bg-black rounded-none px-4 sm:px-6 py-3">
                            <span className="text-xs sm:text-sm font-regular tracking-wider">LEAVE US A MESSAGE</span>
                            <span className="ml-2"><ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" /></span>
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

