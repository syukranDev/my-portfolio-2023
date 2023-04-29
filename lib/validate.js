export default function contactFormValidation(values){
    const errors = {}

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address!';
    }

    if(!values.message) {
        errors.message = 'Required'
    } else if(values.message.length < 20) {
        errors.message = 'Message must be more than 20 char.'
    }

    return errors

}