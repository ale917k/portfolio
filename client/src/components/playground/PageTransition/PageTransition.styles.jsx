import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      '&.page-enter': {
        opacity: 0,
        transform: 'scale(1.1)',
      },
      '&.page-enter-active': {
        opacity: 1,
        transform: 'scale(1)',
        transition: 'opacity 300ms, transform 300ms',
      },
      '&.page-exit': {
        opacity: 1,
        transform: 'scale(1)',
      },
      '&.page-exit-active': {
        opacity: 0,
        transform: 'scale(0.9)',
        transition: 'opacity 300ms, transform 300ms',
      },
    },
  }));

  export default useStyles;