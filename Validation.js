import { useFormik } from 'formik';
const validate =(values)=>{
    const errors ={};
    if(!values.firstName || values.firstName.length < 16){
        errors.firstName = "Invalid Name ";
      }
      
      if(!values.lasstName){
        errors.lasstName = "Invalid Last Name ";
      }

      if (!values.email) {
        errors.email = ' email needed';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address';
      }
      if(!values.password){
        errors.password = "Invalid  password ";
      }
    
}
export default function Validation(){








        const formik = useFormik({
            initialValues: {
              firstName: '',
              lastName: '',
              email: '',
            },
            validate : validate,
            onSubmit: values => {
              console.log(values)
            },
          });
    return(
      <form onSubmit={formik.handleSubmit}>
          

        <div className='formvalidation'>
            <input
                className='input1'
                type="text"
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                placeholder="First Name"

            />
            {
                formik.errors.firstName && <div style={{color :"red"}}>  {formik.errors.firstName}</div>
            }



              <input
                className='input2'
                type="text"
                id="lastName"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                placeholder="last Name"

            />
            {
                formik.errors.lastName && <div style={{color :"red"}}>  {formik.errors.lastName}</div>
            }




                <input
                className='input3'
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.emailName}
                placeholder="email"

            />
            {
                formik.errors.emailName && <div style={{color :"red"}}>  {formik.errors.emailName}</div>
            }
        


        <input
                className='input4'
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="password"

            />
            {
                formik.errors.password && <div style={{color :"red"}}>  {formik.errors.password}</div>
            }

            <div className='btn'>
              <button>submit</button>
            </div>






        </div>
        </form>
    )
      
}