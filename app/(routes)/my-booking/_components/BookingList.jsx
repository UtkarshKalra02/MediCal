import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import CancelAppointment from './CancelAppointment';
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from 'sonner';

const BookingList = ({ bookingList, expired, updateRecord }) => {
  const onDeleteBooking = (item) => {
    console.log(item);
    GlobalApi.deleteBooking(item.documentId).then(res=>{
      console.log(res);
      if(res){
        toast('Appointment Deleted Successfully');
        updateRecord()
      }
    })
  }
  return (
    <div className="p-4">
      {bookingList.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-6 items-start md:items-center border rounded-lg shadow-lg p-6 mb-6 bg-gray-50 hover:shadow-xl transition-shadow"
        >
          <Image
            src={item.doctor.Images[0].url}
            width={80}
            height={80}
            className="rounded-full object-cover h-[80px] w-[80px] border-2 border-blue-500"
            alt="Doctor"
          />
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-[20px] text-gray-800">{item.doctor.Name}</h2>
              {!expired && (
                <CancelAppointment onContinueClick={()=>onDeleteBooking(item)}/>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="flex items-center gap-2 text-gray-600">
                <MapPin className="text-blue-500" /> {item.doctor.Address}
              </h3>
              <h3 className="flex items-center gap-2 text-gray-600">
                <Calendar className="text-blue-500" /> Appointment On: {moment(item.Date).format('DD-MM-YYYY')}
              </h3>
              <h3 className="flex items-center gap-2 text-gray-600">
                <Clock className="text-blue-500" /> At Time: {item.Time}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingList;