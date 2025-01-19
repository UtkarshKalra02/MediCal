import { default as axios } from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }
})

const getCategory = () => axiosClient.get('/categories?populate=*');

const getDoctorList = () => axiosClient.get('/doctors?populate=*');

const getDoctorbyId = (id) => axiosClient.get('/doctors/' + id + '?populate=*');

const getDoctorbyCategory = (category) => axiosClient.get('/doctors?filters[categories][Name][$in]=' + category + '&populate=*');

const BookAppointment = (data) => axiosClient.post('/appointments', data);
const sendEmail = (data) => axios.post('/api/sendEmail', data);

const getUserBookingList = (userEmail) => axiosClient.get(`/appointments?filters[Email][$eq]=${userEmail}&populate[doctor][populate]=Images`);
//const getUserBookingList = (userEmail) => axiosClient.get("/appointments?filters[Email][$eq]="+userEmail+"&populate=*");

const deleteBooking = (id) => axiosClient.delete(`/appointments/${id}`);

export default {
    getCategory,
    getDoctorList,
    getDoctorbyCategory,
    getDoctorbyId,
    BookAppointment,
    sendEmail,
    getUserBookingList,
    deleteBooking
}
