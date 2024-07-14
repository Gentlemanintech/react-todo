import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';

const withAuthenticate = (WrappedComponent) => {
    return ({isLoggedIn, ...props}) => {
        if (!isLoggedIn) {
            return (
                <>
                <Alert severity="warning">
                Here is a gentle reminder that your not logged in.
                </Alert>
                <div>
                <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
                />
                <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                />
                <TextField id="outlined-search" label="Search field" type="search" />
      </div>
                </>
            )
        }
        return <WrappedComponent {...props}/>
    }
}

export default withAuthenticate