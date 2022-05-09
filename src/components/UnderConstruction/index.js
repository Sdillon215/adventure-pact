import * as React from 'react';
import Swal from 'sweetalert2';
function Alert() {
    Swal.fire({
        title: 'Whoa Whoa! This area is still under construction!',
        text: "This project is still ongoing. If you've landed here from my portfolio I appreciate your interest! Stay tuned this project will be finished soon. In the meantime you can head back to my portfolio or back to the homepage to admire the beautiful UI &  flawless mobile responsiveness.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Portfolio',
        cancelButtonText: 'Home Page'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "https://seancodez.com";
        }
        if (result.isDismissed) {
            window.location.href = "/adventure-pact";
        }
      })
  return (
   <></>
  );
};

export default Alert;