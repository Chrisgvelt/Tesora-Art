
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid lightgrey',
        borderRadius: '8px',

        "& .MuiInputLabel-root": {
            fontSize: '14px',
            marginBottom: '8px'
        },
        "& .MuiOutlinedInput-root": {
            height: '40px'
        },
        "& .MuiButton-root": {
            textTransform: 'unset',
            padding: '8px 40px'
        }
    },
    header: {
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        background: theme.palette.primary.main,
        borderTopRightRadius: '8px',
        borderTopLeftRadius: '8px',
        paddingLeft: '20px',

        "& .MuiSvgIcon-root": {
            marginRight: '10px'
        }
    },
    content: {
        padding: '20px'
    },
    fileInput: {
        width: '50px',
        height: '50px',
        display: 'flex !important',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgb(179, 179, 179)',
        cursor: 'pointer',

        "& img": {
            width: '100%',
            height: '50px'
        },
    },
    profile: {
        display: 'flex',
        alignItems: 'center',

        "& .MuiButton-root": {
            width: '200px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            padding: '4px 10px',
            marginRight: '10px',

            "& .MuiSvgIcon-root": {
                marginRight: '5px'
            }
        },
        "& .MuiInputLabel-root": {
            marginBottom: '0px'
        },
    }
}))