import { TextField } from "@mui/material";


const Contact = () => {
    
    
  return (
    <section id="contact" >
      <div className="container mx-auto flex flex-col  text-center md:text-left mt-32 md:flex-row ">
        <div className="space-y-5 md:w-1/2 ">
          <h3 className="font-bold text-4xl">Contact</h3>
          <p className=" md:w-64 text-darkGrayishBlue text-justify">
            Need to get in touch with us? Either fill out the form with your
            inquiry or find the department email you would like to 
            contact below.
          </p>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 ">
          <form className="flex flex-col justify-center space-y-8">
            <TextField  label="Name" variant="outlined" />
            <TextField
              label="Email"
              className=""
              type="email"
              variant="outlined"
            />
            <TextField
              multiline
              rows={5} // Set the number of rows as needed
              label="Message"
              variant="outlined"
              fullWidth
            />

            <a
                href="#"
                className=" mx-auto  px-7 p-2 text-white bg-brightRed rounded-full  hover:bg-brightRedLight"
             >
            Submit
          </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
