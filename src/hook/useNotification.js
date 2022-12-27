import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// to make Notification from any Components
const notify = (msg,type) =>{
    if(type==='success'){
      toast.success(msg,type);
    }
    if(type==='warnin'){
      toast.warn(msg,type);
    }
    if(type==='error'){
      toast.error(msg,type);
    }

  } 


  export default notify;