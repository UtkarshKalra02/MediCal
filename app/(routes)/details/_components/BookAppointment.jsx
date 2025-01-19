import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, Clock } from 'lucide-react';
import { useKindeAuth, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from 'sonner';

function BookAppointment({doctor}) {
    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState([]);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const isPastDay = (day) => {
        return day <= new Date();
    }
    const {user} = useKindeBrowserClient();

    useEffect(() => {
        getTime();
    }, []);

    const saveBooking = () => {
        const data = {
            data:{
                UserName: user.given_name+" "+user.family_name,
                Email: user.email,
                Time: selectedTimeSlot,
                Date: date,
                doctor: doctor.documentId
            }
        }
        GlobalApi.BookAppointment(data).then(res=>{
            console.log(res);
            if(res){
                GlobalApi.sendEmail(data).then(res=>{
                    console.log(res);
                })
                toast("Booking Confirmation sent on Mail")
            }
        })
    }

    const getTime = () => {
        const timeList = [];

        // Morning Slots
        for (let i = 10; i < 12; i++) {
            timeList.push({ time: i + ":00 AM" });
            timeList.push({ time: i + ":30 AM" });
        }

        // Afternoon Slots
        for (let i = 1; i <= 6; i++) {
            timeList.push({ time: i + ":00 PM" });
            timeList.push({ time: i + ":30 PM" });
        }

        setTimeSlot(timeList);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="mt-5">
                    <Button className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                        Book Appointment
                    </Button>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-lg font-bold text-gray-800">Book Appointment</DialogTitle>
                    <DialogDescription asChild>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                            {/* Calendar Section */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <CalendarDays className="text-blue-500 h-5 w-5" />
                                    <span className="font-medium text-gray-800">Select Date</span>
                                </div>
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border shadow-sm"
                                    disabled={isPastDay}
                                />
                            </div>

                            {/* Time Slot Section */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <Clock className="text-blue-500 h-5 w-5" />
                                    <span className="font-medium text-gray-800">Select Time Slot</span>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    {timeSlot?.map((item, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedTimeSlot(item.time)}
                                            className={`p-3 border rounded-full text-center text-sm font-medium cursor-pointer transition-all
                                            ${item.time === selectedTimeSlot
                                                    ? "bg-blue-600 text-white"
                                                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
                                        >
                                            {item.time}
                                        </div>
                                    ))}
                                </div>
                                {selectedTimeSlot && (
                                    <div className="text-sm text-gray-600">
                                        Selected Time:{" "}
                                        <span className="font-medium text-gray-800">
                                            {selectedTimeSlot}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-end">
                    <DialogClose asChild>
                        <div>
                            <Button type="button"
                            className="text-red-500 border-red-500 mr-5" variant="outline">
                                Close
                            </Button>
                            <Button type="button" disabled={!(date&&selectedTimeSlot)} 
                            onClick={()=>saveBooking()}>
                                Submit
                            </Button>
                        </div>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default BookAppointment;