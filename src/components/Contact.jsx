import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import { Typography, Button, Grid, TextField, Box, Alert } from '@mui/material';

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#333',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#333',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#333',
      borderRadius: '0px',
      // backgroundColor: 'white'
    },
    '&:hover fieldset': {
      borderColor: '#333',
      borderRadius: '0px'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#333',
      borderRadius: '0px'
    },
  },
});

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+$/;
  return emailRegex.test(email);
}

const displayAlert = () => {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      The message was sent successfully.
    </Alert>
  )
}

export default function Contact () {
  const [nameError, setNameError] = React.useState(false);
  const [companyError, setCompanyError] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');
  const [messageError, setMessageError] = React.useState(false);
  const [formState, setFormState] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      email: data.get('email', '').toString().trim(),
      name: data.get('name', '').toString(),
      company: data.get('company', '').toString(),
      message: data.get('message', '').toString(),
    };

    let error = false;

    // Perform client-side validation
    if (!validateEmail(user.email)) {
      error = true;
      setEmailError('Invalid Email');
    }
    if (user.name.length === 0) {
      error = true;
      setNameError(true);
    }
    if (user.company.length === 0) {
      error = true;
      setCompanyError(true);
    }
    if (user.message.length === 0) {
      error = true;
      setMessageError(true);
    }
    if (error) return;

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setFormState(true))
      .catch(() => setFormState(false));

    event.currentTarget.reset();
  }

  React.useEffect(() => {
    const handleClick = () => {
      setFormState(false);
    }
    document.addEventListener('mousedown', handleClick);
  }, []);

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      width={'100%'}
      backgroundColor={'#dfbaf2'}
    >
      <Grid container gap={0} width={'60%'} padding={'80px 0px'}>

        {/* text */}
        <Grid item xs={12} sm={6} paddingRight={{ xs: '0px', sm: '20px' }} paddingTop={{ xs: '10px', sm: '0px' }}>
          <Typography variant={'h2'}>Get in touch</Typography>
          <Typography variant={'body1'} margin={'18px 0px'}>
            Ready to enhance your product's usability, boost user engagement, and gain a competitive edge?
          </Typography>
          <Typography variant={'body1'}>
            Let's discuss your challenges and craft a strategy for digital excellence.
          </Typography>
        </Grid>

        {/* form */}
        <Grid item xs={12} sm={6} paddingLeft={{ xs: '0px', sm: '10px' }} paddingTop={{ xs: '40px', sm: '0px' }}>

          <Box
            component={'form'}
            name={'contact-form'}
            noValidate
            onSubmit={handleSubmit}
          >
            <input type={'hidden'} name={'form-name'} value={'contact'} />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CustomTextField
                  aria-label={'name input field'}
                  required
                  fullWidth
                  size={'small'}
                  id={'name'}
                  name={'name'}
                  type={'text'}
                  label={'Name'}
                  autoComplete={'given-name'}
                  error={nameError}
                  helperText={nameError ? 'Name can\'t be empty' : null}
                  onChange={() => setNameError(false)}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  aria-label={'company input field'}
                  required
                  fullWidth
                  size={'small'}
                  id={'company'}
                  name={'company'}
                  type={'text'}
                  label={'Company'}
                  autoComplete={'company'}
                  error={companyError}
                  helperText={companyError ? 'Company can\'t be empty' : null}
                  onChange={() => setCompanyError('')}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  aria-label={'email input field'}
                  required
                  fullWidth
                  size={'small'}
                  id={'email'}
                  name={'email'}
                  type={'email'}
                  label={'Email'}
                  autoComplete={'email'}
                  error={emailError !== ''}
                  helperText={emailError}
                  onChange={() => setEmailError('')}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  aria-label={'message input field'}
                  required
                  fullWidth
                  id={'message'}
                  name={'message'}
                  label={'Message'}
                  type={'text'}
                  autoComplete={'new-message'}
                  error={messageError}
                  helperText={messageError ? 'Message field can\'t be empty' : null}
                  onChange={() => setMessageError(false)}
                  multiline={true}
                  inputProps={{ style: { height: '100px' } }}
                  sx={{ marginBottom: '10px' }}
                />
              </Grid>
            </Grid>

            <Box
              display={'flex'}
              justifyContent={'right'}
              width={'100%'}
            >
              <Button
                type={'submit'}
                variant={'contained'}
                color={'primary'}
                disableElevation
                sx={{ borderRadius: '100px', marginTop: '10px', textTransform: 'capitalize' }}
              >
                Submit
              </Button>
            </Box>

            {
              formState ?
              <Box marginTop={'30px'}>{ displayAlert() }</Box> :
              null
            }

          </Box>

        </Grid>
      </Grid>
    </Box>
  )
}