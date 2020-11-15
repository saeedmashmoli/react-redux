import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0 , 0 , 0 , 0.5)',
        backgroundBlendMode: 'darken'
    },
    border: {
        border: 'solid'
    },
    card: {
        direction: 'rtl',
        fontFamily: 'Vazir !important' ,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative'
    },
    fullHeightCard: {
        height: '100%'
    },
    overlay: {
        fontFamily: 'Vazir !important',
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white'
    },
    overlay2: {
        fontFamily: 'Vazir',
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white'
    },
    details: {
        fontFamily: 'Vazir !important',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px'
    },
    title: {
        fontFamily: 'Vazir !important',
        padding: '0 16px'
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        justifyItems: 'space-between'
    }

})